import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_q-TdbtyM.mjs';
import { g as getCollection, r as renderEntry } from './_astro_content_Ba5U41EA.mjs';

async function getStaticPaths() {
  const posts = await getCollection("posts");
  return posts.map((post) => ({
    params: { id: post.id },
    props: { post }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  const prettyDate = post.data.date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": post.data.title, "description": post.data.title }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="news-post section section--sm"> <a href="/" class="news-back">&larr; Lab News</a> ${post.data.image && renderTemplate`<div class="news-image"> <img${addAttribute("/" + post.data.image, "src")}${addAttribute(post.data.title, "alt")} width="480" height="320" loading="eager"> </div>`} <h1 class="news-title">${post.data.title}</h1> <time class="news-date"${addAttribute(post.data.date.toISOString(), "datetime")}>${prettyDate}</time> <div class="news-body prose"> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> ` })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/news/[id].astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/news/[id].astro";
const $$url = "/news/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
