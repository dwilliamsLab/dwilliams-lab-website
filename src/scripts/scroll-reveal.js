let cleanup = () => {};

function initScrollReveal() {
  cleanup();
  const main = document.getElementById('main-content');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const contrast = window.matchMedia('(forced-colors: active)');
  if (!main || !('IntersectionObserver' in window) || reduced.matches || contrast.matches) return;

  const pending = new Set();
  const enrolled = new Set();
  let stopped = false;
  let observer;
  const show = (element) => {
    element.classList.remove('lomi-reveal-pending');
    pending.delete(element);
    observer?.unobserve(element);
  };
  const onFocus = (event) => {
    if (!(event.target instanceof Element)) return;
    const element = event.target.closest('.lomi-reveal');
    if (element) show(element);
  };
  const stop = () => {
    stopped = true;
    observer?.disconnect();
    enrolled.forEach((element) => element.classList.remove('lomi-reveal', 'lomi-reveal-pending'));
    pending.clear();
    enrolled.clear();
    main.removeEventListener('focusin', onFocus);
    reduced.removeEventListener('change', stop);
    contrast.removeEventListener('change', stop);
    window.removeEventListener('pageshow', onPageShow);
  };
  const onPageShow = (event) => { if (event.persisted) stop(); };
  cleanup = stop;

  try {
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) show(entry.target);
      });
    }, { root: null, rootMargin: '0px 0px -120px 0px', threshold: 0 });

    const selector = '.post-card, .member-card, .team-card, .publication-item, .resource-card, h1, h2, h3, h4, p, figure, picture, img, li';
    const candidates = Array.from(main.querySelectorAll(selector)).filter((element) => {
      if (element.closest('dialog, [role="dialog"], nav, [hidden], [data-no-reveal], details:not([open])')) return false;
      if (element.matches('li') && element.querySelector('dialog, [role="dialog"]')) return false;
      return true;
    });
    const candidateSet = new Set(candidates);
    const targets = candidates.filter((element) => {
      for (let parent = element.parentElement; parent && parent !== main; parent = parent.parentElement) {
        if (candidateSet.has(parent)) return false;
      }
      return true;
    });

    targets.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (!rect.width || !rect.height || rect.top < window.innerHeight - 120) return;
      element.classList.add('lomi-reveal');
      enrolled.add(element);
      pending.add(element);
      observer.observe(element);
    });
    main.addEventListener('focusin', onFocus);
    reduced.addEventListener('change', stop);
    contrast.addEventListener('change', stop);
    window.addEventListener('pageshow', onPageShow);

    // Separate enrollment from hiding; never hide without a live observer.
    requestAnimationFrame(() => {
      if (stopped) return;
      pending.forEach((element) => {
        if (element.getBoundingClientRect().top >= window.innerHeight - 120) {
          element.classList.add('lomi-reveal-pending');
        } else {
          show(element);
        }
      });
    });
  } catch {
    stop();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal, { once: true });
} else {
  initScrollReveal();
}
document.addEventListener('astro:page-load', initScrollReveal);
