import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Timeline, type TimelineStage } from '../components/Timeline';
import { FaqAccordion, type FaqItem } from '../components/FaqAccordion';

const dacTimelineStages: TimelineStage[] = [
  {
    num: '01',
    title: 'Registrasi Batch 1 DAC',
    desc: 'Pembukaan pendaftaran gelombang pertama kompetisi Data Analytics Competition.',
    time: '19 Oktober - 8 November 2026',
  },
  {
    num: '02',
    title: 'Registrasi Batch 2 DAC',
    desc: 'Pendaftaran gelombang kedua bagi tim yang belum sempat mendaftar.',
    time: '9 November - 15 November 2026',
  },
  {
    num: '03',
    title: 'Pembuatan Dashboard DAC',
    desc: 'Peserta merancang dan membangun visualisasi dashboard analisis data interaktif.',
    time: '19 Oktober - 23 November 2026',
  },
  {
    num: '04',
    title: 'Penilaian Dashboard DAC (10 Besar)',
    desc: 'Evaluasi dewan juri terhadap dashboard peserta untuk menentukan 10 tim finalis.',
    time: '23 - 29 November 2026',
  },
  {
    num: '05',
    title: 'Webinar DAC',
    desc: 'Sesi webinar eksklusif seputar Data Analytics bagi peserta dan umum.',
    time: '27 November 2026',
  },
  {
    num: '06',
    title: 'Pengumuman Finalis DAC',
    desc: 'Pengumuman resmi 10 tim finalis terbaik yang lolos ke babak berikutnya.',
    time: '30 November 2026',
  },
  {
    num: '07',
    title: 'Voting Juara Favorit',
    desc: 'Periode pemungutan suara publik secara terbuka untuk memilih Juara Favorit.',
    time: '1 - 6 Desember 2026',
  },
  {
    num: '08',
    title: 'Pembuatan dan Pengumpulan Paper',
    desc: 'Penyusunan laporan analisis pendukung karya dan pengumpulan paper oleh finalis.',
    time: '1 - 7 Desember 2026',
  },
  {
    num: '09',
    title: 'TM Final DAC',
    desc: 'Technical Meeting pengarahan teknis pelaksanaan babak final bagi seluruh finalis.',
    time: '12 Desember 2026',
  },
  {
    num: '10',
    title: 'Pembuatan PPT & Pengumpulan File Presentasi',
    desc: 'Finalis menyiapkan slide materi dan mengunggah berkas presentasi akhir.',
    time: '13 - 17 Desember 2026',
  },
  {
    num: '11',
    title: 'Babak Final DAC',
    desc: 'Presentasi langsung karya di hadapan dewan juri dan penentuan pemenang.',
    time: '19 Desember 2026',
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
  const [assessmentStage, setAssessmentStage] = useState<'penyisihan' | 'final'>('penyisihan');

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
          <p className="font-pixel text-[0.6rem] text-dac inline-flex items-center gap-2 mb-5 bg-dac/10 border border-dac/25 px-3.5 py-1.5 rounded-full">
            <span className="blink">●</span> MODE 02: DAC
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight text-ink">
            Dashboard Analytics <span className="text-dac [text-shadow:0_0_20px_rgba(255,182,193,0.45)]">Competition</span>
          </h1>
          <p className="max-w-[40rem] mx-auto mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Rancang visualisasi data interaktif yang memukau dan mampu menyampaikan cerita di balik angka
            secara tajam, estetik, dan berdampak bagi pengambilan keputusan.
          </p>

          <div className="inline-flex items-center gap-2 font-pixel text-[0.55rem] sm:text-[0.6rem] text-dac bg-dac/10 border border-dac/30 px-4 py-2 rounded-full mt-4">
            <span>TEMA:</span>
            <span className="text-ink font-semibold">&ldquo;Smart Educational Visualization for Human Capital: Mengembangkan Dashboard yang Inklusif, Adaptif, dan Solutif&rdquo;</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3.5 mt-7">
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-xl border border-line bg-panel/80 text-ink cursor-not-allowed select-none shadow-sm">
              Guidebook
              <span className="inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-dac bg-dac/15 border border-dac/30 px-2 py-0.5 rounded">
                SEGERA
              </span>
            </span>
            <span className="inline-flex items-center gap-2.5 font-pixel text-xs px-5 py-3 rounded-xl border border-line bg-panel/80 text-ink cursor-not-allowed select-none shadow-sm">
              Registration
              <span className="inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-dac bg-dac/15 border border-dac/30 px-2 py-0.5 rounded">
                SEGERA
              </span>
            </span>
          </div>

          <Countdown />
        </div>
      </section>

      {/* Info DAC */}
      <section className="py-16 px-5" aria-labelledby="info-dac-title">
        <div className="max-w-[68rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-dac tracking-wider mb-2.5">Detail Misi</p>
          <h2 id="info-dac-title" className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold text-ink leading-snug">
            Tentang Kompetisi DAC
          </h2>
          <p className="text-ink-dim mt-3 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Pahami panduan analitik, ekspektasi visual, dan bobot penilaian dasbor kamu.
          </p>

          <div className="border-2 border-line rounded-2xl p-6 bg-panel/80 backdrop-blur-sm mt-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
              <span className="font-pixel text-[0.6rem] text-dac tracking-wider flex items-center gap-2 before:content-['■'] before:text-dac before:text-[0.65rem]">
                Tema Kompetisi DAC
              </span>
              <span className="font-pixel text-[0.55rem] text-dac bg-dac/10 border border-dac/30 px-2.5 py-1 rounded">
                MISSION THEME
              </span>
            </div>
            <h3 className="font-pixel text-sm md:text-base text-ink leading-relaxed">
              &ldquo;Smart Educational Visualization for Human Capital: Mengembangkan Dashboard yang Inklusif, Adaptif, dan Solutif&rdquo;
            </h3>
            <p className="text-ink-dim leading-relaxed text-sm mt-2.5">
              Membangun dasbor visualisasi analitis interaktif yang mengupas dinamika data pendidikan dan pengembangan
              sumber daya manusia (human capital) guna menghadirkan wawasan strategis serta solusi nyata berbasis bukti.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-dac/40 hover:shadow-[0_12px_30px_-10px_rgba(255,182,193,0.2)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-dac before:text-[0.65rem]">
                Deskripsi Kompetisi
              </h3>
              <p className="mt-3.5 text-ink-dim text-sm leading-relaxed flex-1">
                DAC berfokus pada kemampuan peserta mengubah data mentah menjadi dasbor bisnis intelijen
                interaktif yang mudah dipahami, bernilai strategis, dan memberikan rekomendasi nyata
                berdasarkan temuan data.
              </p>
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-dac/40 hover:shadow-[0_12px_30px_-10px_rgba(255,182,193,0.2)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-dac before:text-[0.65rem]">
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

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-dac/40 hover:shadow-[0_12px_30px_-10px_rgba(255,182,193,0.2)]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-dac before:text-[0.65rem]">
                  Bobot Penilaian
                </h3>
                <div className="inline-flex rounded-lg border border-line bg-void/70 p-1 text-[0.6rem] font-pixel" role="tablist" aria-label="Tahap Penilaian">
                  <button
                    type="button"
                    role="tab"
                    aria-selected={assessmentStage === 'penyisihan'}
                    onClick={() => setAssessmentStage('penyisihan')}
                    className={`min-h-[44px] px-3.5 py-2 rounded-md transition-all duration-150 cursor-pointer ${
                      assessmentStage === 'penyisihan'
                        ? 'bg-dac text-ink font-bold shadow-[0_0_10px_rgba(255,182,193,0.4)]'
                        : 'text-ink-dim hover:text-ink'
                    }`}
                  >
                    Penyisihan
                  </button>
                  <button
                    type="button"
                    role="tab"
                    aria-selected={assessmentStage === 'final'}
                    onClick={() => setAssessmentStage('final')}
                    className={`min-h-[44px] px-3.5 py-2 rounded-md transition-all duration-150 cursor-pointer ${
                      assessmentStage === 'final'
                        ? 'bg-dac text-ink font-bold shadow-[0_0_10px_rgba(255,182,193,0.4)]'
                        : 'text-ink-dim hover:text-ink'
                    }`}
                  >
                    Final
                  </button>
                </div>
              </div>

              {assessmentStage === 'penyisihan' ? (
                <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                  <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                    <span className="text-ink-dim" title="Relevansi isi dashboard dengan tema yang diberikan, kejelasan pesan utama/insight yang ingin disampaikan.">Kesesuaian Tema &amp; Informasi yang Disajikan</span>
                    <strong className="text-dac font-semibold text-right shrink-0">30%</strong>
                  </li>
                  <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                    <span className="text-ink-dim" title="Tata letak, keterbacaan grafik, pemilihan jenis visualisasi yang tepat, konsistensi warna dan label.">Desain &amp; Visualisasi</span>
                    <strong className="text-dac font-semibold text-right shrink-0">30%</strong>
                  </li>
                  <li className="flex justify-between items-baseline gap-4 text-sm">
                    <span className="text-ink-dim" title="Kualitas pengolahan data, ketepatan perhitungan, dan kedalaman insight awal yang ditampilkan.">Analisis Data</span>
                    <strong className="text-dac font-semibold text-right shrink-0">40%</strong>
                  </li>
                </ul>
              ) : (
                <ul className="mt-5 space-y-3.5 list-none p-0 flex-1">
                  <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                    <span className="text-ink-dim" title="Struktur penulisan jelas, argumentasi logis, penggunaan referensi/data pendukung yang tepat.">Isi &amp; Kualitas Paper</span>
                    <strong className="text-dac font-semibold text-right shrink-0">25%</strong>
                  </li>
                  <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                    <span className="text-ink-dim" title="Kemampuan menjelaskan insight yang ditemukan dari dashboard, keterkaitan dengan permasalahan/tema, ketepatan metodologi analisis.">Pemahaman &amp; Pendalaman Analisis</span>
                    <strong className="text-dac font-semibold text-right shrink-0">20%</strong>
                  </li>
                  <li className="flex justify-between items-baseline gap-4 text-sm pb-3 border-b border-dashed border-white/10">
                    <span className="text-ink-dim" title="Alur presentasi terstruktur, visualisasi pendukung menarik, penguasaan materi, dan penyampaian solusi/rekomendasi nyata berdasarkan hasil analisis.">Presentasi &amp; Komunikasi</span>
                    <strong className="text-dac font-semibold text-right shrink-0">30%</strong>
                  </li>
                  <li className="flex justify-between items-baseline gap-4 text-sm">
                    <span className="text-ink-dim" title="Jawaban tepat, jelas, dan meyakinkan.">Ketepatan Menjawab Pertanyaan</span>
                    <strong className="text-dac font-semibold text-right shrink-0">25%</strong>
                  </li>
                </ul>
              )}
            </div>

            <div className="border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm flex flex-col transition-all duration-200 hover:-translate-y-1 hover:border-dac/40 hover:shadow-[0_12px_30px_-10px_rgba(255,182,193,0.2)]">
              <h3 className="font-pixel text-xs text-ink tracking-wide flex items-center gap-2 before:content-['■'] before:text-dac before:text-[0.65rem]">
                Benefit Peserta
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
        lead="Jadwal resmi tahapan Data Analytics Competition dari pembukaan pendaftaran hingga babak final."
        stages={dacTimelineStages}
        accentColor="dac"
      />

      {/* Centered FAQ DAC */}
      <FaqAccordion
        id="faq-dac"
        eyebrow="Bantuan"
        title="FAQ DAC"
        items={dacFaqItems}
        sectionAlt={true}
        accentColor="dac"
      />

      {/* CTA */}
      <section className="py-16 px-5 text-center" aria-labelledby="cta-dac-title">
        <div className="max-w-[42rem] mx-auto flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-dac bg-dac/10 border border-dac/30 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(255,182,193,0.2)]">
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
            className="inline-flex items-center gap-2 font-pixel text-xs px-8 py-4 mt-7 rounded-xl font-bold text-ink bg-gradient-to-r from-dac to-dac shadow-[0_0_15px_rgba(255,182,193,0.4)] hover:shadow-[0_0_24px_rgba(255,182,193,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </section>
    </>
  );
};
