import React from 'react';
import { Link } from 'react-router-dom';
import { Countdown } from '../components/Countdown';
import { Timeline, type TimelineStage } from '../components/Timeline';
import { FaqAccordion, type FaqItem } from '../components/FaqAccordion';
import { HallOfFame } from '../components/HallOfFame';

const homeTimelineStages: TimelineStage[] = [
  {
    num: '01',
    title: 'Registrasi Peserta (Batch 1 & 2)',
    desc: 'Pembukaan pendaftaran peserta gelombang 1 dan gelombang 2 untuk kategori MLC dan DAC.',
    time: '19 Oktober - 15 November 2026',
  },
  {
    num: '02',
    title: 'Babak Penyisihan & Pengerjaan Karya',
    desc: 'Peserta mengerjakan tantangan dataset MLC dan penyusunan dashboard analitik DAC.',
    time: '19 Oktober - 29 November 2026',
  },
  {
    num: '03',
    title: 'Webinar DAC',
    desc: 'Sesi webinar eksklusif Data Analytics bersama narasumber ahli.',
    time: '27 November 2026',
  },
  {
    num: '04',
    title: 'Pengumuman Finalis',
    desc: 'Pengumuman 10 besar finalis DAC (30 November) dan finalis MLC (7 Desember).',
    time: '30 November & 7 Desember 2026',
  },
  {
    num: '05',
    title: 'Technical Meeting Final',
    desc: 'Pengarahan teknis bersama seluruh finalis MLC dan DAC menjelang babak presentasi.',
    time: '12 Desember 2026',
  },
  {
    num: '06',
    title: 'Babak Grand Final',
    desc: 'Sesi presentasi karya secara langsung di hadapan dewan juri bagi finalis MLC dan DAC.',
    time: '19 Desember 2026',
  },
  {
    num: '07',
    title: 'Pengumuman Juara',
    desc: 'Pengumuman resmi pemenang kompetisi Data Slayer 4.0 serta sesi awarding.',
    time: '21 Desember 2026',
  },
];

