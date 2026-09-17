/**
 * Menyalakan semua panel countdown di halaman.
 * Setiap panel butuh atribut `data-target` berisi tanggal ISO,
 * dan 4 elemen anak dengan `data-cd="days|hours|mins|secs"`.
 *
 * Contoh markup:
 * <div class="countdown" data-target="2027-02-28T23:59:59+07:00">
 *   <div class="countdown-digit"><span data-cd="days">00</span><small>Hari</small></div>
 *   ...
 * </div>
 */
export function initCountdown(): void {
  const panels = document.querySelectorAll<HTMLElement>('.countdown[data-target]');
  if (!panels.length) return;

  const pad = (n: number) => n.toString().padStart(2, '0');

  panels.forEach((panel) => {
    const targetISO = panel.dataset.target;
    if (!targetISO) return;

    const target = new Date(targetISO).getTime();
    const daysEl = panel.querySelector<HTMLElement>('[data-cd="days"]');
    const hoursEl = panel.querySelector<HTMLElement>('[data-cd="hours"]');
    const minsEl = panel.querySelector<HTMLElement>('[data-cd="mins"]');
    const secsEl = panel.querySelector<HTMLElement>('[data-cd="secs"]');

    // Tanggal belum final (TBA) — tampilkan strip statis, jangan jalankan timer.
    if (Number.isNaN(target)) {
      [daysEl, hoursEl, minsEl, secsEl].forEach((el) => {
        if (el) el.textContent = '--';
      });
      return;
    }

    function tick() {
      const now = Date.now();
      const diff = Math.max(0, target - now);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const mins = Math.floor((diff / (1000 * 60)) % 60);
      const secs = Math.floor((diff / 1000) % 60);

      if (daysEl) daysEl.textContent = pad(days);
      if (hoursEl) hoursEl.textContent = pad(hours);
      if (minsEl) minsEl.textContent = pad(mins);
      if (secsEl) secsEl.textContent = pad(secs);

      if (diff <= 0) clearInterval(timer);
    }

    tick();
    const timer = window.setInterval(tick, 1000);
  });
}
