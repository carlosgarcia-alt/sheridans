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
                <div className="flex justify-center items-center gap-8">
                  <div className="text-center">
                    <div className="text-neon-green text-3xl">Cócteles Únicos</div>
                  </div>
                  <div className="w-px h-12 bg-gray-400"></div>
                  <div className="text-center">
                    <div className="text-neon-pink text-3xl">Noches Inolvidables</div>
                  </div>
                  <div className="w-px h-12 bg-gray-400"></div>
                  <div className="text-center">
                    <div className="text-purple text-3xl">Experiencia Total</div>
                  </div>
                </div>
            </div>
            
            {/* Button */}
            <div className="mt-12 text-center">
              <button className="bg-gradient-to-r from-neon-pink to-purple hover:from-purple hover:to-neon-pink text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 glow transform hover:scale-105">
                Conoce Más
              </button>
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
