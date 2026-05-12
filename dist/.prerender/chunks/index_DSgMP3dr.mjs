import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from './prerender_q-TdbtyM.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Ba5U41EA.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = (await getCollection("posts")).sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Laboratory of Oral Mucosal Immunity", "description": "We investigate how local tissue organization and microbial exposure shape adaptive immunity, wound healing, and whole-body physiology at the oral barrier." }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template(["  ", '<section class="hero section"> <div class="container"> <h1 class="hero-headline">\nDecoding how the oral barrier senses, heals, and signals\n</h1> <p class="hero-body">\nThe mouth is a densely colonized barrier that must distinguish friend from foe,\n        repair constant injury, and relay information to distant tissues. Our lab investigates\n        how local tissue organization and microbial exposure shape adaptive immunity,\n        wound healing, and whole‑body physiology at this interface.\n</p> <a href="/research" class="btn btn-primary">Read more about our research</a> </div> </section>  <section class="section section--sm"> <div class="container"> <h2 class="section-heading">Lab News</h2> ', " </div> </section> <script>\n    const postCards = document.querySelectorAll('.post-card');\n    const postDialogs = document.querySelectorAll('.post-dialog');\n\n    postCards.forEach((card) => {\n      card.addEventListener('click', () => {\n        const parent = card.closest('li');\n        const dialog = parent?.querySelector('.post-dialog');\n        if (dialog && typeof dialog.showModal === 'function') {\n          dialog.showModal();\n        }\n      });\n    });\n\n    postDialogs.forEach((dialog) => {\n      const closeButton = dialog.querySelector('[data-dialog-close]');\n      closeButton?.addEventListener('click', () => dialog.close());\n      dialog.addEventListener('click', (event) => {\n        const card = dialog.querySelector('.post-dialog-card');\n        if (!card) return;\n        const rect = card.getBoundingClientRect();\n        const clickedInside =\n          event.clientX >= rect.left &&\n          event.clientX <= rect.right &&\n          event.clientY >= rect.top &&\n          event.clientY <= rect.bottom;\n        if (!clickedInside) dialog.close();\n      });\n    });\n  <\/script> "])), maybeRenderHead(), posts.length === 0 ? renderTemplate`<p style="color: var(--color-text-muted)">No posts yet.</p>` : renderTemplate`<ul role="list" class="post-list"> ${posts.map(async (post) => {
    const { Content } = await renderEntry(post);
    const prettyDate = post.data.date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
    return renderTemplate`<li> <button class="post-card" type="button" aria-haspopup="dialog"> ${post.data.image && renderTemplate`<div class="post-card-thumb"> <img${addAttribute("/" + post.data.image, "src")}${addAttribute(post.data.title, "alt")} width="64" height="64" loading="lazy"> </div>`} <div class="post-card-body"> <span class="post-title">${post.data.title}</span> <time class="post-date"${addAttribute(post.data.date.toISOString(), "datetime")}> ${prettyDate} </time> </div> </button> <dialog class="post-dialog"${addAttribute("post-title-" + post.id, "aria-labelledby")}> <div class="post-dialog-card"> <button class="post-dialog-close" type="button" data-dialog-close${addAttribute("Close post: " + post.data.title, "aria-label")}>
×
</button> ${post.data.image && renderTemplate`<div class="post-dialog-image"> <img${addAttribute("/" + post.data.image, "src")}${addAttribute(post.data.title, "alt")} width="480" height="320" loading="eager"> </div>`} <h2${addAttribute("post-title-" + post.id, "id")} class="post-dialog-title"> ${post.data.title} </h2> <time class="post-dialog-date"${addAttribute(post.data.date.toISOString(), "datetime")}> ${prettyDate} </time> <div class="post-dialog-body prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </dialog> </li>`;
  })} </ul>`) })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
