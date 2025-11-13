export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-1"></div>
          <div className="flex space-x-8">
            <a href="#inicio" className="text-white hover:text-neon-pink px-3 py-2 text-sm font-medium transition-colors">
              Inicio
            </a>
            <a href="#nosotros" className="text-white hover:text-neon-pink px-3 py-2 text-sm font-medium transition-colors">
              Nosotros
            </a>
            <a href="#paquetes" className="text-white hover:text-neon-pink px-3 py-2 text-sm font-medium transition-colors">
              Paquetes
            </a>
            <a href="#reservar" className="bg-gradient-to-r from-neon-pink to-purple hover:from-purple hover:to-neon-pink text-white px-4 py-2 rounded-md text-sm font-medium transition-all">
              Reservar
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
