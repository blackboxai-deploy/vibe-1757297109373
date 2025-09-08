'use client';

import QRCode from '@/components/QRCode';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Planos de construcción',
    'Supervisión de obras',
    'Cálculo y presupuesto de obra',
    'Catastros',
    'Planos de división y partición',
    'Fraccionamiento horizontal'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo y Descripción */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="text-white font-bold text-xl">RA</div>
              </div>
              <div>
                <h3 className="text-2xl font-bold">RODRIGUEZ ARQUITECTOS</h3>
                <p className="text-gray-400">Estudio de Arquitectura Profesional</p>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Más de 15 años de experiencia en servicios arquitectónicos integrales. 
              Comprometidos con la calidad, innovación y satisfacción de nuestros clientes 
              en cada proyecto que emprendemos.
            </p>

            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-white mb-2">Contacto Principal</h4>
                <a 
                  href="mailto:rodriguezarquitecto@hotmail.com"
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-200 break-all"
                >
                  rodriguezarquitecto@hotmail.com
                </a>
              </div>
              
              <div>
                <p className="text-gray-400 text-sm">
                  Respuesta promedio: menos de 24 horas
                </p>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('#servicios')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-left text-sm"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navegación y QR */}
          <div className="space-y-8">
            {/* Enlaces Rápidos */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <button
                    onClick={() => scrollToSection('#inicio')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Inicio
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#servicios')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Servicios
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#nosotros')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Nosotros
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('#contacto')}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            {/* Código QR Compacto */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto QR</h4>
              <QRCode 
                size="sm"
                showDownloadButton={false}
                className="bg-white"
              />
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Información Legal */}
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} RODRIGUEZ ARQUITECTOS. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Estudio de arquitectura profesional especializado en servicios integrales de construcción.
              </p>
            </div>

            {/* Contacto Rápido */}
            <div className="text-center md:text-right">
              <div className="space-y-2">
                <p className="text-gray-400 text-sm">¿Tienes una consulta?</p>
                <a 
                  href="mailto:rodriguezarquitecto@hotmail.com"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Contactar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Información Adicional */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              RODRIGUEZ ARQUITECTOS - Servicios profesionales de arquitectura | 
              Planos de construcción | Supervisión de obras | Presupuestos | 
              Catastros | División de terrenos | Fraccionamiento horizontal
            </p>
            <p className="text-gray-600 text-xs mt-2">
              Consultas y presupuestos sin compromiso: 
              <a 
                href="mailto:rodriguezarquitecto@hotmail.com" 
                className="text-blue-400 hover:text-blue-300 ml-1"
              >
                rodriguezarquitecto@hotmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;