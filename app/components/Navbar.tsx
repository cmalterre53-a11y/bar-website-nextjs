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
        <div className="flex items-center justify-between py-2">
          {/* Logo avec effet */}
          <Link
            href="/"
            className="group flex items-center gap-2 text-xl font-bold text-amber-400 hover:text-amber-300 transition-all duration-300"
          >
            <span className="relative">
              Le Barbylone
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </span>
          </Link>

          {/* Navigation Links avec effets améliorés */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollToSection('accueil')}
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-base group"
            >
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <Link
              href="/carte"
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-base group"
            >
              Carte
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <button
              onClick={() => scrollToSection('avis')}
              className="relative text-white hover:text-amber-400 transition-all duration-300 font-semibold text-base group"
            >
              Avis
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative rounded-full bg-white px-6 py-2 text-amber-900 font-bold text-base transition-all duration-300 hover:bg-amber-50 hover:scale-110 hover:shadow-2xl border-2 border-white transform"
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
