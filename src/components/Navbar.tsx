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
        <Link to="/" className="logo" aria-label="Data Slayer 4.0: Beranda" onClick={closeMenu}>
          <img src="/logo.png" alt="Data Slayer Logo" className="h-8 md:h-9 w-auto object-contain" />
        </Link>

        <nav className="main-nav" aria-label="Navigasi utama">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-all duration-200 text-sm ${
                isActive
                  ? 'text-cyan bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] font-semibold'
                  : 'text-ink-dim hover:text-ink hover:bg-white/5'
              }`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/mlc"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-all duration-200 text-sm ${
                isActive
                  ? 'text-cyan bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] font-semibold'
                  : 'text-ink-dim hover:text-ink hover:bg-white/5'
              }`
            }
          >
            MLC
          </NavLink>
          <NavLink
            to="/dac"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-all duration-200 text-sm ${
                isActive
                  ? 'text-cyan bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] font-semibold'
                  : 'text-ink-dim hover:text-ink hover:bg-white/5'
              }`
            }
          >
            DAC
          </NavLink>
          <NavLink
            to="/event"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-all duration-200 text-sm ${
                isActive
                  ? 'text-cyan bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] font-semibold'
                  : 'text-ink-dim hover:text-ink hover:bg-white/5'
              }`
            }
          >
            Event
          </NavLink>
          {/* <NavLink
            to="/shorten"
            className={({ isActive }) =>
              `relative px-4 py-2 rounded-full transition-all duration-200 text-sm ${
                isActive
                  ? 'text-cyan bg-cyan/15 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)] font-semibold'
                  : 'text-ink-dim hover:text-ink hover:bg-white/5'
              }`
            }
          >
            Shorten
          </NavLink> */}
        </nav>

        <a
          href="/#daftar"
          className="hidden min-[900px]:inline-flex items-center justify-center rounded-full px-6 py-2.5 font-body text-xs md:text-sm font-bold text-ink bg-gradient-to-r from-panel-2 to-panel shadow-[0_0_16px_rgba(255,255,255,0.4)] hover:shadow-[0_0_24px_rgba(255,255,255,0.7)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap"
        >
          Daftar Sekarang
        </a>

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
        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive ? 'text-cyan bg-cyan/10 pl-5 font-semibold' : 'text-ink-dim hover:text-ink hover:bg-white/5'
            }`
          }
        >
          Beranda
        </NavLink>
        <NavLink
          to="/mlc"
          onClick={closeMenu}
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive ? 'text-cyan bg-cyan/10 pl-5 font-semibold' : 'text-ink-dim hover:text-ink hover:bg-white/5'
            }`
          }
        >
          MLC
        </NavLink>
        <NavLink
          to="/dac"
          onClick={closeMenu}
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive ? 'text-cyan bg-cyan/10 pl-5 font-semibold' : 'text-ink-dim hover:text-ink hover:bg-white/5'
            }`
          }
        >
          DAC
        </NavLink>
        <NavLink
          to="/event"
          onClick={closeMenu}
          className={({ isActive }) =>
            `p-3 rounded-xl transition-all duration-200 ${
              isActive ? 'text-cyan bg-cyan/10 pl-5 font-semibold' : 'text-ink-dim hover:text-ink hover:bg-white/5'
            }`
          }
        >
          Event
        </NavLink>
        <a
          href="/#daftar"
          className="flex items-center justify-center rounded-xl mt-3 py-2.5 px-4 font-body text-sm font-bold text-ink bg-gradient-to-r from-panel-2 to-panel shadow-[0_0_14px_rgba(255,255,255,0.4)] hover:shadow-[0_0_24px_rgba(255,255,255,0.7)] active:translate-y-0.5 transition-all duration-200 text-center"
          onClick={closeMenu}
        >
          Daftar Sekarang
        </a>
      </nav>
    </header>
  );
};
