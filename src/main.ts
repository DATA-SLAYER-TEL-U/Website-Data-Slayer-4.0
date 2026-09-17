import './main.css';
import { initCountdown } from './lib/countdown';
import { initMobileNav, initActiveNav } from './lib/nav';
import { initFaq } from './lib/faq';
import { initScrollReveal } from './lib/reveal';
import { initShortenForm } from './lib/shorten';

document.addEventListener('DOMContentLoaded', () => {
  initCountdown();
  initMobileNav();
  initActiveNav();
  initFaq();
  initScrollReveal();
  initShortenForm();
});
