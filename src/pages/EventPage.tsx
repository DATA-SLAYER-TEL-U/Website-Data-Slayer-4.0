import React from 'react';
import { Link } from 'react-router-dom';

export const EventPage: React.FC = () => {
  return (
    <>
      <section className="pt-10 pb-14 px-5 border-b border-line/40 text-center">
        <div className="max-w-[56rem] mx-auto">
          <p className="font-pixel text-[0.6rem] text-cyan inline-flex items-center gap-2 mb-5 bg-cyan/10 border border-cyan/25 px-3.5 py-1.5 rounded-full">
            <span className="blink">●</span> SIDE QUEST
          </p>
          <h1 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-tight leading-tight text-ink">
            Road to <span className="text-cyan [text-shadow:0_0_20px_rgba(255,255,255,0.45)]">Data Slayer 4.0</span>
          </h1>
          <p className="max-w-[40rem] mx-auto mt-4 text-ink-dim leading-relaxed text-sm md:text-base">
            Rangkaian webinar pendukung bagi peserta yang sedang mengikuti kompetisi.
          </p>
        </div>
      </section>

      <section className="py-16 px-5" aria-labelledby="event-detail-title">
        <div className="max-w-[68rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[20rem_1fr] gap-8 md:gap-12 items-start">
            {/* Poster Frame */}
            <div className="relative group overflow-hidden border-2 border-line rounded-2xl bg-panel shadow-lg">
              <img
                src="/poster-webinar.jpg"
                alt="Poster Webinar Road to Data Slayer 4.0 - Turn Education Data into Impact"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
              />
              <a
                href="/poster-webinar.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 bg-void/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 font-pixel text-xs text-white backdrop-blur-[2px]"
                aria-label="Lihat poster ukuran penuh"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
                Lihat Ukuran Penuh
              </a>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2.5">
                <span className="font-pixel text-[0.6rem] text-cyan tracking-wider">Webinar</span>
                <span className="inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                  FREE / TERBUKA UNTUK UMUM
                </span>
              </div>
              <h2 id="event-detail-title" className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold text-ink leading-snug">
                Webinar: Road to Data Slayer 4.0
              </h2>
              <p className="font-semibold text-cyan text-sm sm:text-base mt-1.5 leading-snug">
                &ldquo;Turn Education Data into Impact: Merancang Dashboard Adaptif untuk Pendidikan&rdquo;
              </p>
              <p className="text-ink-dim mt-3 leading-relaxed text-sm md:text-base">
                Menghadirkan narasumber profesional yang akan membahas penerapan data dan visualisasi
                untuk membantu menjawab isu-isu terkini, khususnya pada bidang pendidikan.
              </p>

              {/* Speaker Card */}
              <div className="mt-5 p-4 rounded-xl bg-panel/70 border border-line flex items-center gap-3.5 w-full">
                <div className="w-10 h-10 rounded-lg bg-cyan/15 border border-cyan/30 flex items-center justify-center shrink-0 text-cyan">
                  <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-pixel text-[0.55rem] text-cyan uppercase tracking-wider">Narasumber</p>
                  <p className="font-bold text-ink text-sm sm:text-base leading-tight mt-0.5">Fajar Ibrahim</p>
                  <p className="text-xs text-ink-dim leading-snug">Business Intelligence & Analytics PT Pupuk Indonesia (Persero)</p>
                </div>
              </div>

              {/* Event Meta: Time & Platform */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-4 w-full">
                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-panel/50 border border-line/60 text-xs text-ink">
                  <span className="text-cyan">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[0.65rem] text-ink-dim font-pixel">JADWAL</p>
                    <p className="font-semibold text-xs">27 November 2026</p>
                    <p className="text-[0.7rem] text-ink-dim">08.45 WIB - Selesai</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-3 rounded-lg bg-panel/50 border border-line/60 text-xs text-ink">
                  <span className="text-cyan">
                    <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <polygon points="23 7 16 12 23 17 23 7" />
                      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[0.65rem] text-ink-dim font-pixel">PLATFORM</p>
                    <p className="font-semibold text-xs">Zoom Meeting</p>
                    <p className="text-[0.7rem] text-ink-dim">Gratis (Free)</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-6">
                <a
                  href="https://data-slayer.com/DaftarWebinarDAC"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-pixel text-xs font-bold text-void bg-cyan shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Daftar Webinar Sekarang
                </a>
                <a
                  href="https://wa.me/6282144236616"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-ink bg-panel border border-line hover:border-cyan/50 px-3.5 py-3 rounded-xl transition-all"
                  title="Hubungi Contact Person: 082144236616 (Dill)"
                >
                  CP: 082144236616 (Dill)
                </a>
              </div>

              <p className="text-ink-dim mt-8 leading-relaxed text-sm md:text-base">
                Informasi lengkap terkait webinar bisa diakses di bawah ini.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
                <a
                  href="/vbg-peserta.jpg"
                  download="VBG-Peserta-Data-Slayer-4.0.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-link flex items-center gap-3.5 p-4 bg-panel/90 border border-line hover:border-cyan/50 hover:bg-panel rounded-xl text-sm font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_14px_rgba(121,174,229,0.25)] group"
                >
                  <span className="text-cyan group-hover:scale-110 transition-transform">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="1" width="8" height="5" fill="currentColor"/>
                      <rect x="1" y="2" width="6" height="3" fill="#0a0e27"/>
                      <rect x="3" y="6" width="2" height="1" fill="currentColor"/>
                      <rect x="2" y="7" width="4" height="1" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>Virtual Background (VBG)</span>
                  <span className="ml-auto shrink-0 inline-flex items-center gap-1 font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/15 border border-cyan/40 px-2.5 py-1 rounded shadow-sm group-hover:bg-cyan group-hover:text-void transition-colors">
                    UNDUH ↓
                  </span>
                </a>
                <div className="resource-link flex items-center gap-3.5 p-4 bg-panel/70 border border-line rounded-xl text-sm font-semibold opacity-60 cursor-not-allowed">
                  <span className="text-cyan">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="0" width="6" height="8" fill="currentColor"/>
                      <polygon points="5,0 7,0 7,2" fill="#0a0e27"/>
                      <rect x="2" y="3" width="3" height="1" fill="#0a0e27"/>
                      <rect x="2" y="5" width="4" height="1" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Notulensi</span>
                  <span className="ml-auto shrink-0 inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                    SEGERA
                  </span>
                </div>
                <div className="resource-link flex items-center gap-3.5 p-4 bg-panel/70 border border-line rounded-xl text-sm font-semibold opacity-60 cursor-not-allowed">
                  <span className="text-cyan">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="0" width="6" height="8" fill="currentColor"/>
                      <polygon points="5,0 7,0 7,2" fill="#0a0e27"/>
                      <rect x="2" y="3" width="4" height="1" fill="#0a0e27"/>
                      <rect x="2" y="5" width="4" height="1" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Materi</span>
                  <span className="ml-auto shrink-0 inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                    SEGERA
                  </span>
                </div>
                <div className="resource-link flex items-center gap-3.5 p-4 bg-panel/70 border border-line rounded-xl text-sm font-semibold opacity-60 cursor-not-allowed">
                  <span className="text-cyan">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="0" width="6" height="3" fill="currentColor"/>
                      <rect x="0" y="1" width="1" height="2" fill="currentColor"/>
                      <rect x="7" y="1" width="1" height="2" fill="currentColor"/>
                      <rect x="3" y="3" width="2" height="2" fill="currentColor"/>
                      <rect x="2" y="5" width="4" height="1" fill="currentColor"/>
                      <rect x="1" y="6" width="6" height="1" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>Sertifikat</span>
                  <span className="ml-auto shrink-0 inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                    SEGERA
                  </span>
                </div>
                <div className="resource-link flex items-center gap-3.5 p-4 bg-panel/70 border border-line rounded-xl text-sm font-semibold opacity-60 cursor-not-allowed">
                  <span className="text-cyan">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="2" width="8" height="5" fill="currentColor"/>
                      <rect x="2" y="1" width="2" height="1" fill="currentColor"/>
                      <rect x="3" y="3" width="2" height="2" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Dokumentasi</span>
                  <span className="ml-auto shrink-0 inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                    SEGERA
                  </span>
                </div>
                <div className="resource-link flex items-center gap-3.5 p-4 bg-panel/70 border border-line rounded-xl text-sm font-semibold opacity-60 cursor-not-allowed">
                  <span className="text-cyan">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="2,1 2,7 7,4" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>Rekaman</span>
                  <span className="ml-auto shrink-0 inline-flex items-center font-pixel text-[0.5rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-2.5 py-1 rounded">
                    SEGERA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        id="daftar" 
        className="min-h-[calc(100vh-6.5rem)] flex items-center justify-center py-12 px-5 scroll-mt-24 bg-gradient-to-b from-transparent via-panel/30 to-transparent" 
        aria-labelledby="cta-event-title"
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
            <h2 id="cta-event-title" className="font-pixel text-[clamp(1.5rem,4.5vw,2.5rem)] text-ink leading-snug">
              Jangan Sampai Terlewat
            </h2>

            <p className="text-ink-dim mt-4 max-w-[46ch] leading-relaxed text-sm md:text-base">
              Daftarkan dirimu sekarang untuk mengikuti sesi webinar inspiratif ini dan pantau informasi terkini melalui Instagram resmi kami.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap justify-center items-center gap-4 mt-8">
              <a
                href="https://data-slayer.com/DaftarWebinarDAC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 justify-center min-h-[44px] rounded-xl px-8 py-3.5 font-pixel text-xs font-bold text-void bg-cyan shadow-[0_4px_16px_rgba(121,174,229,0.35)] hover:shadow-[0_6px_22px_rgba(121,174,229,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Daftar Webinar Sekarang
              </a>
              <a
                href="https://www.instagram.com/dataslayer.tup?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 justify-center min-h-[44px] rounded-xl px-7 py-3.5 font-pixel text-xs font-bold text-ink bg-white/90 hover:bg-white border border-white/90 shadow-[0_4px_14px_rgba(110,120,160,0.18)] hover:shadow-[0_6px_20px_rgba(121,174,229,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Buka Instagram Resmi
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center min-h-[44px] rounded-xl px-7 py-3.5 font-pixel text-xs font-bold text-ink bg-panel/80 hover:bg-panel border border-line shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
