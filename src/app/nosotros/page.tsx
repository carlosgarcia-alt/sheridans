import Header from '../components/Header';

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-purple to-dark-purple">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              <span className="text-neon-pink glow-pink">Nosotros</span>
            </h1>
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
                Desde 2023, Sheridan's ha sido más que un bar - es un espacio donde la coctelería callejera 
                se encuentra con la creatividad y la pasión. Nacimos con la visión de crear experiencias 
                únicas que van más allá de una simple bebida.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Cada cóctel que preparamos lleva nuestra esencia: autenticidad, calidad y ese toque especial 
                que hace que cada momento se convierta en un recuerdo inolvidable.
              </p>
            </div>

            {/* Our Mission */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple/30">
              <h2 className="text-3xl font-bold text-neon-green mb-6">Nuestra Misión</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Transformar cada visita en una experiencia memorable, donde la calidad de nuestros cócteles 
                se combina con un ambiente único que celebra la vida, la amistad y los buenos momentos. 
                No solo servimos bebidas, creamos conexiones.
              </p>
            </div>

            {/* Values */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-neon-pink text-4xl mb-4">🍸</div>
                <h3 className="text-xl font-bold text-white mb-3">Calidad</h3>
                <p className="text-gray-300">Ingredientes premium y técnicas artesanales en cada preparación</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-neon-green text-4xl mb-4">✨</div>
                <h3 className="text-xl font-bold text-white mb-3">Creatividad</h3>
                <p className="text-gray-300">Innovación constante en sabores y presentaciones únicas</p>
              </div>
              
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center">
                <div className="text-purple text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold text-white mb-3">Experiencia</h3>
                <p className="text-gray-300">Cada visita es una celebración de la vida y los buenos momentos</p>
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
    </div>
  );
}
