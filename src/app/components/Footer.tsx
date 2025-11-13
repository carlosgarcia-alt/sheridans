export default function Footer() {
  return (
    <footer className="bg-black/90 backdrop-blur-sm border-t border-purple/30 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Identidad */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <img 
                src="/sheridans-title.png" 
                alt="Sheridan's" 
                className="h-12 w-auto mb-2"
              />
              <p className="text-white font-medium">Barra Móvil & Coctelería</p>
              <p className="text-neon-pink text-sm italic mt-2">"Don't call it moments, call it life"</p>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-sm mb-1">Teléfono / WhatsApp:</p>
                <a href="tel:+525568840452" className="text-neon-pink hover:text-white transition-colors text-sm">
                  +52 55 6884 0452
                </a>
                <br />
                <a href="tel:+525540492681" className="text-neon-pink hover:text-white transition-colors text-sm">
                  +52 55 4049 2681
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm mb-1">Correo:</p>
                <a href="mailto:contacto@sheridans.mx" className="text-neon-pink hover:text-white transition-colors text-sm">
                  contacto@sheridans.mx
                </a>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Redes Sociales</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-neon-pink hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-neon-pink hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-2.08v5.73a3.87 3.87 0 01-3.87 3.87 3.87 3.87 0 01-3.87-3.87V2H4.08v5.73a3.87 3.87 0 01-3.87 3.87 3.87 3.87 0 01-3.87-3.87V2H-5.58v5.73a4.83 4.83 0 01-3.77 4.25 4.83 4.83 0 013.77 4.25V22h2.08v-5.73a3.87 3.87 0 013.87-3.87 3.87 3.87 0 013.87 3.87V22h2.08v-5.73a3.87 3.87 0 013.87-3.87 3.87 3.87 0 013.87 3.87V22h2.08v-5.73a4.83 4.83 0 01-3.77-4.25z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces útiles */}
          <div>
            <div className="space-y-2">
              <a href="/" className="block text-gray-300 hover:text-neon-pink transition-colors text-sm">
                Inicio
              </a>
              <a href="/menu" className="block text-gray-300 hover:text-neon-pink transition-colors text-sm">
                Menú
              </a>
              <a href="/servicios" className="block text-gray-300 hover:text-neon-pink transition-colors text-sm">
                Servicios
              </a>
              <a href="/galeria" className="block text-gray-300 hover:text-neon-pink transition-colors text-sm">
                Galería
              </a>
              <a href="/reservaciones" className="block text-gray-300 hover:text-neon-pink transition-colors text-sm">
                Reservaciones
              </a>
            </div>
          </div>

        </div>

        {/* Derechos y legal */}
        <div className="border-t border-purple/30 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Sheridans. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
