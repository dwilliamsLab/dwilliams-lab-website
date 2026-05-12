import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_q-TdbtyM.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" style="text-align: center; padding-block: var(--space-24);"> <h1 style="font-size: var(--text-2xl); margin-bottom: var(--space-4);">404</h1> <p style="color: var(--color-text-muted); margin-bottom: var(--space-8);">This page doesn't exist.</p> <a href="/" class="btn btn-primary">Go home</a> </div> ` })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/404.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
