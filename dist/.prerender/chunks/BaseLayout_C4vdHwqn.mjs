import { A as AstroError, I as InvalidComponentArgs, f as createRenderInstruction, a as renderTemplate, c as renderSlot, h as renderHead, b as addAttribute } from './prerender_q-TdbtyM.mjs';
import 'piccolore';
import 'clsx';

function validateArgs(args) {
  if (args.length !== 3) return false;
  if (!args[0] || typeof args[0] !== "object") return false;
  return true;
}
function baseCreateComponent(cb, moduleId, propagation) {
  const name = moduleId?.split("/").pop()?.replace(".astro", "") ?? "";
  const fn = (...args) => {
    if (!validateArgs(args)) {
      throw new AstroError({
        ...InvalidComponentArgs,
        message: InvalidComponentArgs.message(name)
      });
    }
    return cb(...args);
  };
  Object.defineProperty(fn, "name", { value: name, writable: false });
  fn.isAstroComponentFactory = true;
  fn.moduleId = moduleId;
  fn.propagation = propagation;
  return fn;
}
function createComponentWithOptions(opts) {
  const cb = baseCreateComponent(opts.factory, opts.moduleId, opts.propagation);
  return cb;
}
function createComponent(arg1, moduleId, propagation) {
  if (typeof arg1 === "function") {
    return baseCreateComponent(arg1, moduleId, propagation);
  } else {
    return createComponentWithOptions(arg1);
  }
}

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Laboratory of Oral Mucosal Immunity",
    description = "Website for the Laboratory of Oral Mucosal Immunity at the University of Minnesota"
  } = Astro2.props;
  const siteName = "Laboratory of Oral Mucosal Immunity";
  const fullTitle = title === siteName ? title : `${title} | ${siteName}`;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"', '><meta name="generator"', "><title>", '</title><!-- Fonts: Instrument Serif (display) + Work Sans (body) --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300..700&display=swap" rel="stylesheet"><!-- Favicon --><link rel="icon" type="image/png" href="/images/logo.png"><script async src="https://d1bxh8uas1mnw7.cloudfront.net/assets/embed.js"><\/script><script async src="https://badge.dimensions.ai/badge.js" charset="utf-8"><\/script>', '</head> <body> <a class="skip-link" href="#main-content">Skip to content</a> <header class="site-header"> <nav class="nav-inner" aria-label="Main navigation"> <a href="/" class="site-logo" aria-label="Laboratory of Oral Mucosal Immunity — home"> <span class="logo-name">Laboratory of Oral Mucosal Immunity</span> <span class="logo-sub">at U of MN</span> </a> <ul role="list" class="nav-links"> <li><a href="/research">Research</a></li> <li><a href="/team">Team</a></li> <li><a href="/publications">Publications</a></li> <li><a href="/events">Events</a></li> <li><a href="/resources">Resources</a></li> <li><a href="/values">Values</a></li> <li><a href="/contact">Contact</a></li> </ul> <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-nav"> <span></span><span></span><span></span> </button> </nav> <div id="mobile-nav" class="mobile-nav" hidden> <ul role="list"> <li><a href="/research">Research</a></li> <li><a href="/team">Team</a></li> <li><a href="/publications">Publications</a></li> <li><a href="/events">Events</a></li> <li><a href="/resources">Resources</a></li> <li><a href="/values">Values</a></li> <li><a href="/contact">Contact</a></li> </ul> </div> </header> <main id="main-content"> ', ' </main> <footer class="site-footer"> <div class="footer-inner"> <p>&copy; ', ' Laboratory of Oral Mucosal Immunity</p> <div class="footer-links"> <a href="mailto:drakew@umn.edu" aria-label="Email">Email</a> <a href="https://github.com/dwilliamslab" aria-label="GitHub" target="_blank" rel="noopener noreferrer">GitHub</a> </div> </div> </footer> ', " </body> </html>"])), addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), fullTitle, renderHead(), renderSlot($$result, $$slots["default"]), (/* @__PURE__ */ new Date()).getFullYear(), renderScript($$result, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts"));
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $, createComponent as c, renderScript as r };
