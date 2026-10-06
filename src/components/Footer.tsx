import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-line mt-20 pt-16 pb-12 px-5 bg-void">
      <div className="max-w-[68rem] mx-auto grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10">
        <div>
          <img src="/logo.png" alt="Data Slayer Logo" className="h-10 md:h-12 w-auto object-contain mb-3" />
          <p className="mt-3.5 text-ink-dim text-sm max-w-[34ch] leading-relaxed">
            Kompetisi Machine Learning &amp; Dashboard Analytics oleh HMSD Telkom University Purwokerto.
          </p>
        </div>

        <div>
          <p className="font-pixel text-[0.55rem] text-ink-dim tracking-wider uppercase mb-4">Navigasi</p>
          <div className="flex flex-col gap-2.5 text-sm text-ink-dim">
            <Link to="/" className="hover:text-cyan transition-colors">Beranda</Link>
            <Link to="/mlc" className="hover:text-cyan transition-colors">MLC</Link>
            <Link to="/dac" className="hover:text-cyan transition-colors">DAC</Link>
            <Link to="/event" className="hover:text-cyan transition-colors">Event</Link>
            {/* <Link to="/shorten" className="hover:text-cyan transition-colors">Shorten Link</Link> */}
          </div>
        </div>

        <div>
          <p className="font-pixel text-[0.55rem] text-ink-dim tracking-wider uppercase mb-4">Kontak Panitia</p>
          <div className="flex items-center gap-3 mb-4">
            <a
              href="https://www.instagram.com/dataslayer.tup?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Resmi Data Slayer"
              className="w-11 h-11 rounded-lg border border-line flex items-center justify-center text-ink-dim hover:text-cyan hover:border-cyan transition-all"
            >
              <svg className="pixel-icon" width="18" height="18" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="2" y="2" width="4" height="4" fill="#0a0e27"/>
                <rect x="3" y="3" width="2" height="2" fill="currentColor"/>
                <rect x="6" y="1" width="1" height="1" fill="#0a0e27"/>
              </svg>
            </a>
            <a
              href="mailto:dataslayer.tup@gmail.com"
              aria-label="Email Panitia Data Slayer"
              className="w-11 h-11 rounded-lg border border-line flex items-center justify-center text-ink-dim hover:text-cyan hover:border-cyan transition-all"
            >
              <svg className="pixel-icon" width="18" height="18" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="1" width="8" height="6" fill="currentColor"/>
                <polygon points="0,1 4,4.5 8,1" fill="#0a0e27"/>
              </svg>
            </a>
          </div>
          <a
            href="mailto:dataslayer.tup@gmail.com"
            className="text-xs text-ink-dim hover:text-cyan transition-colors block break-all"
          >
            dataslayer.tup@gmail.com
          </a>
        </div>
      </div>

      <p className="mt-14 pt-8 border-t border-white/5 text-center font-pixel text-[0.55rem] text-ink-dim/60 tracking-wider">
        © 2027 Data Slayer 4.0. GAME OVER? INSERT COIN.
      </p>
    </footer>
  );
};
