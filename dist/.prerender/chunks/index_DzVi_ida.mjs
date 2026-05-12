import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from './prerender_q-TdbtyM.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Ba5U41EA.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allMembers = await getCollection("members");
  const roleOrder = ["pi", "lab-manager", "manager", "postdoc", "phd", "ms", "undergrad", "staff"];
  const currentMembers = allMembers.filter((m) => (m.data.group ?? "current") !== "alumni").filter((m) => m.data.hidden !== true).sort((a, b) => {
    const aIndex = roleOrder.indexOf(a.data.role);
    const bIndex = roleOrder.indexOf(b.data.role);
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });
  const alumni = allMembers.filter((m) => (m.data.group ?? "current") === "alumni").filter((m) => m.data.hidden !== true);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Team", "description": "Meet the members of the Laboratory of Oral Mucosal Immunity." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container"> <div class="page-header"> <h1>Team</h1> <p>Click a member to view their bio, links, and profile details.</p> </div> <section class="section section--sm"> <ul role="list" class="member-grid"> ', " </ul> </section> ", " </div> <script>\n    const memberCards = document.querySelectorAll('.member-card');\n    const dialogs = document.querySelectorAll('.member-dialog');\n\n    memberCards.forEach((card) => {\n      card.addEventListener('click', () => {\n        const parent = card.closest('li');\n        const dialog = parent?.querySelector('.member-dialog');\n        if (dialog && typeof dialog.showModal === 'function') {\n          dialog.showModal();\n        }\n      });\n    });\n\n    dialogs.forEach((dialog) => {\n      const closeButton = dialog.querySelector('[data-dialog-close]');\n      closeButton?.addEventListener('click', () => dialog.close());\n      dialog.addEventListener('click', (event) => {\n        const card = dialog.querySelector('.member-dialog-card');\n        if (!card) return;\n        const rect = card.getBoundingClientRect();\n        const clickedInside =\n          event.clientX >= rect.left &&\n          event.clientX <= rect.right &&\n          event.clientY >= rect.top &&\n          event.clientY <= rect.bottom;\n        if (!clickedInside) dialog.close();\n      });\n    });\n  <\/script> "])), maybeRenderHead(), currentMembers.map(async (member) => {
    const { Content } = await renderEntry(member);
    return renderTemplate`<li> <button class="member-card" type="button" aria-haspopup="dialog"> <div class="member-avatar"> ${member.data.image ? renderTemplate`<img${addAttribute("/" + member.data.image, "src")}${addAttribute(member.data.name, "alt")} width="240" height="240" loading="lazy" decoding="async">` : renderTemplate`<div class="member-avatar-placeholder" aria-hidden="true"></div>`} </div> <div class="member-info"> <h2 class="member-name">${member.data.name}</h2> <p class="member-role">${member.data.description}</p> </div> </button> <dialog class="member-dialog"${addAttribute("title-" + member.slug, "aria-labelledby")}> <div class="member-dialog-card"> <button class="member-dialog-close" type="button" data-dialog-close${addAttribute("Close profile for " + member.data.name, "aria-label")}>
×
</button> <div class="member-dialog-layout"> <div class="member-dialog-media"> ${member.data.image ? renderTemplate`<img${addAttribute("/" + member.data.image, "src")}${addAttribute(member.data.name, "alt")} width="320" height="320" loading="eager">` : renderTemplate`<div class="member-avatar-placeholder member-avatar-placeholder--large" aria-hidden="true"></div>`} </div> <div class="member-dialog-body"> <h2${addAttribute("title-" + member.slug, "id")} class="member-dialog-name">${member.data.name}</h2> <p class="member-dialog-role">${member.data.description}</p> ${(member.data.links || member.data.cta) && renderTemplate`<div class="member-links"> ${member.data.links?.email && renderTemplate`<a${addAttribute("mailto:" + member.data.links.email, "href")} class="member-link">Email</a>`} ${member.data.links?.orcid && renderTemplate`<a${addAttribute("https://orcid.org/" + member.data.links.orcid, "href")} class="member-link" target="_blank" rel="noopener noreferrer">
ORCID
</a>`} ${member.data.links?.["google-scholar"] && renderTemplate`<a${addAttribute("https://scholar.google.com/citations?user=" + member.data.links["google-scholar"], "href")} class="member-link" target="_blank" rel="noopener noreferrer">
Scholar
</a>`} ${member.data.links?.github && renderTemplate`<a${addAttribute("https://github.com/" + member.data.links.github, "href")} class="member-link" target="_blank" rel="noopener noreferrer">
GitHub
</a>`} ${member.data.cta && renderTemplate`<a${addAttribute(member.data.cta.href, "href")} class="member-link member-link--cta"> ${member.data.cta.text} </a>`} </div>`} <div class="member-bio prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </div> </dialog> </li>`;
  }), alumni.length > 0 && renderTemplate`<section class="section section--sm"> <h2 class="alumni-heading">Alumni</h2> <ul role="list" class="alumni-list"> ${alumni.map((member) => renderTemplate`<li class="alumni-item"> <span>${member.data.name}</span> <span class="alumni-role">${member.data.description}</span> </li>`)} </ul> </section>`) })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/team/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/team/index.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
