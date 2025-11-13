import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-purple to-dark-purple">
      <Header />
      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 pt-20 sm:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-screen">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl sm:text-6xl lg:text-8xl leading-tight -ml-4 sm:-ml-12 animate-slide-in-left">
                <img 
                  src="/sheridans-title.png" 
                  alt="Sheridans" 
                  className="h-16 sm:h-20 lg:h-32 object-contain hover:scale-105 transition-transform duration-300"
                />
              </h1>
              
              <div className="space-y-3 sm:space-y-4 max-w-2xl">
                <div className="text-left mb-4 animate-fade-in delay-300">
                  <p className="text-lg sm:text-xl lg:text-2xl font-light text-neon-green glow-green italic">
                    "Don't call it moments, call it life"
                  </p>
                </div>
                
                <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed animate-fade-in delay-500">
                  Sheridans combina la esencia de la coctelería callejera con nuestro toque especial, donde cada trago se prepara con intención y personalidad.
                </p>
                
                <div className="text-white text-2xl sm:text-3xl font-bold animate-fade-in delay-700">Since 2023</div>
                
                {/* Features */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in delay-1000">
                  <div className="text-center sm:text-left hover:scale-105 transition-transform duration-200">
                    <div className="text-neon-green text-lg sm:text-2xl">Cócteles Únicos</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-gray-400"></div>
                  <div className="text-center sm:text-left hover:scale-105 transition-transform duration-200">
                    <div className="text-neon-pink text-lg sm:text-2xl">Eventos Inolvidables</div>
                  </div>
                  <div className="hidden sm:block w-px h-12 bg-gray-400"></div>
                  <div className="text-center sm:text-left hover:scale-105 transition-transform duration-200">
                    <div className="text-purple text-lg sm:text-2xl">Experiencia Total</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="max-w-2xl flex justify-center sm:justify-end mt-6 sm:mt-8 animate-fade-in delay-1200">
              <a href="/nosotros" className="bg-transparent border-2 border-neon-pink text-neon-pink px-6 py-3 rounded-full flex items-center gap-2 hover:bg-neon-pink hover:text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-pink/25">
                <span>Conoce Más</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Side - Empty Space */}
          <div></div>
        </div>
      </div>
      
      {/* Background Image Overlay */}
      <div 
        className="fixed inset-0 -z-10 opacity-20 transition-opacity duration-1000"
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
