// scripts/sync-gallery-exif.mjs
//
// Scans public/images/gallery/**/*.{jpg,jpeg,png} for EXIF date + GPS data
// and fills in any missing `when` / `where` fields in src/data/gallery.yaml
// for the matching photo entries. Never overwrites fields you've already
// filled in by hand. Run automatically by the gallery-exif-sync workflow
// whenever new photos are pushed to public/images/gallery/, or run it
// yourself locally with: node scripts/sync-gallery-exif.mjs
//
// GPS coordinates are reverse-geocoded into "City, State" using the free
// OpenStreetMap Nominatim API (no API key required, rate-limited to ~1
// request/sec per their usage policy).

import { readFile, writeFile } from 'node:fs/promises';
import { readdirSync, statSync, existsSync } from 'node:fs';
import path from 'node:path';
import exifr from 'exifr';
import { parseDocument } from 'yaml';

const GALLERY_DIR = path.resolve('public/images/gallery');
const YAML_PATH = path.resolve('src/data/gallery.yaml');
const IMAGE_RE = /\.(jpe?g|png)$/i;

function walk(dir) {
  if (!existsSync(dir)) return [];
  let results = [];
  for (const entry of readdirSync(dir)) {
    const full = path.join(dir, entry);
    if (statSync(full).isDirectory()) {
      results = results.concat(walk(full));
    } else if (IMAGE_RE.test(entry)) {
      results.push(full);
    }
  }
  return results;
}

async function reverseGeocode(lat, lon) {
  const url = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'dwilliams-lab-website-gallery-sync/1.0 (drakew@umn.edu)',
      },
    });
    if (!res.ok) return null;
    const data = await res.json();
    const addr = data.address || {};
    const city = addr.city || addr.town || addr.village || addr.hamlet;
    const state = addr.state;
    return [city, state].filter(Boolean).join(', ') || null;
  } catch {
    return null;
  }
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
}

async function main() {
  const raw = await readFile(YAML_PATH, 'utf8');
  const doc = parseDocument(raw);
  const data = doc.toJS();

  const diskFiles = new Set(walk(GALLERY_DIR));
  let changed = false;

  for (let catIndex = 0; catIndex < data.length; catIndex++) {
    const category = data[catIndex];
    const items = category.items || [];

    for (let itemIndex = 0; itemIndex < items.length; itemIndex++) {
      const item = items[itemIndex];
      const absPath = path.resolve(item.image);

      if (!diskFiles.has(absPath)) continue; // referenced file not present, skip
      if (item.when && item.where) continue; // already filled in, don't touch

      let exif;
      try {
        exif = await exifr.parse(absPath, {
          gps: true,
          pick: ['DateTimeOriginal', 'CreateDate', 'latitude', 'longitude'],
        });
      } catch {
        continue;
      }
      if (!exif) continue;

      if (!item.when) {
        const date = exif.DateTimeOriginal || exif.CreateDate;
        if (date) {
          const formatted = formatDate(new Date(date));
          doc.setIn([catIndex, 'items', itemIndex, 'when'], formatted);
          changed = true;
          console.log(`${item.image}: when = ${formatted}`);
        }
      }

      if (!item.where && exif.latitude && exif.longitude) {
        const place = await reverseGeocode(exif.latitude, exif.longitude);
        if (place) {
          doc.setIn([catIndex, 'items', itemIndex, 'where'], place);
          changed = true;
          console.log(`${item.image}: where = ${place}`);
        }
        // Be polite to the free Nominatim API: max ~1 request/sec.
        await new Promise((resolve) => setTimeout(resolve, 1100));
      }
    }
  }

  if (changed) {
    await writeFile(YAML_PATH, doc.toString(), 'utf8');
    console.log('gallery.yaml updated.');
  } else {
    console.log('No changes needed -- nothing to update.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
