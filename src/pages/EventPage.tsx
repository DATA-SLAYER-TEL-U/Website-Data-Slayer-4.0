import React from 'react';

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
            Rangkaian webinar pemanasan sebelum kompetisi utama dimulai. Detail jadwal dan
            pembicara akan diumumkan menjelang hari pelaksanaan.
          </p>
        </div>
      </section>

      <section className="py-16 px-5" aria-labelledby="event-detail-title">
        <div className="max-w-[68rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[17rem_1fr] gap-8 md:gap-12 items-start">
            <div className="aspect-[4/5] border-2 border-line rounded-2xl bg-gradient-to-b from-panel-2 to-panel flex flex-col items-center justify-center gap-3.5 text-center p-8 shadow-md">
              <svg className="pixel-icon text-cyan opacity-85" width="56" height="56" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="2" width="8" height="5" fill="currentColor"/>
                <rect x="2" y="1" width="2" height="1" fill="currentColor"/>
                <rect x="3" y="3" width="2" height="2" fill="#0a0e27"/>
              </svg>
              <p className="font-pixel text-[0.65rem] text-ink-dim tracking-wider">POSTER SEGERA HADIR</p>
            </div>

            <div>
              <p className="font-pixel text-[0.6rem] text-cyan tracking-wider mb-2.5">Webinar</p>
              <h2 id="event-detail-title" className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold text-ink leading-snug">
                Webinar: Road to Data Slayer 4.0
              </h2>
              <p className="text-ink-dim mt-3 max-w-[46ch] leading-relaxed text-sm md:text-base">
                Menghadirkan narasumber profesional untuk berbagi wawasan seputar penerapan data
                dan visualisasi dalam menjawab isu-isu terkini. Topik dan pembicara resmi akan
                diumumkan lebih lanjut.
              </p>

              <span className="inline-flex items-center gap-1.5 font-pixel text-[0.55rem] tracking-wider text-cyan bg-cyan/10 border border-cyan/30 px-3 py-1.5 rounded shadow-[0_0_10px_rgba(255,255,255,0.1)] mt-6">
                JADWAL SEGERA DIUMUMKAN
              </span>

              <p className="text-ink-dim mt-8 max-w-[46ch] leading-relaxed text-sm md:text-base">
                Sudah ikut webinarnya? Materi post-event akan tersedia di bawah ini begitu acara selesai.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-6">
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

      <section className="py-16 px-5 text-center bg-gradient-to-b from-transparent via-panel/50 to-transparent" aria-labelledby="cta-event-title">
        <div className="max-w-[42rem] mx-auto flex flex-col items-center">
          <h2 id="cta-event-title" className="text-[clamp(1.35rem,3.5vw,2rem)] font-bold text-ink">
            Jangan Sampai Terlewat
          </h2>
          <p className="text-ink-dim mt-3.5 max-w-[46ch] leading-relaxed text-sm md:text-base">
            Ikuti Instagram panitia untuk info tanggal, pembicara, dan link pendaftaran webinar.
          </p>
          <a
            href="https://www.instagram.com/dataslayer.tup?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-pixel text-xs px-8 py-4 mt-7 rounded-xl font-bold text-void bg-gradient-to-r from-cyan to-cyan shadow-[0_0_15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_24px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
          >
            Buka Instagram Resmi
          </a>
        </div>
      </section>
    </>
  );
};
