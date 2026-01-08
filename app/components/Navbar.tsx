'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    // Si on n'est pas sur la page d'accueil, rediriger vers l'accueil avec l'ancre
    if (window.location.pathname !== '/') {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 ${
        isScrolled
          ? 'bg-gray-900/98 backdrop-blur-md shadow-2xl border-amber-500/50'
          : 'bg-gray-900/80 backdrop-blur-sm border-amber-500/30'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between py-4">
          {/* Logo avec effet */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-2xl font-bold text-amber-400 hover:text-amber-300 transition-all duration-300"
          >
            <span className="relative">
              Le Barbylone
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
            <svg
              className="h-6 w-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </Link>

          {/* Navigation Links avec effets améliorés */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('accueil')}
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-lg group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              href="/carte"
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-lg group"
            >
              Carte
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => scrollToSection('avis')}
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-lg group"
            >
              Avis
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative rounded-full bg-white px-8 py-3 text-amber-900 font-bold text-lg transition-all duration-300 hover:bg-amber-50 hover:scale-110 hover:shadow-2xl border-2 border-white transform"
            >
              <span className="flex items-center gap-2">
                Contact
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
