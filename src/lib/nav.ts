export function initMobileNav(): void {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('mobileNav');
  if (!toggle || !menu) return;

  const close = () => {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
  };

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.hidden = expanded;
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', close);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}

/** Menandai link nav yang cocok dengan halaman aktif saat ini. */
export function initActiveNav(): void {
  const current = (location.pathname.split('/').pop() || 'index.html') || 'index.html';
  const normalized = current === '' ? 'index.html' : current;

  document.querySelectorAll<HTMLAnchorElement>('.main-nav a, .mobile-nav a').forEach((link) => {
    const href = link.getAttribute('href') || '';
    const hrefFile = href.split('#')[0];
    if (hrefFile && hrefFile === normalized) {
      link.classList.add('is-active');
    }
  });
}
