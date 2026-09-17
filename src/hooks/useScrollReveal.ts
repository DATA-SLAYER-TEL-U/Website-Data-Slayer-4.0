import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Tunggu render DOM selesai
    const timeout = setTimeout(() => {
      const elements = document.querySelectorAll<HTMLElement>(
        '.mode-card, .level-stage, .prize-board, .faq-item, .info-card, .resource-link, .event-card, .theme-card, .hero-stat'
      );

      elements.forEach((el, index) => {
        el.classList.add('reveal');
        // Berikan stagger delay untuk elemen yang berdekatan
        el.style.transitionDelay = `${(index % 4) * 80}ms`;
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname]);
}
