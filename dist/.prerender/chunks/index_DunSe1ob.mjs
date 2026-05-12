import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { m as maybeRenderHead, b as addAttribute, a as renderTemplate, c as renderSlot, r as renderComponent } from './prerender_q-TdbtyM.mjs';
import 'clsx';

const $$Feature = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Feature;
  const { image, imageAlt = "", headline, flip = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["feature", { "feature--flipped": flip }], "class:list")} data-astro-cid-ezsi7upz> ${image && renderTemplate`<div class="feature-image" data-astro-cid-ezsi7upz> <img${addAttribute(image, "src")}${addAttribute(imageAlt, "alt")} loading="lazy" decoding="async" data-astro-cid-ezsi7upz> </div>`} <div class="feature-body" data-astro-cid-ezsi7upz> ${headline && renderTemplate`<h3 class="feature-headline" data-astro-cid-ezsi7upz>${headline}</h3>`} <div class="feature-content" data-astro-cid-ezsi7upz> ${renderSlot($$result, $$slots["default"])} </div> </div> </div>`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/components/Feature.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Research", "description": "Research areas of the Laboratory of Oral Mucosal Immunity.", "data-astro-cid-ynj567il": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-ynj567il> <div class="page-header" data-astro-cid-ynj567il> <h1 data-astro-cid-ynj567il>Research Topics</h1> <p data-astro-cid-ynj567il>Four interconnected themes guide our work at the oral barrier.</p> </div> </div> <div class="container research-sections" data-astro-cid-ynj567il> <section class="research-section" data-astro-cid-ynj567il> <h2 data-astro-cid-ynj567il>Immune organization at the oral barrier</h2> ${renderComponent($$result2, "Feature", $$Feature, { "image": "/images/imm-org.png", "imageAlt": "Immune organization diagram", "data-astro-cid-ynj567il": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-ynj567il>
A central goal of our lab is to understand how the oral mucosa organizes immune responses
          in a tissue that is constantly exposed to microbes, mechanical stress, and environmental
          change. We study how epithelial, stromal, vascular, and immune cells assemble into
          specialized neighborhoods that support barrier defense in health and are reshaped during
          chronic inflammation.
</p> <p data-astro-cid-ynj567il>
This work has led us to a major interest in how the oral mucosa builds organized immune
          structures near the tooth surface and how these local environments coordinate adaptive
          immunity. More broadly, we think the unique organization of the oral mucosa is what drives
          the distinctive immune responses we observe here.
</p> ` })} </section> <section class="research-section" data-astro-cid-ynj567il> <h2 data-astro-cid-ynj567il>Host-microbe interactions and adaptive immunity</h2> ${renderComponent($$result2, "Feature", $$Feature, { "image": "/images/hostmicro.png", "imageAlt": "Host-microbe interactions diagram", "flip": true, "data-astro-cid-ynj567il": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-ynj567il>
The oral barrier is home to dense and diverse microbial communities, yet many of the rules
          governing how the immune system interprets these signals remain unclear. We are interested
          in how microbial exposure shapes T cell responses, how protective surveillance is
          established, and how protective responses transition to pathologic inflammation during
          chronic disease.
</p> <p data-astro-cid-ynj567il>
Our research asks how the oral mucosa recognizes specific microbial challenge, how local
          adaptive immune responses are organized, and how tissue-resident immune activity
          contributes to both oral disease and broader systemic consequences.
</p> ` })} </section> <section class="research-section" data-astro-cid-ynj567il> <h2 data-astro-cid-ynj567il>Regeneration and wound healing</h2> ${renderComponent($$result2, "Feature", $$Feature, { "image": "/images/wh.png", "imageAlt": "Wound healing diagram", "data-astro-cid-ynj567il": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-ynj567il>
In contrast to many adult tissues, the oral mucosa can heal rapidly while preserving
          barrier integrity and limiting scar formation. We study this regenerative capacity as a
          window into the tissue features that promote effective repair, with particular interest in
          how local stromal, immune, and neural programs help maintain a pro-healing environment.
</p> <p data-astro-cid-ynj567il>
Our goal is to understand why some injuries resolve through regeneration while others
          progress toward fibrosis, and to define the shared principles that underlie privileged
          healing across species, tissues, and disease contexts.
</p> ` })} </section> <section class="research-section" data-astro-cid-ynj567il> <h2 data-astro-cid-ynj567il>Oral-systemic communication</h2> ${renderComponent($$result2, "Feature", $$Feature, { "image": "/images/oral-systemic.png", "imageAlt": "Oral-systemic communication diagram", "flip": true, "data-astro-cid-ynj567il": true }, { "default": ($$result3) => renderTemplate` <p data-astro-cid-ynj567il>
Our lab is interested in how local inflammatory events at the oral barrier influence
          physiology beyond the mouth. We investigate how oral immune responses intersect with
          systemic processes including chronic inflammatory disease, autoimmunity, and
          maternal-fetal biology.
</p> <p data-astro-cid-ynj567il>
This theme extends our work from local tissue organization to whole-body communication,
          asking how the mouth functions not only as a barrier surface but also as a signaling hub
          with consequences for distant tissues.
</p> ` })} </section> </div> <div class="container" data-astro-cid-ynj567il> <p class="ai-note" data-astro-cid-ynj567il>Visuals on this page use AI-generated art. The ideas are our own.</p> </div> ` })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/research/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/research/index.astro";
const $$url = "/research";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
