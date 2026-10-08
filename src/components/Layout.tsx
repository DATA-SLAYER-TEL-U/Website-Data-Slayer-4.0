import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Scanlines } from './Scanlines';
import { ScrollToTop } from './ScrollToTop';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Layout: React.FC = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);
  
  useScrollReveal();

  // Mencegah flash konten dengan mengaktifkan loading secara sinkron
  if (location.pathname !== currentPath) {
    setCurrentPath(location.pathname);
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 800); // Durasi loading screen 800ms
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  return (
    <>
      <Scanlines />
      <ScrollToTop />
      
      {/* Arcade Loading Screen Overlay */}
      <div 
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void ${
          isLoading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none transition-opacity duration-500'
        }`}
      >
        <div className={`flex flex-col items-center transition-transform duration-500 ${isLoading ? 'scale-100' : 'scale-95'}`}>
          <img src="/logo.png" alt="Data Slayer" className="h-16 md:h-20 mb-8 animate-pulse drop-shadow-xl" />
          <span className="font-pixel text-lg md:text-xl text-cyan mb-5 tracking-widest drop-shadow-sm blink">LOADING...</span>
          <div className="w-56 h-1.5 bg-line rounded-full overflow-hidden shadow-[inset_0_1px_3px_rgba(0,0,0,0.1)]">
            <div 
              className="h-full bg-cyan rounded-full" 
              style={{ 
                width: isLoading ? '100%' : '0%',
                animation: isLoading ? 'fillBar 0.8s ease-out forwards' : 'none' 
              }}
            />
          </div>
        </div>
      </div>

      <a href="#main" className="skip-link">Lewati ke konten</a>
      <Navbar />
      <main id="main" key={location.pathname} className={`transition-opacity duration-500 delay-100 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
