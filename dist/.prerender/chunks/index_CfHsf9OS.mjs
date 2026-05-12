import { c as createComponent, $ as $$BaseLayout, r as renderScript } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_q-TdbtyM.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const codeRepos = [
    {
      slug: "williamsdrake/oralAtlas",
      name: "Oral Atlas (2021)",
      description: "Code used to analyze datasets and generate figures from Williams et al., 2021",
      link: "https://github.com/williamsdrake/oralAtlas"
    },
    {
      slug: "williamsdrake/epithelial-IL23",
      name: "Kim et al. (2024)",
      description: "Code used to analyze CZI datasets and generate figures in Kim et al., 2024",
      link: "https://github.com/williamsdrake/epithelial-IL23"
    },
    {
      slug: "dwilliamsLab/gingiva-2025",
      name: "Theofilou et al. (2026)",
      description: "Code used to analyze datasets and generate figures in Theofilou et al., 2026",
      link: "https://github.com/dwilliamsLab/gingiva-2025"
    }
  ];
  async function fetchRepoData(slug) {
    try {
      const res = await fetch(`https://api.github.com/repos/${slug}`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!res.ok) return null;
      const data = await res.json();
      return {
        stars: data.stargazers_count,
        forks: data.forks_count,
        language: data.language,
        updatedAt: data.pushed_at
      };
    } catch {
      return null;
    }
  }
  const codeWithStats = await Promise.all(
    codeRepos.map(async (r) => ({ ...r, stats: await fetchRepoData(r.slug) }))
  );
  function formatDate(iso) {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "short" });
  }
  function formatNum(n) {
    return n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : String(n);
  }
  const datasets = [
    {
      name: "Oral Atlas (2021)",
      description: "An interactive data viewer for datasets from Williams et al., 2021",
      link: "https://oral.cellatlas.io/",
      image: "/images/resource/atlas.jpg"
    },
    {
      name: "Theofilou et al. (2026)",
      description: "Raw and processed data from Theofilou et al., 2026",
      link: "https://dataverse.harvard.edu/dataverse/gingiva2025",
      image: "/images/resource/dataverse.png"
    }
  ];
  const protocols = [
    {
      name: "Human oral mucosa dissociation",
      description: "Protocol to dissociate human oral mucosal tissues into single cell suspensions",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8551218/",
      image: "/images/resource/dissociation.jpg"
    },
    {
      name: "Mouse oral mucosa dissociation",
      description: "Protocol to dissociate murine oral mucosal tissues into single cell suspensions",
      link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10842481/",
      image: "/images/resource/mouse-dis.png"
    }
  ];
  const internalLinks = [
    {
      name: "Welcome Document",
      description: "Onboarding guide and lab expectations for new members",
      link: "https://docs.google.com/document/d/1XtxjUNvHMl3G3nrNnM9QGM3nCo7a8KeC5ba7HTkLq9I/edit?usp=sharing",
      icon: "doc",
      service: "Google Docs"
    },
    {
      name: "Lab Inventory & Ordering",
      description: "Reagents, equipment, and supply tracking spreadsheet",
      link: "https://docs.google.com/spreadsheets/d/19A0KaWvbeCfcr8miUmoP1oyUqRSAKRXNY3gwpBvx1Ug/edit?usp=sharing",
      icon: "sheet",
      service: "Google Sheets"
    },
    {
      name: "Lab Notebook",
      description: "Electronic lab notebook for LOMI",
      link: "https://benchling.com/lomi-umn/",
      icon: "notebook",
      service: "Benchling"
    },
    {
      name: "Box Drive",
      description: "Preferred shared lab file storage",
      link: "https://umn.box.com/s/xne5lhyt4ro4qg2hnqeda08t1b0p0g7o",
      icon: "folder",
      service: "UMN Box"
    },
    {
      name: "Google Drive",
      description: "Alternate shared lab file storage",
      link: "https://drive.google.com/drive/u/1/folders/0ANOp8ULkPBcqUk9PVA",
      icon: "folder",
      service: "Google Drive"
    }
  ];
  const tabs = [
    { id: "code", label: "Code", count: codeWithStats.length },
    { id: "datasets", label: "Datasets", count: datasets.length },
    { id: "protocols", label: "Protocols", count: protocols.length },
    { id: "internal", label: "Internal", count: internalLinks.length }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Resources", "description": "Datasets, code, protocols, and tools from the Laboratory of Oral Mucosal Immunity." }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="page-header page-header--narrow"> <h1>Resources</h1> <p>Datasets, code, protocols, and tools from our lab.</p> </div> <section class="section section--sm"> <!-- Tab bar --> <div class="resource-tabs" role="tablist" aria-label="Resource categories"> ${tabs.map((tab, i) => renderTemplate`<button role="tab" class="resource-tab"${addAttribute(tab.id, "data-tab")}${addAttribute(i === 0 ? "true" : "false", "aria-selected")}${addAttribute(`panel-${tab.id}`, "aria-controls")}${addAttribute(`tab-${tab.id}`, "id")}> ${tab.label} <span class="resource-tab-count">${tab.count}</span> </button>`)} </div> <!-- Code panel --> <div role="tabpanel" id="panel-code" aria-labelledby="tab-code" class="resource-panel"> <ul role="list" class="resource-grid"> ${codeWithStats.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="resource-card resource-card--repo" target="_blank" rel="noopener noreferrer"> <div class="repo-card-header"> <svg class="repo-icon" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="16" height="16"> <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z"></path> </svg> <span class="repo-slug">${item.slug}</span> </div> <div class="repo-card-body"> <span class="resource-card-name">${item.name}</span> <span class="resource-card-desc">${item.description}</span> </div> ${item.stats && renderTemplate`<div class="repo-card-footer"> ${item.stats.language && renderTemplate`<span class="repo-stat"> <span class="repo-lang-dot" aria-hidden="true"></span> ${item.stats.language} </span>`} <span class="repo-stat"> <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"> <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"></path> </svg> ${formatNum(item.stats.stars)} </span> <span class="repo-stat"> <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"> <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path> </svg> ${formatNum(item.stats.forks)} </span> <span class="repo-stat repo-stat--date">Updated ${formatDate(item.stats.updatedAt)}</span> </div>`} </a> </li>`)} </ul> </div> <!-- Datasets panel --> <div role="tabpanel" id="panel-datasets" aria-labelledby="tab-datasets" class="resource-panel" hidden> <ul role="list" class="resource-grid"> ${datasets.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="resource-card" target="_blank" rel="noopener noreferrer"> <div class="resource-card-image"> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} loading="lazy" width="640" height="360"> </div> <div class="resource-card-body"> <span class="resource-card-name">${item.name}</span> <span class="resource-card-desc">${item.description}</span> </div> </a> </li>`)} </ul> </div> <!-- Protocols panel --> <div role="tabpanel" id="panel-protocols" aria-labelledby="tab-protocols" class="resource-panel" hidden> <ul role="list" class="resource-grid"> ${protocols.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="resource-card" target="_blank" rel="noopener noreferrer"> <div class="resource-card-image"> <img${addAttribute(item.image, "src")}${addAttribute(item.name, "alt")} loading="lazy" width="640" height="360"> </div> <div class="resource-card-body"> <span class="resource-card-name">${item.name}</span> <span class="resource-card-desc">${item.description}</span> </div> </a> </li>`)} </ul> </div> <!-- Internal panel --> <div role="tabpanel" id="panel-internal" aria-labelledby="tab-internal" class="resource-panel" hidden> <div class="member-notice"> <svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"> <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm6.75-3.25a.75.75 0 0 1 .75.75v4.5a.75.75 0 0 1-1.5 0v-4.5a.75.75 0 0 1 .75-.75Zm0-2a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5Z"></path> </svg>
These links are intended for current lab members only.
</div> <ul role="list" class="member-list"> ${internalLinks.map((item) => renderTemplate`<li> <a${addAttribute(item.link, "href")} class="member-link" target="_blank" rel="noopener noreferrer"> <div class="member-link-icon" aria-hidden="true"> ${item.icon === "doc" && renderTemplate`<svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"> <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path> </svg>`} ${item.icon === "sheet" && renderTemplate`<svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"> <path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path> </svg>`} ${item.icon === "notebook" && renderTemplate`<svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"> <path d="M3.75 0h8.5C13.216 0 14 .784 14 1.75v12.5A1.75 1.75 0 0 1 12.25 16h-8.5A1.75 1.75 0 0 1 2 14.25V1.75C2 .784 2.784 0 3.75 0ZM3.5 1.75v12.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25V1.75a.25.25 0 0 0-.25-.25h-8.5a.25.25 0 0 0-.25.25ZM5 4.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 4.25Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 5 7.25Zm0 3a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 0 1.5h-2.5A.75.75 0 0 1 5 10.25Z"></path> </svg>`} ${item.icon === "folder" && renderTemplate`<svg viewBox="0 0 16 16" fill="currentColor" width="18" height="18"> <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0 0 16 13.25v-8.5A1.75 1.75 0 0 0 14.25 3H7.5a.25.25 0 0 1-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75Z"></path> </svg>`} </div> <div class="member-link-body"> <span class="member-link-name">${item.name}</span> <span class="member-link-desc">${item.description}</span> </div> <div class="member-link-service">${item.service}</div> <svg class="member-link-arrow" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" width="14" height="14"> <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.75.75 0 0 1-1.5 0V2.56l-3.97 3.97a.75.75 0 0 1-1.06-1.06l3.97-3.97h-1.836a.75.75 0 0 1 0-1.5Z"></path> </svg> </a> </li>`)} </ul> </div> </section> </div> ` })} ${renderScript($$result, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/resources/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/resources/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/resources/index.astro";
const $$url = "/resources";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
