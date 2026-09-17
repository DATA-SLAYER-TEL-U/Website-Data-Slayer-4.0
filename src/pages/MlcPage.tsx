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
      <section className="sub-hero">
        <div className="sub-hero-inner">
          <p className="sub-hero-tag"><span className="blink">●</span> MODE 01 — MLC</p>
          <h1 className="sub-hero-title">Machine Learning<br />Competition</h1>
          <p className="sub-hero-lead">
            Terapkan ilmu data dan kecerdasan buatan untuk menyelesaikan permasalahan nyata.
            Adu akurasi model kamu di papan skor dan buktikan strategimu yang paling tajam.
          </p>

          <div className="sub-hero-actions">
            <a href="#" className="btn btn-ghost" aria-disabled="true">Guidebook <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
            <a href="#" className="btn btn-ghost" aria-disabled="true">Registration <span className="badge-soon" style={{ marginInlineStart: '0.5rem' }}>SEGERA</span></a>
          </div>

          <Countdown targetDate="" />
        </div>
      </section>

      {/* Info MLC */}
      <section className="section" aria-labelledby="info-mlc-title">
        <div className="section-inner">
          <p className="section-eyebrow">Detail Misi</p>
          <h2 id="info-mlc-title" className="section-title">Tentang Kompetisi MLC</h2>
          <p className="section-lead">
            Pelajari ketentuan teknis, kriteria penilaian, dan alur pengerjaan sebelum memulai kompetisi.
          </p>

          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Deskripsi Kompetisi</h3>
              <p className="info-card-text">
                MLC menguji kemampuan peserta dalam merancang model machine learning yang presisi dan
                tahan uji terhadap data unseen. Fokus kompetisi mencakup pembersihan data, feature
                engineering, pemodelan, evaluasi performa, serta dokumentasi solusi yang terstruktur.
              </p>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Format Pengerjaan</h3>
              <ul className="info-card-list">
                <li><span>Format data</span><strong>Dataset tabular / multi-feature</strong></li>
                <li><span>Bahasa pemrograman</span><strong>Python (bebas library)</strong></li>
                <li><span>Batas submission</span><strong>Maksimal 3 submission / hari</strong></li>
                <li><span>Evaluasi akhir</span><strong>Presentasi di babak final</strong></li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Bobot Penilaian</h3>
              <ul className="info-card-list">
                <li><span>Skor Leaderboard (Akurasi/Metrik)</span><strong>60%</strong></li>
                <li><span>Metodologi &amp; Feature Engineering</span><strong>20%</strong></li>
                <li><span>Presentasi Solusi &amp; Q&amp;A</span><strong>20%</strong></li>
              </ul>
            </div>

            <div className="info-card">
              <h3 className="info-card-title">Fasilitas Peserta</h3>
              <ul className="info-card-list">
                <li><span>E-Sertifikat Nasional</span><strong>Semua tim terverifikasi</strong></li>
                <li><span>Guidebook &amp; Dataset</span><strong>Akses penuh peserta</strong></li>
                <li><span>Feedback Dewan Juri</span><strong>Khusus finalis</strong></li>
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
      <section className="section cta-section" aria-labelledby="cta-mlc-title">
        <div className="section-inner section-inner--narrow cta-inner">
          <span className="badge-soon">PENDAFTARAN SEGERA DIBUKA</span>
          <h2 id="cta-mlc-title" className="section-title" style={{ marginTop: '1.25rem' }}>Siap Latih Modelmu?</h2>
          <p className="section-lead">Ikuti info terbaru supaya tidak ketinggalan gelombang pendaftaran MLC.</p>
          <Link to="/" className="btn btn-cta btn-lg">Kembali ke Beranda</Link>
        </div>
      </section>
    </>
  );
};
