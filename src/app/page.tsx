import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-purple to-dark-purple">
      <Header />
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="text-neon-pink glow-pink">Sheridan's</span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-2xl lg:text-3xl font-semibold text-neon-green glow-green">
                  Don't call it moments, call it life
                </p>
                
                <p className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Sheridans combina la esencia de la coctelería callejera con nuestro toque especial, donde cada trago se prepara con intención y personalidad.
                </p>
              </div>
              
              <button className="bg-gradient-to-r from-neon-pink to-purple hover:from-purple hover:to-neon-pink text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 glow transform hover:scale-105">
                Reservar Fecha
              </button>
            </div>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <div className="text-neon-green text-3xl font-bold">50+</div>
                <div className="text-gray-400">Eventos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-neon-pink text-3xl font-bold">100%</div>
                <div className="text-gray-400">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-purple text-3xl font-bold">24/7</div>
                <div className="text-gray-400">Disponibilidad</div>
              </div>
            </div>
          </div>
          
          {/* Right Animation */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Mojito Glass */}
              <div className="relative w-32 h-48 mx-auto">
                {/* Glass */}
                <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-transparent via-green-400/20 to-green-300/30 rounded-b-3xl border-2 border-neon-green/50 glow-green animate-pulse">
                  {/* Liquid */}
                  <div className="absolute bottom-2 left-2 right-2 h-32 bg-gradient-to-t from-green-400/40 to-green-300/60 rounded-b-3xl animate-bounce" style={{animationDuration: '3s'}}></div>
                  
                  {/* Bubbles */}
                  <div className="absolute bottom-8 left-6 w-2 h-2 bg-white/60 rounded-full animate-ping" style={{animationDelay: '0s'}}></div>
                  <div className="absolute bottom-12 right-8 w-1 h-1 bg-white/40 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                  <div className="absolute bottom-16 left-10 w-1.5 h-1.5 bg-white/50 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                </div>
                
                {/* Mint Leaves */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-4 h-6 bg-green-400 rounded-full opacity-80 animate-bounce" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-4 bg-green-500 rounded-full opacity-70 -mt-2 ml-2 animate-bounce" style={{animationDelay: '1.5s'}}></div>
                </div>
                
                {/* Straw */}
                <div className="absolute top-0 right-6 w-1 h-20 bg-gradient-to-b from-neon-pink to-purple rounded-full glow-pink"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-8 text-neon-green text-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '4s'}}>🍃</div>
              <div className="absolute -top-2 -right-6 text-neon-pink text-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '3s'}}>✨</div>
              <div className="absolute -bottom-4 -left-4 text-purple text-lg animate-bounce" style={{animationDelay: '1s', animationDuration: '5s'}}>🧊</div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-green/20 via-transparent to-neon-pink/20 rounded-full blur-xl animate-pulse"></div>
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
