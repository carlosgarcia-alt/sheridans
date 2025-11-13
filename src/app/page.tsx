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
              
              <div className="space-y-4 max-w-2xl">
                <p className="text-2xl lg:text-3xl font-semibold text-neon-green glow-green">
                  Don't call it moments, call it life
                </p>
                
                <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                  Sheridans combina la esencia de la coctelería callejera con nuestro toque especial, donde cada trago se prepara con intención y personalidad.
                </p>
                
                <div className="text-white text-3xl font-bold">Since 2023</div>
                
                {/* Features */}
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <div className="text-neon-green text-2xl">Cócteles Únicos</div>
                  </div>
                  <div className="w-px h-12 bg-gray-400"></div>
                  <div className="text-center">
                    <div className="text-neon-pink text-2xl">Noches Inolvidables</div>
                  </div>
                  <div className="w-px h-12 bg-gray-400"></div>
                  <div className="text-center">
                    <div className="text-purple text-2xl">Experiencia Total</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Button */}
            <div className="max-w-2xl flex justify-end mt-8">
              <div className="bg-neon-pink text-white px-6 py-3 rounded-full flex items-center gap-2">
                <span>Conoce Más</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* Right Side - Empty Space */}
          <div></div>
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
