import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, m as maybeRenderHead } from './prerender_q-TdbtyM.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact", "description": "Contact the Laboratory of Oral Mucosal Immunity." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="page-header page-header--narrow"> <h1>Contact</h1> <p>
Reach out to the Laboratory of Oral Mucosal Immunity for collaborations, trainee
        opportunities, or speaking invitations.
</p> </div> </div> <div class="container"> <section class="section section--sm contact-grid"> <div class="contact-card"> <h2>Get in touch</h2> <p>
Email is the best way to reach Drake and the lab. For time-sensitive matters, you can also
          call the lab office.
</p> <div class="contact-actions"> <a class="btn btn-primary" href="mailto:drakew@umn.edu">Email the lab</a> <a class="btn btn-outline" href="tel:+1-612-625-3974">(612) 625-3974</a> </div> </div> <div class="contact-card"> <img src="/images/east.jpg" alt="University of Minnesota East Bank campus and Malcolm Moos Health Sciences Tower" class="contact-image" loading="lazy" decoding="async"> <h2>Visit the lab</h2> <p class="contact-address">
Malcolm Moos Health Sciences Tower, Rm 17-175<br>
515 Delaware St SE<br>
Minneapolis, MN 55455
</p> <a class="btn btn-outline" href="https://maps.app.goo.gl/BH2MUyAq6faHwtbC8" target="_blank" rel="noopener noreferrer">
Open in Google Maps
</a> </div> </section> </div> ` })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
