'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.querySelector('#servicios');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-20 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Logo Grande */}
          <div className="flex justify-center mb-8">
            <div className="w-24 h-24 bg-blue-700 rounded-2xl flex items-center justify-center shadow-2xl">
              <div className="text-white font-bold text-4xl">RA</div>
            </div>
          </div>

          {/* Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            RODRIGUEZ
            <span className="block text-blue-700">ARQUITECTOS</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            Estudio de arquitectura profesional especializado en diseño, construcción y servicios técnicos integrales
          </p>

          {/* Servicios Principales */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-700 font-medium">
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              Planos de Construcción
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              Supervisión de Obras
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              Presupuestos
            </div>
            <div className="bg-white px-4 py-2 rounded-full shadow-sm border">
              Catastros
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Presupuesto
            </Button>
            
            <Button
              onClick={scrollToServices}
              variant="outline"
              size="lg"
              className="border-2 border-blue-700 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
            >
              Ver Servicios
            </Button>
          </div>

          {/* Información de Contacto */}
          <div className="pt-8 space-y-2">
            <p className="text-gray-600">
              ¿Tienes un proyecto en mente?
            </p>
            <a 
              href="mailto:rodriguezarquitecto@hotmail.com"
              className="text-blue-700 hover:text-blue-800 font-medium text-lg transition-colors duration-200"
            >
              rodriguezarquitecto@hotmail.com
            </a>
          </div>
        </div>

        {/* Imagen de Fondo Decorativa */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/cd9fb5f2-32b4-47b5-959f-20a3beaa798a.png" 
            alt="Planos arquitectónicos y diseños técnicos de fondo" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToServices}
          className="w-8 h-8 border-2 border-blue-700 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition-colors duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;