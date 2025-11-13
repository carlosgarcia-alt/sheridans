'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Reservaciones() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-purple via-purple to-dark-purple">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-16 animate-fade-in-up">
            <div className="mb-6">
              <img 
                src="/sheridans-title.png" 
                alt="Sheridan's" 
                className="mx-auto h-24 lg:h-32 w-auto hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-xl lg:text-2xl text-neon-green glow-green">
              Reserva tu evento inolvidable
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 border border-purple/30 mb-16 animate-fade-in-up delay-300 hover:border-neon-pink/50 transition-all duration-300">
            <h2 className="text-3xl font-bold text-neon-pink mb-4 text-center">Formulario de Contacto</h2>
            <p className="text-center text-gray-300 mb-8 italic">
              Completa el formulario y nosotros nos comunicaremos directamente contigo para coordinar todos los detalles de tu evento y proporcionarte una cotización personalizada.
            </p>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-500">
                  <label className="block text-white font-medium mb-2">Nombre Completo</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div className="animate-fade-in delay-700">
                  <label className="block text-white font-medium mb-2">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>

              <div className="animate-fade-in delay-900">
                <label className="block text-white font-medium mb-2">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-1000">
                  <label className="block text-white font-medium mb-2">Tipo de Evento</label>
                  <select className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]">
                    <option value="">Selecciona el tipo de evento</option>
                    <option value="boda">Boda</option>
                    <option value="cumpleanos">Cumpleaños</option>
                    <option value="corporativo">Evento Corporativo</option>
                    <option value="graduacion">Graduación</option>
                    <option value="aniversario">Aniversario</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div className="animate-fade-in delay-1200">
                  <label className="block text-white font-medium mb-2">Fecha del Evento</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in delay-1000">
                  <label className="block text-white font-medium mb-2">Número de Invitados</label>
                  <input 
                    type="number" 
                    className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Ej: 50"
                  />
                </div>
                <div className="animate-fade-in delay-1200">
                  <label className="block text-white font-medium mb-2">Ubicación</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 focus:scale-[1.02]"
                    placeholder="Ciudad o dirección del evento"
                  />
                </div>
              </div>

              <div className="animate-fade-in delay-1000">
                <label className="block text-white font-medium mb-2">Mensaje Adicional</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-black/30 border border-purple/30 rounded-lg text-white placeholder-gray-400 focus:border-neon-pink focus:outline-none transition-all duration-300 resize-none focus:scale-[1.02]"
                  placeholder="Cuéntanos más detalles sobre tu evento, preferencias especiales, o cualquier pregunta que tengas..."
                ></textarea>
              </div>

              <div className="text-center animate-fade-in delay-1200">
                <button 
                  type="submit"
                  className="bg-gradient-to-r from-neon-pink to-purple hover:from-purple hover:to-neon-pink text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-neon-pink/25"
                >
                  Enviar Solicitud
                </button>
              </div>
            </form>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="bg-neon-green/20 border border-neon-green/50 rounded-2xl p-6 mb-8 text-center animate-fade-in-up">
              <div className="text-neon-green text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-white mb-2">¡Solicitud Enviada!</h3>
              <p className="text-gray-300">
                Pronto nos pondremos en contacto contigo para coordinar todos los detalles. ¡Gracias por confiar en nosotros!
              </p>
            </div>
          )}

          {/* Contact Info */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center animate-fade-in-up delay-500 hover:border-neon-green/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-neon-green text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-white mb-3">Llámanos</h3>
              <p className="text-gray-300 mb-2">+52 55 6884 0452</p>
              <p className="text-gray-300">+52 55 4049 2681</p>
            </div>
            
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-purple/30 text-center animate-fade-in-up delay-700 hover:border-neon-pink/50 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-neon-pink text-4xl mb-4">✉️</div>
              <h3 className="text-xl font-bold text-white mb-3">Escríbenos</h3>
              <p className="text-gray-300">contacto@sheridans.mx</p>
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
