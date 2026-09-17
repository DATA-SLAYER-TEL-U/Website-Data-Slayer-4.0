export function initFaq(): void {
  const items = document.querySelectorAll<HTMLButtonElement>('.faq-question');

  items.forEach((btn) => {
    btn.addEventListener('click', () => {
      const isOpen = btn.getAttribute('aria-expanded') === 'true';

      items.forEach((other) => other.setAttribute('aria-expanded', 'false'));

      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });
}
