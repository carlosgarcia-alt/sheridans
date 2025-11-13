import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-purple to-dark-purple">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <img 
                src="/sheridans-title.png" 
                alt="Sheridan's" 
                className="mx-auto h-24 lg:h-32 w-auto"
              />
            </div>
            <p className="text-xl lg:text-2xl text-neon-green glow-green">
              La historia detrás de cada trago
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            
            {/* Our Story */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple/30">
              <h2 className="text-3xl font-bold text-neon-pink mb-6">Nuestra Historia</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Desde 2023, Sheridan's nació como un bar pensado para nuestros amigos: un espacio donde la coctelería se mezcla con la espontaneidad de la calle, la vibra de la fiesta, la creatividad y la pasión. Surgimos con la intención de convertir nuestro lugar en el favorito de todos, gracias a nuestro estilo y a nuestro sabor. Hoy, llevamos esa misma experiencia directamente a tu evento.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cada cóctel que preparamos lleva nuestra esencia: autenticidad, calidad y ese toque especial que nos caracteriza.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple/30">
              <h2 className="text-3xl font-bold text-neon-green mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Romper con la coctelería tradicional a traves de nuestros sabores, definiendo una nueva propuesta con mezclas creativas, una vibra fresca y detalles que convierten cualquier evento en algo fuera de lo común.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-purple mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Sabor</h3>
                <p className="text-gray-300">Sabores originales que mezclan lo mejor de la calle con un estilo moderno y detallado.</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-purple mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Experiencia</h3>
                <p className="text-gray-300">Una barra que transforma cualquier evento en algo diferente, memorable y lleno de buena vibra.</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-purple mb-4 drop-shadow-[0_0_10px_rgba(147,51,234,0.8)]">
                  <svg className="w-12 h-12 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Estilo</h3>
                <p className="text-gray-300">Presentación, servicio y ambiente que elevan cada momento con un toque único.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <Footer />
    </div>
  );
}
