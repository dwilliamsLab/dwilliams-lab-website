import { c as createComponent, $ as $$BaseLayout } from './BaseLayout_C4vdHwqn.mjs';
import 'piccolore';
import { r as renderComponent, a as renderTemplate, b as addAttribute, m as maybeRenderHead } from './prerender_q-TdbtyM.mjs';

var data = [ { slug:"thanksgiving-2025",
    title:"Labsgiving 2025",
    date:new Date(1764201600000),
    location:"Wayzata, MN",
    cover:"/images/events/tg2025/cover.jpg",
    caption:"The lab celebrates Thanksgiving together.",
    photos:[ "/images/events/tg2025/cover.jpg" ] },
  { slug:"thanksgiving-2025",
    title:"Labsgiving 2025",
    date:new Date(1764201600000),
    location:"Wayzata, MN",
    cover:"/images/events/tg2025/cover.jpg",
    caption:"The lab celebrates Thanksgiving together.",
    photos:[ "/images/events/tg2025/cover.jpg" ] } ];

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const sortedEvents = [...data].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredEvent = sortedEvents[0];
  const remainingEvents = sortedEvents.slice(1);
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Events", "description": "Snapshots from conferences, retreats, and lab gatherings.", "data-astro-cid-oygtpqo5": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", '<div class="container" data-astro-cid-oygtpqo5> <div class="page-header page-header--narrow" data-astro-cid-oygtpqo5> <h1 data-astro-cid-oygtpqo5>Events</h1> <p data-astro-cid-oygtpqo5>Snapshots from conferences, retreats, celebrations, and everyday lab life.</p> </div> ', " ", " </div> <script>\n    const openButtons = document.querySelectorAll('.featured-event-card, .archive-button');\n    const dialogs = document.querySelectorAll('.event-dialog');\n\n    openButtons.forEach((button) => {\n      button.addEventListener('click', () => {\n        const parent = button.parentElement;\n        const dialog = parent ? parent.querySelector('.event-dialog') : null;\n        if (dialog && typeof dialog.showModal === 'function') {\n          dialog.showModal();\n        }\n      });\n    });\n\n    dialogs.forEach((dialog) => {\n      const closeButton = dialog.querySelector('[data-dialog-close]');\n\n      if (closeButton) {\n        closeButton.addEventListener('click', () => {\n          dialog.close();\n        });\n      }\n\n      dialog.addEventListener('click', (event) => {\n        const card = dialog.querySelector('.event-dialog-card');\n        if (!card) return;\n\n        const rect = card.getBoundingClientRect();\n        const clickedInside =\n          event.clientX >= rect.left &&\n          event.clientX <= rect.right &&\n          event.clientY >= rect.top &&\n          event.clientY <= rect.bottom;\n\n        if (!clickedInside) {\n          dialog.close();\n        }\n      });\n    });\n  <\/script> "])), maybeRenderHead(), featuredEvent && renderTemplate`<section class="events-feature" data-astro-cid-oygtpqo5> <button type="button" class="featured-event-card" aria-haspopup="dialog" data-astro-cid-oygtpqo5> <div class="featured-event-media" data-astro-cid-oygtpqo5> <img${addAttribute(featuredEvent.cover, "src")}${addAttribute(featuredEvent.title, "alt")} loading="eager" decoding="async" data-astro-cid-oygtpqo5> </div> <div class="featured-event-body" data-astro-cid-oygtpqo5> <p class="featured-event-kicker" data-astro-cid-oygtpqo5>Latest event</p> <h2 class="featured-event-title" data-astro-cid-oygtpqo5>${featuredEvent.title}</h2> <p class="featured-event-meta" data-astro-cid-oygtpqo5> ${formatDate(featuredEvent.date)}${featuredEvent.location ? ` · ${featuredEvent.location}` : ""} </p> ${featuredEvent.caption && renderTemplate`<p class="featured-event-caption" data-astro-cid-oygtpqo5>${featuredEvent.caption}</p>`} </div> </button> <dialog class="event-dialog"${addAttribute(`title-${featuredEvent.slug}`, "aria-labelledby")} data-astro-cid-oygtpqo5> <div class="event-dialog-card" data-astro-cid-oygtpqo5> <button class="event-dialog-close" type="button" data-dialog-close${addAttribute(`Close gallery for ${featuredEvent.title}`, "aria-label")} data-astro-cid-oygtpqo5>
×
</button> <div class="event-dialog-header" data-astro-cid-oygtpqo5> <h2${addAttribute(`title-${featuredEvent.slug}`, "id")} class="event-dialog-title" data-astro-cid-oygtpqo5>${featuredEvent.title}</h2> <p class="event-dialog-submeta" data-astro-cid-oygtpqo5> ${formatDate(featuredEvent.date)}${featuredEvent.location ? ` · ${featuredEvent.location}` : ""} </p> ${featuredEvent.caption && renderTemplate`<p class="event-dialog-caption" data-astro-cid-oygtpqo5>${featuredEvent.caption}</p>`} </div> <div class="event-gallery event-gallery--single" data-astro-cid-oygtpqo5> ${(featuredEvent.photos ?? [featuredEvent.cover]).map((photo, index) => renderTemplate`<figure class="event-gallery-item" data-astro-cid-oygtpqo5> <img${addAttribute(photo, "src")}${addAttribute(`${featuredEvent.title} photo ${index + 1}`, "alt")} loading="lazy" decoding="async" data-astro-cid-oygtpqo5> </figure>`)} </div> </div> </dialog> </section>`, remainingEvents.length > 0 && renderTemplate`<section class="events-archive section section--sm" data-astro-cid-oygtpqo5> <div class="archive-header" data-astro-cid-oygtpqo5> <h2 data-astro-cid-oygtpqo5>Archive</h2> <p data-astro-cid-oygtpqo5>Past and future moments from the lab.</p> </div> <ul role="list" class="archive-list" data-astro-cid-oygtpqo5> ${remainingEvents.map((event) => renderTemplate`<li class="archive-item" data-astro-cid-oygtpqo5> <button type="button" class="archive-button" aria-haspopup="dialog" data-astro-cid-oygtpqo5> <div data-astro-cid-oygtpqo5> <h3 class="archive-title" data-astro-cid-oygtpqo5>${event.title}</h3> <p class="archive-meta" data-astro-cid-oygtpqo5> ${formatDate(event.date)}${event.location ? ` · ${event.location}` : ""} </p> </div> <span class="archive-view" data-astro-cid-oygtpqo5>View</span> </button> <dialog class="event-dialog"${addAttribute(`title-${event.slug}`, "aria-labelledby")} data-astro-cid-oygtpqo5> <div class="event-dialog-card" data-astro-cid-oygtpqo5> <button class="event-dialog-close" type="button" data-dialog-close${addAttribute(`Close gallery for ${event.title}`, "aria-label")} data-astro-cid-oygtpqo5>
×
</button> <div class="event-dialog-header" data-astro-cid-oygtpqo5> <h2${addAttribute(`title-${event.slug}`, "id")} class="event-dialog-title" data-astro-cid-oygtpqo5>${event.title}</h2> <p class="event-dialog-submeta" data-astro-cid-oygtpqo5> ${formatDate(event.date)}${event.location ? ` · ${event.location}` : ""} </p> ${event.caption && renderTemplate`<p class="event-dialog-caption" data-astro-cid-oygtpqo5>${event.caption}</p>`} </div> <div class="event-gallery" data-astro-cid-oygtpqo5> ${(event.photos ?? [event.cover]).map((photo, index) => renderTemplate`<figure class="event-gallery-item" data-astro-cid-oygtpqo5> <img${addAttribute(photo, "src")}${addAttribute(`${event.title} photo ${index + 1}`, "alt")} loading="lazy" decoding="async" data-astro-cid-oygtpqo5> </figure>`)} </div> </div> </dialog> </li>`)} </ul> </section>`) })}`;
}, "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/events/index.astro", void 0);

const $$file = "C:/Users/drakew/Documents/GitHub/dwilliams-lab-website/src/pages/events/index.astro";
const $$url = "/events";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
