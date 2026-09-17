# Data Slayer 4.0 — Dashboard Arcade

Website resmi Data Slayer 4.0 dengan tema **arcade retro**: CRT scanlines, font pixel,
neon magenta/cyan/gold, dan nuansa "insert coin" di setiap halaman. Dikembangkan dari
konsep Data Slayer 3.0 (HMSD Telkom University Purwokerto), sekarang dengan 5 halaman
lengkap gaya arcade.

## Stack
- Vite (multi-page)
- TypeScript
- Tailwind CSS v4

## Halaman

| File | Isi |
|---|---|
| `index.html` | Beranda — hero cabinet, kategori (MLC/DAC), about, event teaser, timeline, papan hadiah, FAQ, CTA |
| `mlc.html` | Machine Learning Competition — hero, about, info kompetisi, timeline, FAQ |
| `dac.html` | Dashboard Analytics Competition — hero, about, info kompetisi, timeline, FAQ |
| `event.html` | Webinar "Road to Data Slayer 4.0" — poster & resource pasca-acara |
| `shorten.html` | Utility pemendek link (mode demo, siap disambungkan ke backend) |

## Menjalankan project

> ⚠️ `node_modules` di dalam zip ini terpasang untuk platform lain (native binary
> Rollup/esbuild Windows). Hapus dulu `node_modules` & `package-lock.json`, lalu install ulang
> di komputer kamu sebelum menjalankan:

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

Buka http://localhost:5173

## Build production

```bash
npm run build
npm run preview
```

## Struktur

- `*.html` — struktur & konten tiap halaman
- `src/main.css` — token desain (warna, font) + semua styling arcade (hero, mode card,
  timeline, info card, resource grid, form/terminal, dll)
- `src/main.ts` — entry point, memuat semua modul interaktif di setiap halaman
- `src/lib/countdown.ts` — hitung mundur; otomatis menampilkan `--` jika `data-target` kosong (TBA)
- `src/lib/nav.ts` — menu mobile + highlight menu aktif
- `src/lib/faq.ts` — accordion FAQ
- `src/lib/reveal.ts` — animasi scroll reveal
- `src/lib/shorten.ts` — logika form shorten link (masih mode demo, lihat komentar `TODO`)

## Yang masih perlu kamu isi (ditandai "TBA" / "SEGERA")

1. **Tanggal** — deadline pendaftaran & timeline tiap kategori (`data-target` pada elemen
   `.countdown`, dan isi `<time>TBA</time>` di setiap `.level-track`)
2. **Nominal** — biaya pendaftaran (`.info-card`) & hadiah (`.prize-amount`)
3. **Tema kompetisi** — isi `.theme-card` di `index.html`, `mlc.html`, `dac.html`
4. **Link pendaftaran & guidebook asli** — ganti `href="#"` di tombol yang masih `aria-disabled`
5. **Poster & resource event** — ganti placeholder di `event.html` setelah acara terlaksana
6. **Backend shorten link** — sambungkan `fakeShorten()` di `src/lib/shorten.ts` ke API asli
