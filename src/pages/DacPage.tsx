import React from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Timeline, type TimelineStage } from '../components/Timeline';
import { FaqAccordion, type FaqItem } from '../components/FaqAccordion';

const dacTimelineStages: TimelineStage[] = [
  {
    num: '01',
    title: 'Registrasi Batch 1',
    desc: 'Pendaftaran gelombang pertama dibuka.',
    time: 'TBA',
  },
  {
    num: '02',
    title: 'Registrasi Batch 2',
    desc: 'Gelombang kedua untuk yang belum sempat daftar.',
    time: 'TBA',
  },
  {
    num: '03',
    title: 'Penyisihan Dashboard',
    desc: 'Peserta menyusun dan mengumpulkan dashboard.',
    time: 'TBA',
  },
  {
    num: '04',
    title: 'Pengumuman Finalis',
    desc: 'Sepuluh dashboard terbaik melaju ke babak final.',
    time: 'TBA',
  },
  {
    num: '05',
    title: 'Technical Meeting',
    desc: 'Briefing teknis untuk seluruh finalis.',
    time: 'TBA',
  },
  {
    num: '06',
    title: 'Pengumpulan Paper',
    desc: 'Finalis menyusun laporan analisis pendukung.',
    time: 'TBA',
  },
  {
    num: '07',
    title: 'Vote Juara Favorit',
    desc: 'Publik memilih dashboard favorit mereka.',
    time: 'TBA',
  },
  {
    num: '08',
    title: 'Babak Final',
    desc: 'Presentasi langsung di hadapan dewan juri.',
    time: 'TBA',
  },
];

const dacFaqItems: FaqItem[] = [
  {
    question: 'Bagaimana mekanisme lomba DAC?',
    answer: 'Lomba DAC dilaksanakan dalam dua tahap. Pada tahap penyisihan, peserta membuat dashboard analisis data sesuai tema yang dipilih. Finalis dengan skor tertinggi melaju ke tahap final untuk menyusun laporan analisis dan presentasi hasil.',
  },
  {
    question: 'Apakah boleh menggunakan tools selain Tableau, Power BI, atau Looker Studio?',
    answer: 'Secara umum diutamakan menggunakan Business Intelligence tools populer (Tableau, Power BI, Looker Studio). Apabila menggunakan Streamlit atau web-based visualization lain, pastikan dapat diakses publik via tautan aktif.',
  },
  {
    question: 'Apakah peserta harus mengumpulkan laporan analisis tertulis di babak penyisihan?',
    answer: 'Di babak penyisihan, fokus utama adalah tautan dasbor dan video penjelasan singkat. Laporan analisis mendalam (paper ringkas) hanya diwajibkan bagi tim yang lolos sebagai finalis.',
  },
  {
    question: 'Berapa anggota per tim untuk kategori DAC?',
    answer: 'Sama seperti MLC, setiap tim DAC terdiri dari 1 hingga 3 mahasiswa aktif dari perguruan tinggi yang sama.',
  },
  {
    question: 'Bagaimana sistem penilaian juara favorit di DAC?',
    answer: 'Juara favorit dipilih berdasarkan kombinasi voting publik (di media sosial atau platform panitia) dan penilaian dasar estetika dasbor oleh panitia.',
  },
];

export const DacPage: React.FC = () => {
  return (
    <>
      <section className="sub-hero">
        <div className="sub-hero-inner">
          <p className="sub-hero-tag"><span className="blink">●</span> MODE 02 — DAC</p>
          <h1 className="sub-hero-title">Dashboard Analytics<br />Competition</h1>
          <p className="sub-hero-lead">
            Rancang visualisasi data interaktif yang memukau dan mampu menyampaikan cerita di balik angka
            secara tajam, estetik, dan berdampak bagi pengambilan keputusan.
          </p>

          <div className="sub-hero-actions">
            <a href="#" className="btn btn-ghost" aria-disabled="true">Guidebook <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
            <a href="#" className="btn btn-ghost" aria-disabled="true">Registration <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
          </div>

          <Countdown targetDate="" />
        </div>
      </section>

      {/* Info DAC */}
      <section className="section" aria-labelledby="info-dac-title">
        <div className="section-inner">
          <p className="section-eyebrow">Detail Misi</p>
          <h2 id="info-dac-title" className="section-title">Tentang Kompetisi DAC</h2>
          <p className="section-lead">
            Pahami panduan analitik, ekspektasi visual, dan bobot penilaian dasbor kamu.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Deskripsi Kompetisi</h3>
              <p className="info-card-text">
                DAC berfokus pada kemampuan peserta mengubah data mentah menjadi dasbor bisnis intelijen
                interaktif yang mudah dipahami, bernilai strategis, dan memberikan rekomendasi nyata
                berdasarkan temuan data.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Format Pengerjaan</h3>
              <ul className="info-card-list">
                <li><span>Studi kasus</span><strong>Dataset bisnis &amp; operasional</strong></li>
                <li><span>Platform visualisasi</span><strong>Tableau / Power BI / Looker Studio</strong></li>
                <li><span>Output penyisihan</span><strong>Link dasbor publik + video ringkas</strong></li>
                <li><span>Babak final</span><strong>Paper pendukung + sesi presentasi</strong></li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Bobot Penilaian</h3>
              <ul className="info-card-list">
                <li><span>Kekuatan Visualisasi &amp; UX</span><strong>35%</strong></li>
                <li><span>Insight Bisnis &amp; Analisis</span><strong>35%</strong></li>
                <li><span>Presentasi &amp; Relevansi Solusi</span><strong>30%</strong></li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Fasilitas Peserta</h3>
              <ul className="info-card-list">
                <li><span>E-Sertifikat Nasional</span><strong>Semua tim terverifikasi</strong></li>
                <li><span>Dataset &amp; Panduan</span><strong>Akses lengkap peserta</strong></li>
                <li><span>Feedback Juri &amp; Exposure</span><strong>Khusus finalis terpilih</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Timeline DAC */}
      <Timeline
        eyebrow="Progres Level"
        title="Timeline DAC"
        lead="Tanggal pasti akan diumumkan bersama pembukaan pendaftaran."
        stages={dacTimelineStages}
      />

      {/* Centered FAQ DAC */}
      <FaqAccordion
        id="faq-dac"
        eyebrow="Bantuan"
        title="FAQ DAC"
        items={dacFaqItems}
        sectionAlt={true}
      />

      {/* CTA */}
      <section className="section cta-section" aria-labelledby="cta-dac-title">
        <div className="section-inner section-inner--narrow cta-inner">
          <span className="badge-soon">PENDAFTARAN SEGERA DIBUKA</span>
          <h2 id="cta-dac-title" className="section-title" style={{ marginTop: '1.25rem' }}>Siap Rancang Dashboardmu?</h2>
          <p className="section-lead">Persiapkan cerita di balik datamu dan buktikan keunggulan analitik tim kamu.</p>
          <Link to="/" className="btn btn-cta btn-lg">Kembali ke Beranda</Link>
        </div>
      </section>
    </>
  );
};
