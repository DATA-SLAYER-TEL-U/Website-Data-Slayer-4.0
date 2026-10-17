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
              title="Instagram @dataslayer.tup"
              className="group w-11 h-11 rounded-xl bg-panel-2 border border-line hover:border-[#e8a2d3] flex items-center justify-center text-ink hover:text-[#a23b89] shadow-[0_4px_12px_rgba(110,120,160,0.12)] hover:shadow-[0_6px_16px_rgba(232,162,211,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="mailto:dataslayer.tup@gmail.com"
              aria-label="Email Panitia Data Slayer"
              title="Email dataslayer.tup@gmail.com"
              className="group w-11 h-11 rounded-xl bg-panel-2 border border-line hover:border-[#79aee5] flex items-center justify-center text-ink hover:text-[#0369a1] shadow-[0_4px_12px_rgba(110,120,160,0.12)] hover:shadow-[0_6px_16px_rgba(121,174,229,0.35)] transition-all duration-200 hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
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
