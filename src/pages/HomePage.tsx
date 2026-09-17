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
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-cabinet">
          <div className="hero-bezel">
            <div className="hero-screen" id="heroScreen">
              <p className="eyebrow-coin"><span className="blink">●</span> INSERT COIN TO CONTINUE</p>
              <h1 id="hero-title" className="hero-title">
                DATA<br /><span className="hero-title-accent">SLAYER</span>
              </h1>
              <p className="hero-version">EDISI KE-4.0</p>
              <p className="hero-desc">
                Kompetisi data tahunan dari Himpunan Mahasiswa Sains Data (HMSD) Telkom University
                Purwokerto. Pilih jalur pertarunganmu: bangun model prediksi paling tajam lewat MLC,
                atau bongkar cerita di balik data mentah lewat DAC.
              </p>
              <div className="hero-actions">
                <a href="#daftar" className="btn btn-cta">Mulai Misi</a>
                <a href="#kategori" className="btn btn-ghost">Lihat Kategori</a>
              </div>

              <div className="hero-stats" role="group" aria-label="Ringkasan kompetisi">
                <div className="hero-stat">
                  <span className="hero-stat-value">2</span>
                  <span className="hero-stat-label">kategori lomba</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">TBA</span>
                  <span className="hero-stat-label">total hadiah</span>
                </div>
                <div className="hero-stat">
                  <span className="hero-stat-value">Nasional</span>
                  <span className="hero-stat-label">skala peserta</span>
                </div>
              </div>
            </div>
          </div>

          <Countdown targetDate="" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="section" aria-labelledby="about-title">
        <div className="section-inner section-inner--narrow" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Player Info</p>
          <h2 id="about-title" className="section-title" style={{ marginInline: 'auto' }}>Tentang Data Slayer 4.0</h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Data Slayer merupakan kompetisi nasional di bidang ilmu data yang diselenggarakan oleh
            Himpunan Mahasiswa Sains Data (HMSD) Telkom University Purwokerto. Edisi ke-4.0 ini
            kembali mengajak mahasiswa se-Indonesia untuk mengasah kemampuan analitis dan penerapan
            teknologi lewat dua jalur kompetisi: Machine Learning dan Data Analytics.
          </p>

          <div className="theme-card">
            <p className="theme-card-label">Tema Kompetisi</p>
            <p><strong>Segera diumumkan.</strong> Tema resmi Data Slayer 4.0 akan diungkap bersamaan dengan
            pembukaan gelombang pendaftaran — pantau terus Instagram panitia agar tidak ketinggalan.</p>
            <span className="badge-soon" style={{ marginTop: '1rem' }}>TEMA SEGERA DIUMUMKAN</span>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section id="kategori" className="section section--alt" aria-labelledby="kategori-title">
        <div className="section-inner">
          <p className="section-eyebrow">Pilih Mode</p>
          <h2 id="kategori-title" className="section-title">Dua Jalur, Satu Medan Perang</h2>
          <p className="section-lead">
            Setiap kategori punya aturan main sendiri. Pilih sesuai kekuatan tim kamu — atau taklukkan keduanya.
          </p>

          <div className="mode-grid">
            <article className="mode-card mode-card--mlc">
              <div className="mode-card-head">
                <span className="mode-tag">MODE 01</span>
                <h3 className="mode-name">MLC</h3>
                <p className="mode-fullname">Machine Learning Competition</p>
              </div>
              <p className="mode-desc">
                Bangun model prediktif dari dataset kompetisi dan adu akurasi di papan skor.
                Cocok buat kamu yang suka mengutak-atik algoritma sampai titik optimalnya.
              </p>
              <ul className="mode-specs" aria-label="Spesifikasi MLC">
                <li><span>Tipe</span><strong>Prediktif / Tabular</strong></li>
                <li><span>Bahasa</span><strong>Python (bebas library)</strong></li>
                <li><span>Tim</span><strong>1–3 orang / tim</strong></li>
                <li><span>Guidebook</span><strong>Segera</strong></li>
              </ul>
              <Link to="/mlc" className="btn btn-outline mode-btn">Buka Mode MLC →</Link>
            </article>

            <article className="mode-card mode-card--dac">
              <div className="mode-card-head">
                <span className="mode-tag">MODE 02</span>
                <h3 className="mode-name">DAC</h3>
                <p className="mode-fullname">Dashboard Analytics Competition</p>
              </div>
              <p className="mode-desc">
                Ubah data mentah menjadi wawasan bisnis yang bernilai lewat visualisasi interaktif.
                Cocok buat kamu yang pandai bercerita lewat angka dan merancang dashboard berdampak.
              </p>
              <ul className="mode-specs" aria-label="Spesifikasi DAC">
                <li><span>Tipe</span><strong>BI Dashboard &amp; Analisis</strong></li>
                <li><span>Tools</span><strong>Tableau / Power BI / Looker</strong></li>
                <li><span>Tim</span><strong>1–3 orang / tim</strong></li>
                <li><span>Guidebook</span><strong>Segera</strong></li>
              </ul>
              <Link to="/dac" className="btn btn-outline mode-btn">Buka Mode DAC →</Link>
            </article>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section id="event" className="section" aria-labelledby="event-title">
        <div className="section-inner section-inner--narrow" style={{ textAlign: 'center' }}>
          <p className="section-eyebrow">Side Quest</p>
          <h2 id="event-title" className="section-title" style={{ marginInline: 'auto' }}>Featured Event</h2>
          <p className="section-lead" style={{ marginInline: 'auto' }}>
            Sebelum babak utama dimulai, ikuti rangkaian pemanasan untuk mengasah pemahamanmu seputar dunia data.
          </p>

          <Link to="/event" className="event-card event-card--teaser" aria-label="Buka halaman event Road to Data Slayer 4.0">
            <div className="event-card-head">
              <span className="mode-tag">WEBINAR</span>
              <h3 className="mode-name" style={{ fontSize: '1.35rem', color: 'var(--color-ink)' }}>Road to Data Slayer 4.0</h3>
            </div>
            <p className="mode-desc">
              Webinar bersama narasumber profesional membahas penerapan data dan visualisasi untuk
              mendukung isu-isu terkini. Jadwal dan pembicara segera diumumkan.
            </p>
            <span className="badge-soon" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>JADWAL SEGERA</span>
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
      <section id="hadiah" className="section" aria-labelledby="hadiah-title">
        <div className="section-inner">
          <p className="section-eyebrow">High Score</p>
          <h2 id="hadiah-title" className="section-title">Papan Hadiah</h2>
          <p className="section-lead">Total nominal hadiah akan diumumkan bersama pembukaan pendaftaran.</p>

          <div className="prize-grid">
            <div className="prize-board">
              <h3 className="prize-board-title prize-board-title--mlc">MLC</h3>
              <ul className="prize-list">
                <li><span className="prize-rank prize-rank--gold">#1</span><span className="prize-name">Juara 1</span><span className="prize-amount">TBA</span></li>
                <li><span className="prize-rank prize-rank--silver">#2</span><span className="prize-name">Juara 2</span><span className="prize-amount">TBA</span></li>
                <li><span className="prize-rank prize-rank--bronze">#3</span><span className="prize-name">Juara 3</span><span className="prize-amount">TBA</span></li>
              </ul>
            </div>
            <div className="prize-board">
              <h3 className="prize-board-title prize-board-title--dac">DAC</h3>
              <ul className="prize-list">
                <li><span className="prize-rank prize-rank--gold">#1</span><span className="prize-name">Juara 1</span><span className="prize-amount">TBA</span></li>
                <li><span className="prize-rank prize-rank--silver">#2</span><span className="prize-name">Juara 2</span><span className="prize-amount">TBA</span></li>
                <li><span className="prize-rank prize-rank--bronze">#3</span><span className="prize-name">Juara 3</span><span className="prize-amount">TBA</span></li>
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
      <section id="daftar" className="section cta-section" aria-labelledby="cta-title">
        <div className="section-inner section-inner--narrow cta-inner">
          <span className="badge-soon">PENDAFTARAN SEGERA DIBUKA</span>
          <h2 id="cta-title" className="section-title" style={{ marginTop: '1.25rem' }}>Siap Jadi Data Slayer?</h2>
          <p className="section-lead">
            Pantau terus linimasa kami. Persiapkan tim terbaikmu dan jadilah juara di panggung data
            nasional tahun ini.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn btn-ghost" aria-disabled="true">Guidebook <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
            <a href="#" className="btn btn-ghost" aria-disabled="true">Registration <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-cta">Info Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
};
