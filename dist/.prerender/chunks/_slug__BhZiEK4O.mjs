import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from './prerender_q-TdbtyM.mjs';
import { g as getCollection } from './_astro_content_Ba5U41EA.mjs';

const getStaticPaths = async () => {
  const members = await getCollection("members");
  return members.map((member) => ({
    params: { slug: member.slug },
    props: { member }
  }));
};
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { member } = Astro2.props;
  const { Content } = await member.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": member.data.name, "description": member.data.description, "data-astro-cid-zgofuphd": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container" data-astro-cid-zgofuphd> <div class="member-profile" data-astro-cid-zgofuphd> ${member.data.image && renderTemplate`<img${addAttribute(`/${member.data.image}`, "src")}${addAttribute(member.data.name, "alt")} class="member-photo" width="240" height="240" loading="eager" data-astro-cid-zgofuphd>`} <div class="member-details" data-astro-cid-zgofuphd> <h1 data-astro-cid-zgofuphd>${member.data.name}</h1> <p class="member-title" data-astro-cid-zgofuphd>${member.data.description}</p> ${member.data.links && renderTemplate`<div class="member-external-links" data-astro-cid-zgofuphd> ${member.data.links.email && renderTemplate`<a${addAttribute(`mailto:${member.data.links.email}`, "href")} data-astro-cid-zgofuphd>Email</a>`} ${member.data.links.orcid && renderTemplate`<a${addAttribute(`https://orcid.org/${member.data.links.orcid}`, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-zgofuphd>ORCID</a>`} ${member.data.links["google-scholar"] && renderTemplate`<a${addAttribute(`https://scholar.google.com/citations?user=${member.data.links["google-scholar"]}`, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-zgofuphd>Google Scholar</a>`} ${member.data.links.github && renderTemplate`<a${addAttribute(`https://github.com/${member.data.links.github}`, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-zgofuphd>GitHub</a>`} </div>`} </div> </div> <div class="member-bio prose" data-astro-cid-zgofuphd> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-zgofuphd": true })} </div> </div> ` })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/team/[slug].astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/team/[slug].astro";
const $$url = "/team/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
