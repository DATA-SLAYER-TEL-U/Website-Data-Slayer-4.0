import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className={`site-header ${isOpen ? 'is-open' : ''}`} id="top">
      <div className="header-inner">
        <Link to="/" className="logo" aria-label="Data Slayer 4.0 — Beranda" onClick={closeMenu}>
          <span className="logo-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
              <path d="M12 12v9M12 12L2 7M12 12l10-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/>
            </svg>
          </span>
          <span>DATA<span className="logo-accent">SLAYER</span></span>
        </Link>

        <nav className="main-nav" aria-label="Navigasi utama">
          <NavLink to="/" end className={({ isActive }) => isActive ? 'is-active' : ''}>
            Beranda
          </NavLink>
          <NavLink to="/mlc" className={({ isActive }) => isActive ? 'is-active' : ''}>
            MLC
          </NavLink>
          <NavLink to="/dac" className={({ isActive }) => isActive ? 'is-active' : ''}>
            DAC
          </NavLink>
          <NavLink to="/event" className={({ isActive }) => isActive ? 'is-active' : ''}>
            Event
          </NavLink>
          <NavLink to="/shorten" className={({ isActive }) => isActive ? 'is-active' : ''}>
            Shorten
          </NavLink>
        </nav>

        <a href="/#daftar" className="btn btn-cta header-cta">Daftar Sekarang</a>

        <button
          className="nav-toggle"
          id="navToggle"
          aria-expanded={isOpen}
          aria-controls="mobileNav"
          aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav id="mobileNav" className="mobile-nav" aria-label="Navigasi mobile" hidden={!isOpen}>
        <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>
          Beranda
        </NavLink>
        <NavLink to="/mlc" onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>
          MLC
        </NavLink>
        <NavLink to="/dac" onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>
          DAC
        </NavLink>
        <NavLink to="/event" onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>
          Event
        </NavLink>
        <NavLink to="/shorten" onClick={closeMenu} className={({ isActive }) => isActive ? 'is-active' : ''}>
          Shorten
        </NavLink>
        <a href="/#daftar" className="btn btn-cta" onClick={closeMenu}>Daftar Sekarang</a>
      </nav>
    </header>
  );
};