const homeFaqItems: FaqItem[] = [
  {
    question: 'Apakah boleh mengikuti dua kategori sekaligus?',
    answer: 'Boleh. Tim yang berbeda anggota bisa mendaftar di MLC maupun DAC, selama setiap anggota hanya terdaftar di satu tim per kategori.',
  },
  {
    question: 'Apakah peserta harus dari satu kampus yang sama?',
    answer: 'Peserta bebas membentuk tim dengan anggota dari berbagai universitas atau institusi yang berbeda'
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
      <section className="relative pt-12 pb-16 px-5 overflow-hidden border-b border-line/40" aria-labelledby="hero-title">
        
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

        <div className="relative z-10 max-w-[52rem] mx-auto text-center">
          <div>
            <p className="font-pixel text-[0.6rem] md:text-[0.65rem] text-ink-dim tracking-widest uppercase mb-4 inline-flex items-center justify-center gap-2">
              <span className="blink">●</span> INSERT COIN TO CONTINUE
            </p>
            <h1 id="hero-title" className="tracking-wide leading-tight mb-4 flex flex-col items-center">
              <div className="flex items-baseline justify-center">
                <span className="font-cursive text-[clamp(4.5rem,12vw,6.5rem)] text-ink text-outline-thin leading-none -mr-1">D</span>
                <span className="font-pixel text-[clamp(2.1rem,8vw,4rem)] text-ink">ATA</span>
              </div>
              <div className="flex items-baseline justify-center whitespace-nowrap -mt-3 md:-mt-5">
                  <span className="font-cursive text-[clamp(4rem,16vw,6.5rem)] text-cyan text-outline-thin leading-none -mr-1">S</span>
                  <span className="font-pixel text-[clamp(1.5rem,7vw,4rem)] text-cyan text-outline-white">LAYER 4.0</span>
              </div>
            </h1>
            <p className="max-w-[42rem] mx-auto mt-5 text-ink-dim leading-relaxed text-sm md:text-base">
              Kompetisi data tahunan dari Himpunan Mahasiswa Sains Data (HMSD) Telkom University
              Purwokerto. Pilih jalur pertarunganmu: bangun model prediksi paling tajam lewat MLC,
              atau bongkar cerita di balik data mentah lewat DAC.
            </p>

            <div className="inline-flex items-center gap-2 font-pixel text-[0.55rem] sm:text-[0.6rem] text-cyan bg-cyan/10 border border-cyan/30 px-4 py-2 rounded-full mt-5">
              <span>TEMA:</span>
              <span className="text-ink font-semibold">&ldquo;Data for Bridging Indonesia&apos;s Education Gap&rdquo;</span>
            </div>

            <div className="flex flex-wrap justify-center gap-3.5 mt-8">
              <a
                href="#daftar"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-pixel text-xs font-bold text-void bg-gradient-to-r from-cyan to-cyan shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Daftar Kompetisi
              </a>
              <a
                href="#kategori"
                className="inline-flex items-center justify-center rounded-xl px-7 py-3 font-pixel text-xs border-2 border-line bg-panel/60 text-ink hover:border-cyan/50 hover:bg-cyan/10 hover:text-cyan hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Eksplorasi Jalur Lomba
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-[42rem] mx-auto mt-12 p-3 bg-panel/40 border border-line rounded-2xl backdrop-blur-sm" role="group" aria-label="Ringkasan kompetisi">
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">2</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">kategori lomba</span>
              </div>
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">Jutaan Rupiah</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">total hadiah</span>
              </div>
              <div className="hero-stat p-4 rounded-xl bg-void/60 border border-line/60 flex flex-col items-center">
                <span className="font-pixel text-lg md:text-xl text-cyan">Nasional</span>
                <span className="font-pixel text-[0.55rem] text-ink-dim mt-2 tracking-wider">skala peserta</span>
              </div>
            </div>
          </div>

          <Countdown />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-5 text-center" aria-labelledby="about-title">
        <div className="max-w-[48rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan uppercase tracking-widest mb-2.5">Player Info</p>
          <h2 id="about-title" className="text-[clamp(1.35rem,4vw,2rem)] text-ink leading-snug">Tentang Data Slayer 4.0</h2>
          <p className="mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Data Slayer merupakan kompetisi nasional di bidang ilmu data yang diselenggarakan oleh
            Himpunan Mahasiswa Sains Data (HMSD) Telkom University Purwokerto. Edisi ke-4.0 ini
            kembali mengajak mahasiswa se-Indonesia untuk mengasah kemampuan analitis dan penerapan
            teknologi lewat dua jalur kompetisi: Machine Learning dan Data Analytics.
          </p>

          <div className="theme-card border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm text-left max-w-[42rem] mx-auto mt-8 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <p className="font-pixel text-[0.6rem] text-cyan tracking-wider flex items-center gap-2 before:content-['■'] before:text-cyan before:text-[0.65rem]">
                Tema Utama Data Slayer 4.0
              </p>
              <span className="inline-flex items-center font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                TEMA UTAMA
              </span>
            </div>
            <h3 className="font-pixel text-sm md:text-base text-ink leading-relaxed">
              &ldquo;Data for Bridging Indonesia&apos;s Education Gap&rdquo;
            </h3>
            <p className="text-ink-dim leading-relaxed text-sm mt-3">
              Mengangkat peran strategis sains data dalam memetakan, mengidentifikasi, dan menjembatani
              kesenjangan mutu serta akses pendidikan di Indonesia demi masa depan generasi yang lebih berkeadilan.
            </p>
          </div>
        </div>
      </section>

      {/* Kategori */}
      <section id="kategori" className="relative py-20 px-5 border-y border-line/40 text-center overflow-hidden" aria-labelledby="kategori-title">
        
        {/* Arcade Background */}
        <div 
          className="absolute inset-0 z-0 pointer-events-none opacity-50"
          style={{ 
            backgroundImage: "url('/double-arcade.webp')", 
            backgroundSize: "contain", 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat" 
          }}
        />

        <div className="relative z-10 max-w-[72rem] mx-auto text-center flex flex-col items-center">
          {/* Are You Ready Typography */}
          <div className="flex flex-col items-center mb-16 select-none cursor-default drop-shadow-sm">
            <span className="font-pixel text-[clamp(2.5rem,6vw,4rem)] text-cyan text-outline-white leading-none">Are</span>
            <span className="font-cursive text-[clamp(4.5rem,10vw,7.5rem)] text-gold text-outline-thin drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] leading-[0.5] -my-1 md:-my-3 relative z-10 -rotate-2">You</span>
            <span className="font-pixel text-[clamp(2.5rem,6vw,4rem)] text-cyan text-outline-white leading-none mt-2 md:mt-0">Ready?</span>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-32 mt-4 w-full max-w-[56rem]">
            {/* MLC Card */}
            <Link to="/mlc" className="glass-card aspect-square md:aspect-[4/3] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(205,164,222,0.35)] group relative overflow-hidden">
               <div className="flex items-baseline justify-center select-none relative z-10">
                 <span className="font-cursive text-5xl sm:text-7xl md:text-[8rem] text-mlc text-outline-thin leading-none">M</span>
                 <span className="font-pixel text-xl sm:text-3xl md:text-5xl text-mlc text-outline-white tracking-widest ml-2">LC</span>
               </div>
               <span className="absolute bottom-4 md:bottom-6 font-body font-bold text-[0.55rem] sm:text-xs md:text-sm tracking-widest uppercase text-mlc text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 Machine Learning
               </span>
            </Link>

            {/* DAC Card */}
            <Link to="/dac" className="glass-card aspect-square md:aspect-[4/3] flex flex-col items-center justify-center p-8 transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_40px_rgba(255,182,193,0.35)] group relative overflow-hidden">
               <div className="flex items-baseline justify-center select-none relative z-10">
                 <span className="font-cursive text-5xl sm:text-7xl md:text-[8rem] text-dac text-outline-thin leading-none">D</span>
                 <span className="font-pixel text-xl sm:text-3xl md:text-5xl text-dac text-outline-white tracking-widest ml-2">AC</span>
               </div>
               <span className="absolute bottom-4 md:bottom-6 font-body font-bold text-[0.55rem] sm:text-xs md:text-sm tracking-widest uppercase text-dac text-center px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 Dashboard Analytics
               </span>
            </Link>
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
            className="event-card border-2 border-line rounded-2xl p-7 bg-panel/80 backdrop-blur-sm text-left block transition-all duration-200 hover:-translate-y-1.5 hover:border-cyan/50 hover:shadow-[0_20px_45px_-15px_rgba(255,255,255,0.2)] max-w-[42rem] mx-auto mt-8"
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
        lead="Tahapan hari besar Data Slayer 4.0 dari pendaftaran hingga babak grand final. Detail lengkap per kategori dapat dilihat di halaman masing-masing."
        stages={homeTimelineStages}
      />

      {/* Hall of Fame / High Score Archive */}
      <HallOfFame />

      {/* FAQ (Centered Headers) */}
      <FaqAccordion
        id="faq"
        eyebrow="Bantuan"
        title="Pertanyaan Umum"
        items={homeFaqItems}
        sectionAlt={true}
      />

      {/* CTA */}
      <section 
        id="daftar" 
        className="min-h-[calc(100vh-6.5rem)] flex items-center justify-center py-12 px-5 scroll-mt-24 bg-gradient-to-b from-transparent via-panel/30 to-transparent" 
        aria-labelledby="cta-title"
      >
        <div className="relative z-10 w-full max-w-[54rem] mx-auto rounded-3xl bg-panel/85 backdrop-blur-md border-2 border-white/90 p-8 sm:p-14 md:p-16 shadow-[0_20px_50px_rgba(110,120,160,0.18)] overflow-hidden text-center flex flex-col items-center justify-center">
          
          {/* Subtle Arcade Background Accent */}
          <div 
            className="absolute right-0 bottom-0 w-48 md:w-64 h-48 md:h-64 pointer-events-none opacity-20 -mr-12 -mb-12 select-none"
            style={{ 
              backgroundImage: "url('/arcade.webp')", 
              backgroundSize: "contain", 
              backgroundPosition: "bottom right", 
              backgroundRepeat: "no-repeat" 
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center max-w-[42rem] mx-auto">
            <h2 id="cta-title" className="font-pixel text-[clamp(1.5rem,4.5vw,2.5rem)] text-ink leading-snug">
              Siap Jadi Juara?
            </h2>

            <p className="text-ink-dim mt-4 max-w-[46ch] leading-relaxed text-sm md:text-base">
              Pantau terus linimasa kami. Persiapkan tim terbaikmu dan jadilah juara di panggung data
              nasional tahun ini.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="https://www.instagram.com/dataslayer.tup?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 justify-center min-h-[44px] rounded-xl px-8 py-3.5 font-pixel text-xs font-bold text-ink bg-cyan shadow-[0_4px_16px_rgba(121,174,229,0.35)] hover:shadow-[0_6px_22px_rgba(121,174,229,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram Resmi
              </a>
              <a
                href="#kategori"
                className="inline-flex items-center justify-center min-h-[44px] rounded-xl px-7 py-3.5 font-pixel text-xs font-bold text-ink bg-white/90 hover:bg-white border border-white/90 shadow-[0_4px_14px_rgba(110,120,160,0.18)] hover:shadow-[0_6px_20px_rgba(121,174,229,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Lihat Kategori
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
