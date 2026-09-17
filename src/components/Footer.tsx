import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="logo logo--footer">DATA<span className="logo-accent">SLAYER</span> 4.0</span>
          <p>Kompetisi Machine Learning &amp; Dashboard Analytics oleh HMSD Telkom University Purwokerto.</p>
        </div>
        <div className="footer-links">
          <p className="footer-heading">Navigasi</p>
          <Link to="/">Beranda</Link>
          <Link to="/mlc">MLC</Link>
          <Link to="/dac">DAC</Link>
          <Link to="/event">Event</Link>
          <Link to="/shorten">Shorten Link</Link>
        </div>
        <div className="footer-contact">
          <p>Kontak Panitia</p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg className="pixel-icon" width="16" height="16" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="0" width="8" height="8" fill="currentColor"/>
                <rect x="2" y="2" width="4" height="4" fill="#0a0e27"/>
                <rect x="3" y="3" width="2" height="2" fill="currentColor"/>
                <rect x="6" y="1" width="1" height="1" fill="#0a0e27"/>
              </svg>
            </a>
            <a href="mailto:dataslayer.tup@gmail.com" aria-label="Email">
              <svg className="pixel-icon" width="16" height="16" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                <rect x="0" y="1" width="8" height="6" fill="currentColor"/>
                <polygon points="0,1 4,4.5 8,1" fill="#0a0e27"/>
              </svg>
            </a>
          </div>
          <a href="mailto:dataslayer.tup@gmail.com">dataslayer.tup@gmail.com</a>
        </div>
      </div>
      <p className="footer-copy">© 2027 Data Slayer 4.0. GAME OVER? INSERT COIN.</p>
    </footer>
  );
};
