import React from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Timeline, type TimelineStage } from '../components/Timeline';
import { FaqAccordion, type FaqItem } from '../components/FaqAccordion';

const mlcTimelineStages: TimelineStage[] = [
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
    title: 'Babak Penyisihan',
    desc: 'Peserta mengerjakan dataset kompetisi.',
    time: 'TBA',
  },
  {
    num: '04',
    title: 'Pengumuman Finalis',
    desc: 'Tim dengan skor terbaik melaju ke babak final.',
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
    title: 'Pengumpulan Presentasi',
    desc: 'Finalis menyusun materi presentasi solusi.',
    time: 'TBA',
  },
  {
    num: '07',
    title: 'Babak Final',
    desc: 'Presentasi langsung di hadapan dewan juri.',
    time: 'TBA',
  },
];

const mlcFaqItems: FaqItem[] = [
  {
    question: 'Apakah anggota tim harus berasal dari universitas yang sama?',
    answer: 'Peserta bebas membentuk tim dengan anggota dari berbagai universitas atau institusi yang berbeda.',
  },
  {
    question: 'Apakah diperbolehkan menggunakan model pre-trained atau melakukan fine-tuning?',
    answer: 'Penggunaan model pre-trained dan fine-tuning diperbolehkan selama sesuai dengan aturan kompetisi yang akan dijelaskan di Guidebook.',
  },
  {
    question: 'Platform apa yang digunakan untuk submit model?',
    answer: 'Detail platform pengumpulan submission akan diinformasikan bersama Guidebook resmi MLC 4.0.',
  },
  {
    question: 'Apakah boleh mendaftar lebih dari satu cabang kompetisi?',
    answer: 'Ya, peserta diperbolehkan mengikuti lebih dari satu kompetisi Data Slayer 4.0, dengan ketentuan hanya boleh menjadi ketua tim pada satu kompetisi saja.',
  },
  {
    question: 'Apakah penggunaan data eksternal diperbolehkan?',
    answer: 'Tidak. Peserta dilarang keras menggunakan data eksternal apa pun untuk melatih model. Seluruh proses training harus dilakukan hanya menggunakan dataset yang disediakan panitia.',
  },
];

export const MlcPage: React.FC = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col items-center justify-center pt-24 pb-40 px-5 border-b border-line/40 text-center relative overflow-hidden">
        
        {/* Awan Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-100"
          style={{ 
            backgroundImage: "url('/awan.webp')", 
            backgroundSize: "contain", 
            backgroundPosition: "top center", 
            backgroundRepeat: "no-repeat" 
          }}
        />

        {/* Arcade Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
          style={{ 
            backgroundImage: "url('/arcade.webp')", 
            backgroundSize: "contain", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat" 
          }}
        />

        <div className="relative z-10 max-w-[56rem] w-full -translate-y-12 md:-translate-y-20">
          <p className="font-pixel text-[0.6rem] text-cyan inline-flex items-center gap-2 mb-5 bg-cyan/10 border border-cyan/25 px-3.5 py-1.5 rounded-full">
            <span className="blink">●</span> MODE 01: MLC
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight text-ink">
            Machine Learning <span className="text-cyan [text-shadow:0_0_20px_rgba(255,255,255,0.45)]">Competition</span>
          </h1>
          <p className="max-w-[40rem] mx-auto mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Terapkan ilmu data dan kecerdasan buatan untuk menyelesaikan permasalahan nyata.
            Adu akurasi model kamu di papan skor dan buktikan strategimu yang paling tajam.
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

      {/* Info MLC */}
      <section className="py-16 px-5" aria-labelledby="info-mlc-title">
        <div className="max-w-[68rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan tracking-wider mb-2.5">Detail Misi</p>
          <h2 id="info-mlc-title" className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold text-ink leading-snug">
            Tentang Kompetisi MLC
          </h2>
          <p className="text-ink-dim mt-3 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Pelajari ketentuan teknis, kriteria penilaian, dan alur pengerjaan sebelum memulai kompetisi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Deskripsi Kompetisi
              </h3>
              <p className="mt-3.5 text-ink-dim text-sm leading-relaxed flex-1">
                MLC menguji kemampuan peserta dalam merancang model machine learning yang presisi dan
                tahan uji terhadap data unseen. Fokus kompetisi mencakup pembersihan data, feature
                engineering, pemodelan, evaluasi performa, serta dokumentasi solusi yang terstruktur.
              </p>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Format Pengerjaan
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Format data</span>
                  <strong className="text-ink font-semibold text-right">Dataset tabular / multi-feature</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Bahasa pemrograman</span>
                  <strong className="text-ink font-semibold text-right">Python (bebas library)</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Batas submission</span>
                  <strong className="text-ink font-semibold text-right">Maksimal 3 submission / hari</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Evaluasi akhir</span>
                  <strong className="text-ink font-semibold text-right">Presentasi di babak final</strong>
                </li>
              </ul>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Bobot Penilaian
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Skor Leaderboard (Akurasi/Metrik)</span>
                  <strong className="text-cyan font-semibold text-right">60%</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Metodologi &amp; Feature Engineering</span>
                  <strong className="text-cyan font-semibold text-right">20%</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Presentasi Solusi &amp; Q&amp;A</span>
                  <strong className="text-cyan font-semibold text-right">20%</strong>
                </li>
              </ul>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-cyan/40 hover:shadow-[0_12px_30px_-10px_rgba(255,255,255,0.15)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Fasilitas Peserta
              </h3>
              <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">E-Sertifikat Nasional</span>
                  <strong className="text-ink font-semibold text-right">Semua tim terverifikasi</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                  <span className="text-ink-dim shrink-0">Guidebook &amp; Dataset</span>
                  <strong className="text-ink font-semibold text-right">Akses penuh peserta</strong>
                </li>
                <li className="flex justify-between items-baseline gap-4 text-sm">
                  <span className="text-ink-dim shrink-0">Feedback Dewan Juri</span>
                  <strong className="text-ink font-semibold text-right">Khusus finalis</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Centered Timeline MLC */}
      <Timeline
        eyebrow="Progres Level"
        title="Timeline MLC"
        lead="Tanggal pasti akan diumumkan bersama pembukaan pendaftaran."
        stages={mlcTimelineStages}
      />

      {/* Centered FAQ MLC */}
      <FaqAccordion
        id="faq-mlc"
        eyebrow="Bantuan"
        title="FAQ MLC"
        items={mlcFaqItems}
        sectionAlt={true}
      />

      {/* CTA */}
      <section className="py-16 px-5 text-center" aria-labelledby="cta-mlc-title">
        <div className="max-w-[42rem] mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            PENDAFTARAN SEGERA DIBUKA
          </span>
          <h2 id="cta-mlc-title" className="font-pixel text-[clamp(1.25rem,3.5vw,1.9rem)] mt-5">
            Siap Latih Modelmu?
          </h2>
          <p className="text-ink-dim mt-3.5 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Ikuti info terbaru supaya tidak ketinggalan gelombang pendaftaran MLC.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-pixel text-xs px-8 py-4 mt-7 rounded-xl font-bold text-void bg-gradient-to-r from-cyan to-cyan shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_24px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </>
  );
};
