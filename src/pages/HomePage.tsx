import React from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Timeline, type TimelineStage } from '../components/Timeline';
import { FaqAccordion, type FaqItem } from '../components/FaqAccordion';

const homeTimelineStages: TimelineStage[] = [
  {
    num: '01',
    title: 'Pendaftaran & Pengumpulan Tim',
    desc: 'Isi formulir pendaftaran, pilih kategori, dan lengkapi data tim.',
    time: 'TBA',
  },
  {
    num: '02',
    title: 'Seleksi Berkas',
    desc: 'Panitia menilai kelengkapan berkas dan proposal awal pendekatan tim.',
    time: 'TBA',
  },
  {
    num: '03',
    title: 'Technical Round',
    desc: 'MLC mengerjakan dataset kompetisi; DAC menyusun analisis studi kasus.',
    time: 'TBA',
  },
  {
    num: '04',
    title: 'Grand Final',
    desc: 'Tim terbaik dari tiap kategori presentasi langsung di hadapan juri.',
    time: 'TBA',
  },
  {
    num: '05',
    title: 'Awarding Night',
    desc: 'Pengumuman pemenang, penyerahan hadiah, dan penutupan Data Slayer 4.0.',
    time: 'TBA',
  },
];

const homeFaqItems: FaqItem[] = [
  {
    question: 'Apakah boleh mengikuti dua kategori sekaligus?',
    answer: 'Boleh. Tim yang berbeda anggota bisa mendaftar di MLC maupun DAC, selama setiap anggota hanya terdaftar di satu tim per kategori.',
  },
  {
    question: 'Apakah peserta harus dari satu kampus yang sama?',
    answer: 'Ya, seluruh anggota dalam satu tim harus berasal dari perguruan tinggi yang sama dan berstatus mahasiswa aktif (D3/D4/S1).',
  },
  {
    question: 'Apakah ada biaya pendaftaran?',
    answer: 'Informasi biaya pendaftaran akan diumumkan bersamaan dengan pembukaan registrasi gelombang 1. Pastikan pantau Instagram kami.',
  },
  {
    question: 'Di mana saya bisa mendapat info terbaru?',
    answer: 'Seluruh pengumuman resmi dirilis melalui akun Instagram @dataslayer_telu dan halaman resmi ini.',
  },
];

