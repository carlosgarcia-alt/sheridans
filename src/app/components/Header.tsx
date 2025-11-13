'use client';
import { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1"></div>
          <div className="flex space-x-2 sm:space-x-4 lg:space-x-8">
            <a href="/" className="text-white hover:text-neon-pink px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              Inicio
            </a>
            <a href="/nosotros" className="text-white hover:text-neon-pink px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors">
              Nosotros
            </a>
            
            {/* Servicios Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
                className="text-white hover:text-neon-pink px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-colors flex items-center gap-1"
              >
                Servicios
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isDropdownOpen && (
                <div
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                  className="absolute top-full left-0 mt-1 w-40 bg-black/90 backdrop-blur-sm border border-purple/30 rounded-md shadow-lg"
                >
                  <a href="/menu" className="block text-white hover:text-neon-pink hover:bg-purple/20 px-4 py-2 text-xs sm:text-sm transition-colors">
                    Menú
                  </a>
                  <a href="/paquetes" className="block text-white hover:text-neon-pink hover:bg-purple/20 px-4 py-2 text-xs sm:text-sm transition-colors">
                    Paquetes
                  </a>
                  <a href="/galeria" className="block text-white hover:text-neon-pink hover:bg-purple/20 px-4 py-2 text-xs sm:text-sm transition-colors">
                    Galería
                  </a>
                </div>
              )}
            </div>
            
            <a href="/reservaciones" className="bg-gradient-to-r from-neon-pink to-purple hover:from-purple hover:to-neon-pink text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-medium transition-all">
              Reservaciones
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
