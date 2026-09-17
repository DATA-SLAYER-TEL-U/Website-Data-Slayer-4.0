export function initScrollReveal(): void {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const targets = document.querySelectorAll<HTMLElement>(
    '.mode-card, .level-stage, .prize-board, .faq-item, .info-card, .resource-link'
  );

  targets.forEach((el) => {
    el.classList.add('reveal');
  });

  const groups = document.querySelectorAll<HTMLElement>(
    '.mode-grid, .level-track, .prize-grid, .faq-list, .info-grid, .resource-grid'
  );
  groups.forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      (child as HTMLElement).style.transitionDelay = `${Math.min(i, 4) * 80}ms`;
    });
  });

  if (prefersReduced || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  targets.forEach((el) => observer.observe(el));
}
