import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Scanlines } from './Scanlines';
import { ScrollToTop } from './ScrollToTop';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Layout: React.FC = () => {
  const location = useLocation();
  useScrollReveal();

  return (
    <>
      <Scanlines />
      <ScrollToTop />
      <a href="#main" className="skip-link">Lewati ke konten</a>
      <Navbar />
      <main id="main" key={location.pathname}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
