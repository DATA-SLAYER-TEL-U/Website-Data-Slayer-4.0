import React from 'react';

export const EventPage: React.FC = () => {
  return (
    <>
      <section className="sub-hero">
        <div className="sub-hero-inner">
          <p className="sub-hero-tag"><span className="blink">●</span> SIDE QUEST</p>
          <h1 className="sub-hero-title">Road to<br />Data Slayer 4.0</h1>
          <p className="sub-hero-lead">
            Rangkaian webinar pemanasan sebelum kompetisi utama dimulai. Detail jadwal dan
            pembicara akan diumumkan menjelang hari pelaksanaan.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="event-detail-title">
        <div className="section-inner">
          <div className="split-panel">
            <div className="poster-frame">
              <svg className="pixel-icon poster-frame-icon" width="56" height="56" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="2" width="8" height="5" fill="currentColor"/>
                <rect x="2" y="1" width="2" height="1" fill="currentColor"/>
                <rect x="3" y="3" width="2" height="2" fill="#0a0e27"/>
              </svg>
              <p>POSTER SEGERA HADIR</p>
            </div>

            <div>
              <p className="section-eyebrow">Webinar</p>
              <h2 id="event-detail-title" className="section-title">Webinar: Road to Data Slayer 4.0</h2>
              <p className="section-lead">
                Menghadirkan narasumber profesional untuk berbagi wawasan seputar penerapan data
                dan visualisasi dalam menjawab isu-isu terkini. Topik dan pembicara resmi akan
                diumumkan lebih lanjut.
              </p>

              <span className="badge-soon" style={{ marginTop: '1.5rem' }}>JADWAL SEGERA DIUMUMKAN</span>

              <p className="section-lead" style={{ marginTop: '2rem', marginInline: 0 }}>
                Sudah ikut webinarnya? Materi post-event akan tersedia di bawah ini begitu acara selesai.
              </p>

              <div className="resource-grid">
                <a href="#" className="resource-link" aria-disabled="true">
                  <span className="resource-link-icon">
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
                  <span className="badge-soon resource-link-status">SEGERA</span>
                </a>
                <a href="#" className="resource-link" aria-disabled="true">
                  <span className="resource-link-icon">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="0" width="6" height="8" fill="currentColor"/>
                      <polygon points="5,0 7,0 7,2" fill="#0a0e27"/>
                      <rect x="2" y="3" width="4" height="1" fill="#0a0e27"/>
                      <rect x="2" y="5" width="4" height="1" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Materi</span>
                  <span className="badge-soon resource-link-status">SEGERA</span>
                </a>
                <a href="#" className="resource-link" aria-disabled="true">
                  <span className="resource-link-icon">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0" y="2" width="8" height="5" fill="currentColor"/>
                      <rect x="2" y="1" width="2" height="1" fill="currentColor"/>
                      <rect x="3" y="3" width="2" height="2" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Dokumentasi</span>
                  <span className="badge-soon resource-link-status">SEGERA</span>
                </a>
                <a href="#" className="resource-link" aria-disabled="true">
                  <span className="resource-link-icon">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="2,1 2,7 7,4" fill="currentColor"/>
                    </svg>
                  </span>
                  <span>Rekaman</span>
                  <span className="badge-soon resource-link-status">SEGERA</span>
                </a>
                <a href="#" className="resource-link" aria-disabled="true">
                  <span className="resource-link-icon">
                    <svg className="pixel-icon" width="20" height="20" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="0" width="6" height="8" fill="currentColor"/>
                      <polygon points="5,0 7,0 7,2" fill="#0a0e27"/>
                      <rect x="2" y="3" width="4" height="1" fill="#0a0e27"/>
                      <rect x="2" y="5" width="4" height="1" fill="#0a0e27"/>
                    </svg>
                  </span>
                  <span>Notulensi</span>
                  <span className="badge-soon resource-link-status">SEGERA</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section cta-section section--alt" aria-labelledby="cta-event-title">
        <div className="section-inner section-inner--narrow cta-inner">
          <h2 id="cta-event-title" className="section-title">Jangan Sampai Terlewat</h2>
          <p className="section-lead">Ikuti Instagram panitia untuk info tanggal, pembicara, dan link pendaftaran webinar.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-cta btn-lg">Ikuti Info Terbaru</a>
        </div>
      </section>
    </>
  );
};