export const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-5 overflow-hidden bg-gradient-to-b from-[#18215a]/80 via-[#12194a]/60 to-transparent border-b border-line/40" aria-labelledby="hero-title">
        <div className="max-w-[52rem] mx-auto text-center">
          <div>
            <p className="font-pixel text-[0.6rem] md:text-[0.65rem] text-gold tracking-widest uppercase mb-4 inline-flex items-center justify-center gap-2">
              <span className="blink">●</span> INSERT COIN TO CONTINUE
            </p>
            <h1 id="hero-title" className="font-pixel text-[clamp(2.1rem,8vw,4rem)] tracking-wide leading-tight text-ink">
              DATA<br /><span className="text-cyan [text-shadow:0_0_24px_rgba(0,229,255,0.7)]">SLAYER</span>
            </h1>
            <p className="font-pixel text-[0.65rem] md:text-[0.75rem] text-cyan tracking-widest mt-3 uppercase">EDISI KE-4.0</p>
            <p className="max-w-[42rem] mx-auto mt-5 text-ink-dim leading-relaxed text-sm md:text-base">
              Kompetisi data tahunan dari Himpunan Mahasiswa Sains Data (HMSD) Telkom University
              Purwokerto. Pilih jalur pertarunganmu: bangun model prediksi paling tajam lewat MLC,
              atau bongkar cerita di balik data mentah lewat DAC.
            </p>
            <div className="flex flex-wrap justify-center gap-3.5 mt-8">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-pixel text-xs font-bold text-void bg-gradient-to-r from-cyan to-[#00b4d8] shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Mulai Misi
              </a>
              <a
                href="#kategori"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-pixel text-xs border-2 border-line bg-panel/60 text-ink hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Lihat Kategori
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-[42rem] mx-auto mt-12 p-3 bg-panel/40 border border-line rounded-2xl backdrop-blur-sm" role="group" aria-label="Ringkasan kompetisi">
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">2</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">kategori lomba</span>
              </div>
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">TBA</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">total hadiah</span>
              </div>
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">Nasional</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">skala peserta</span>
              </div>
            </div>
          </div>

          <Countdown targetDate="" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-5 text-center" aria-labelledby="about-title">
        <div className="max-w-[48rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">Player Info</p>
          <h2 id="about-title" className="font-pixel text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">Tentang Data Slayer 4.0</h2>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Data Slayer merupakan kompetisi nasional di bidang ilmu data yang diselenggarakan oleh
            Himpunan Mahasiswa Sains Data (HMSD) Telkom University Purwokerto. Edisi ke-4.0 ini
            kembali mengajak mahasiswa se-Indonesia untuk mengasah kemampuan analitis dan penerapan
            teknologi lewat dua jalur kompetisi: Machine Learning dan Data Analytics.
          </p>

          <div className="theme-card border-2 border-dashed border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm text-left max-w-[42rem] mx-auto mt-8">
            <p className="font-pixel text-[0.6rem] text-cyan mb-3 tracking-wider">Tema Kompetisi</p>
            <p className="text-ink-dim leading-relaxed text-sm">
              <strong className="text-ink font-semibold">Segera diumumkan.</strong> Tema resmi Data Slayer 4.0 akan diungkap bersamaan dengan
              pembukaan gelombang pendaftaran — pantau terus Instagram panitia agar tidak ketinggalan.
            </p>
            <span className="inline-flex items-center font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded mt-4">
              TEMA SEGERA DIUMUMKAN
            </span>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section id="kategori" className="py-20 px-5 bg-gradient-to-b from-[#18215a]/70 via-[#12194a]/50 to-transparent border-y border-line/40 text-center" aria-labelledby="kategori-title">
        <div className="max-w-[68rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">Pilih Mode</p>
          <h2 id="kategori-title" className="font-pixel text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">Dua Jalur, Satu Medan Perang</h2>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base max-w-[42rem] mx-auto">
            Setiap kategori punya aturan main sendiri. Pilih sesuai kekuatan tim kamu — atau taklukkan keduanya.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
            <article className="mode-card border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-[0_20px_45px_-15px_rgba(0,229,255,0.25)]">
              <div className="mode-card-head">
                <span className="font-pixel text-[0.55rem] text-cyan tracking-wider">MODE 01</span>
                <h3 className="font-pixel text-2xl text-cyan mt-2">MLC</h3>
                <p className="text-xs text-ink-dim mt-1">Machine Learning Competition</p>
              </div>
              <p className="mt-4 text-ink-dim text-sm leading-relaxed flex-1">
                Bangun model prediktif dari dataset kompetisi dan adu akurasi di papan skor.
                Cocok buat kamu yang suka mengutak-atik algoritma sampai titik optimalnya.
              </p>
              <ul className="mt-6 space-y-3 list-none p-0 border-t border-dashed border-line/60 pt-4" aria-label="Spesifikasi MLC">
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Tipe</span>
                  <strong className="text-ink font-semibold">Prediktif / Tabular</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Bahasa</span>
                  <strong className="text-ink font-semibold">Python (bebas library)</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Tim</span>
                  <strong className="text-ink font-semibold">1–3 orang / tim</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Guidebook</span>
                  <span className="text-cyan font-semibold text-xs">Segera</span>
                </li>
              </ul>
              <Link
                to="/mlc"
                className="mt-6 inline-flex items-center justify-center rounded-xl py-3 px-5 font-pixel text-xs border border-cyan/40 bg-cyan/5 text-cyan hover:bg-cyan hover:text-void transition-all duration-200"
              >
                Buka Mode MLC →
              </Link>
            </article>

            <article className="mode-card border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-[0_20px_45px_-15px_rgba(0,229,255,0.25)]">
              <div className="mode-card-head">
                <span className="font-pixel text-[0.55rem] text-cyan tracking-wider">MODE 02</span>
                <h3 className="font-pixel text-2xl text-cyan mt-2">DAC</h3>
                <p className="text-xs text-ink-dim mt-1">Dashboard Analytics Competition</p>
              </div>
              <p className="mt-4 text-ink-dim text-sm leading-relaxed flex-1">
                Ubah data mentah menjadi wawasan bisnis yang bernilai lewat visualisasi interaktif.
                Cocok buat kamu yang pandai bercerita lewat angka dan merancang dashboard berdampak.
              </p>
              <ul className="mt-6 space-y-3 list-none p-0 border-t border-dashed border-line/60 pt-4" aria-label="Spesifikasi DAC">
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Tipe</span>
                  <strong className="text-ink font-semibold">BI Dashboard &amp; Analisis</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Tools</span>
                  <strong className="text-ink font-semibold">Tableau / Power BI / Looker</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Tim</span>
                  <strong className="text-ink font-semibold">1–3 orang / tim</strong>
                </li>
                <li className="flex justify-between items-baseline text-sm">
                  <span className="text-ink-dim">Guidebook</span>
                  <span className="text-cyan font-semibold text-xs">Segera</span>
                </li>
              </ul>
              <Link
                to="/dac"
                className="mt-6 inline-flex items-center justify-center rounded-xl py-3 px-5 font-pixel text-xs border border-cyan/40 bg-cyan/5 text-cyan hover:bg-cyan hover:text-void transition-all duration-200"
              >
                Buka Mode DAC →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section id="event" className="py-20 px-5 text-center" aria-labelledby="event-title">
        <div className="max-w-[48rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">Side Quest</p>
          <h2 id="event-title" className="font-pixel text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">Featured Event</h2>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Sebelum babak utama dimulai, ikuti rangkaian pemanasan untuk mengasah pemahamanmu seputar dunia data.
          </p>

          <Link
            to="/event"
            className="event-card border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm text-left block transition-all duration-200 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-[0_20px_45px_-15px_rgba(0,229,255,0.2)] max-w-[42rem] mx-auto mt-8"
            aria-label="Buka halaman event Road to Data Slayer 4.0"
          >
            <div className="flex items-center gap-3">
              <span className="font-pixel text-[0.55rem] text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">WEBINAR</span>
            </div>
            <h3 className="font-pixel text-lg text-ink mt-3">Road to Data Slayer 4.0</h3>
            <p className="mt-3 text-ink-dim text-sm leading-relaxed">
              Webinar bersama narasumber profesional membahas penerapan data dan visualisasi untuk
              mendukung isu-isu terkini. Jadwal dan pembicara segera diumumkan.
            </p>
            <span className="inline-flex items-center font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded mt-4">
              JADWAL SEGERA
            </span>
          </Link>
        </div>
      </section>

      {/* Centered Timeline */}
      <Timeline
        eyebrow="Progres Level"
        title="Timeline Kompetisi"
        lead="Lima level yang harus dilewati dari pendaftaran sampai penobatan juara. Tanggal detail menyusul di halaman masing-masing kategori."
        stages={homeTimelineStages}
      />

      {/* Hadiah (Centered Headers) */}
      <section id="hadiah" className="py-20 px-5 text-center" aria-labelledby="hadiah-title">
        <div className="max-w-[68rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">High Score</p>
          <h2 id="hadiah-title" className="font-pixel text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">Papan Hadiah</h2>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base">Total nominal hadiah akan diumumkan bersama pembukaan pendaftaran.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 text-left">
            <div className="prize-board border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm">
              <h3 className="font-pixel text-lg text-cyan">MLC</h3>
              <ul className="mt-5 space-y-2.5 list-none p-0">
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-gold flex items-center gap-2">#1 Juara 1</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-[#c0c7d6] flex items-center gap-2">#2 Juara 2</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-[#cd7f32] flex items-center gap-2">#3 Juara 3</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
              </ul>
            </div>
            <div className="prize-board border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm">
              <h3 className="font-pixel text-lg text-cyan">DAC</h3>
              <ul className="mt-5 space-y-2.5 list-none p-0">
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-gold flex items-center gap-2">#1 Juara 1</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-[#c0c7d6] flex items-center gap-2">#2 Juara 2</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
                <li className="flex items-center justify-between p-3.5 bg-void rounded-xl border border-line/70">
                  <span className="font-pixel text-xs text-[#cd7f32] flex items-center gap-2">#3 Juara 3</span>
                  <span className="font-pixel text-xs text-ink">TBA</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ (Centered Headers) */}
      <FaqAccordion
        id="faq"
        eyebrow="Bantuan"
        title="Pertanyaan Umum"
        items={homeFaqItems}
        sectionAlt={true}
      />

      {/* CTA */}
      <section id="daftar" className="py-20 px-5 text-center bg-gradient-to-b from-transparent via-panel/40 to-transparent" aria-labelledby="cta-title">
        <div className="max-w-[42rem] mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(0,229,255,0.1)]">
            PENDAFTARAN SEGERA DIBUKA
          </span>
          <h2 id="cta-title" className="font-pixel text-[clamp(1.35rem,4vw,2.1rem)] mt-5 text-ink">
            Siap Jadi Data Slayer?
          </h2>
          <p className="text-ink-dim mt-3.5 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Pantau terus linimasa kami. Persiapkan tim terbaikmu dan jadilah juara di panggung data
            nasional tahun ini.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5 mt-8">
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-lg border-2 border-line bg-panel/50 text-ink/60 cursor-not-allowed select-none">
              Guidebook <span className="font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded">SEGERA</span>
            </span>
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-lg border-2 border-line bg-panel/50 text-ink/60 cursor-not-allowed select-none">
              Registration <span className="font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2 py-0.5 rounded">SEGERA</span>
            </span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg px-6 py-3 font-pixel text-xs font-bold text-void bg-gradient-to-r from-cyan to-[#00b4d8] shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_25px_rgba(0,229,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Info Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
