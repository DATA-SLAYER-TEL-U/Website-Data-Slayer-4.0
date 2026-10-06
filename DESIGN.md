# Arah Desain Resmi (Official Design Direction)

## Tema Utama: "Pastel Dreamy Arcade"
Berdasarkan instruksi langsung dan referensi grafis dari tim PDD (Publikasi, Dekorasi, dan Dokumentasi), website Data Slayer 4.0 secara resmi mengadopsi estetika **Pastel Dreamy Arcade** dengan paduan *soft glassmorphism* dan hibrida tipografi unik.

### 1. Palet Warna (The PDD Palette)
- **Latar Belakang (Base)**: Warna putih krem sangat pucat (`#fdfcff`).
- **Aksen Pastel**:
  - **Cyan**: Biru pastel langit (`#79aee5`).
  - **Gold**: Kuning gading/peach pucat (`#f5d17a`).
  - **Magenta**: Merah muda pudar / Lilac (`#e8a2d3`).
- **Teks Utama (Ink)**: Biru dongker/ungu sangat gelap (`#2b2742`) untuk menjaga kontras (WCAG) di atas latar belakang terang.
- **Kartu/Komponen (Panel)**: Putih tembus pandang dengan keburaman kaca (Glassmorphism `rgba(255, 255, 255, 0.5)`).

### 2. Tipografi Hibrida (R-37)
Terdapat penggabungan ekstrem yang kontras antara gaya digital dan klasik:
- **Pixel Font**: `Press Start 2P` untuk teks tebal dan angka.
- **Cursive Font**: `Great Vibes` untuk sentuhan elegan, meliuk, dan melankolis (seperti "You" dan huruf depan "M" & "D").
- **Teks Tubuh**: `Space Grotesk` untuk keterbacaan teknis yang nyaman.
- **Signature Styling**: Teks judul memiliki ciri khas **warna isi pastel dengan garis luar (stroke) putih tebal**, dicapai melalui properti `-webkit-text-stroke`.

### 3. Tekstur & Efek (Liveliness)
- **Latar Belakang (ENERGY 2)**: Dilengkapi gradien diagonal pastel tiga warna dan dihamparkan efek tekstur SVG Grain/Noise yang memberikan kesan *dreamy* layaknya awan atau memori usang.
- **Bayangan (MOTION 1)**: Semua *shadow* gelap diharamkan. Bayangan komponen menggunakan biru abu-abu yang sangat terang (`rgba(110, 120, 160, 0.15)`) untuk sekadar memberikan dimensi elevasi *frosted glass* tanpa kesan berat.
