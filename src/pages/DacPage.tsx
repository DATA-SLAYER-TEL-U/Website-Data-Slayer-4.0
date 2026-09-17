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
      <section className="pt-30 pb-14 px-5 bg-gradient-to-b from-[#18215a]/80 via-[#12194a]/60 to-transparent border-b border-line/40 text-center">
        <div className="max-w-[56rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan inline-flex items-center gap-2 mb-5 bg-cyan/10 border border-cyan/25 px-3.5 py-1.5 rounded-full">
            <span className="blink">●</span> MODE 02 — DAC
          </p>
          <h1 className="font-pixel text-[clamp(1.6rem,5.5vw,2.75rem)] leading-tight text-ink [text-shadow:0_0_18px_rgba(0,229,255,0.4)]">
            Dashboard Analytics<br />Competition
          </h1>
          <p className="max-w-[40rem] mx-auto mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Rancang visualisasi data interaktif yang memukau dan mampu menyampaikan cerita di balik angka
            secara tajam, estetik, dan berdampak bagi pengambilan keputusan.
          </p>

          <div className="flex flex-wrap justify-center gap-3.5 mt-7">
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-xl border border-line bg-panel/80 text-ink cursor-not-allowed select-none shadow-sm">
              Guidebook
              <span className="inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/15 border border-cyan/30 px-2 py-0.5 rounded">
                SEGERA
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-xl border border-line bg-panel/80 text-ink cursor-not-allowed select-none shadow-sm">
              Registration
              <span className="inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/15 border border-cyan/30 px-2 py-0.5 rounded">
                SEGERA
              </span>
            </span>
          </div>

          <Countdown targetDate="" />
        </div>
      </section>

      {/* Info DAC */}
      <section className="py-16 px-5" aria-labelledby="info-dac-title">
        <div className="max-w-[68rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan tracking-wider mb-2.5">Detail Misi</p>
          <h2 id="info-dac-title" className="font-pixel text-[clamp(1.25rem,3.5vw,1.9rem)] leading-snug">
            Tentang Kompetisi DAC
          </h2>
          <p className="text-ink-dim mt-3 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Pahami panduan analitik, ekspektasi visual, dan bobot penilaian dasbor kamu.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(0,229,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Deskripsi Kompetisi
              </h3>
              <p className="mt-3.5 text-ink-dim text-sm leading-relaxed flex-1">
                DAC berfokus pada kemampuan peserta mengubah data mentah menjadi dasbor bisnis intelijen
                interaktif yang mudah dipahami, bernilai strategis, dan memberikan rekomendasi nyata
                berdasarkan temuan data.
              </p>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(0,229,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Format Pengerjaan
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Studi kasus</span>
                  <strong className="text-ink font-semibold text-right">Dataset bisnis &amp; operasional</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Platform visualisasi</span>
                  <strong className="text-ink font-semibold text-right">Tableau / Power BI / Looker Studio</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Output penyisihan</span>
                  <strong className="text-ink font-semibold text-right">Link dasbor publik + video ringkas</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Babak final</span>
                  <strong className="text-ink font-semibold text-right">Paper pendukung + sesi presentasi</strong>
                </li>
              </ul>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(0,229,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Bobot Penilaian
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Kekuatan Visualisasi &amp; UX</span>
                  <strong className="text-cyan font-semibold text-right">35%</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Insight Bisnis &amp; Analisis</span>
                  <strong className="text-cyan font-semibold text-right">35%</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Presentasi &amp; Relevansi Solusi</span>
                  <strong className="text-cyan font-semibold text-right">30%</strong>
                </li>
              </ul>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(0,229,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Fasilitas Peserta
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">E-Sertifikat Nasional</span>
                  <strong className="text-ink font-semibold text-right">Semua tim terverifikasi</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Dataset &amp; Panduan</span>
                  <strong className="text-ink font-semibold text-right">Akses lengkap peserta</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Feedback Juri &amp; Exposure</span>
                  <strong className="text-ink font-semibold text-right">Khusus finalis terpilih</strong>
                </li>
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
      <section className="py-16 px-5 text-center" aria-labelledby="cta-dac-title">
        <div className="max-w-[42rem] mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(0,229,255,0.1)]">
            PENDAFTARAN SEGERA DIBUKA
          </span>
          <h2 id="cta-dac-title" className="font-pixel text-[clamp(1.25rem,3.5vw,1.9rem)] mt-5">
            Siap Rancang Dashboardmu?
          </h2>
          <p className="text-ink-dim mt-3.5 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Persiapkan cerita di balik datamu dan buktikan keunggulan analitik tim kamu.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-pixel text-xs px-8 py-4 mt-7 rounded-xl font-bold text-void bg-gradient-to-r from-cyan to-[#00b4d8] shadow-[0_0_15px_rgba(0,229,255,0.4)] hover:shadow-[0_0_24px_rgba(0,229,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </>
  );
};
