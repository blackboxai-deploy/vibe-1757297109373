'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const services = [
    {
      title: 'Planos de Construcción',
      description: 'Diseño y elaboración de planos arquitectónicos completos para todo tipo de construcciones residenciales, comerciales e industriales.',
      details: [
        'Planos arquitectónicos detallados',
        'Planos estructurales',
        'Instalaciones eléctricas y sanitarias',
        'Cumplimiento normativo municipal'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/28c9e4a4-d2b9-4ef4-a99a-4b2766fb9a7d.png'
    },
    {
      title: 'Supervisión de Obras',
      description: 'Control técnico y seguimiento profesional durante todo el proceso constructivo para garantizar calidad y cumplimiento.',
      details: [
        'Control de calidad de materiales',
        'Supervisión de procesos constructivos',
        'Informes de avance de obra',
        'Coordinación con contratistas'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/31d0919d-3daa-4b94-86a0-a285537246a6.png'
    },
    {
      title: 'Cálculo y Presupuesto de Obra',
      description: 'Análisis detallado de costos, cálculo de materiales y elaboración de presupuestos precisos para tu proyecto.',
      details: [
        'Cómputo métrico detallado',
        'Análisis de precios unitarios',
        'Cronograma de obra',
        'Control de costos durante ejecución'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bba26431-eae6-471a-b27a-baed951beb40.png'
    },
    {
      title: 'Catastros',
      description: 'Levantamientos topográficos, mediciones de terrenos y elaboración de documentación catastral oficial.',
      details: [
        'Levantamiento topográfico',
        'Medición y delimitación de terrenos',
        'Documentación catastral',
        'Gestión ante organismos oficiales'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9431672-99f5-4f23-9f2e-f40e9ef7025f.png'
    },
    {
      title: 'Planos de División y Partición',
      description: 'Diseño técnico para división de terrenos y propiedades con toda la documentación legal requerida.',
      details: [
        'Análisis de factibilidad de división',
        'Planos de subdivisión',
        'Cumplimiento normativo urbano',
        'Documentación para registro'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8690674d-8ec9-4596-8ea6-c965e1531f73.png'
    },
    {
      title: 'Fraccionamiento Horizontal',
      description: 'Servicios especializados en fraccionamiento de edificios, condominios y desarrollos inmobiliarios.',
      details: [
        'Estudio de factibilidad técnica',
        'Planos de fraccionamiento',
        'Reglamento de copropiedad',
        'Trámites legales completos'
      ],
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/05ca76ac-48a1-4001-9593-08bd88c417a5.png'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos servicios integrales de arquitectura y construcción con más de años de experiencia 
            en el sector, garantizando calidad y profesionalismo en cada proyecto.
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600 text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={scrollToContact}
                  variant="outline" 
                  className="w-full border-blue-700 text-blue-700 hover:bg-blue-50 transition-colors"
                >
                  Consultar
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Necesitas un servicio personalizado?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Cada proyecto es único. Contactanos para una consulta personalizada y 
            descubre cómo podemos ayudarte a hacer realidad tu proyecto arquitectónico.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Solicitar Consulta Gratuita
            </Button>
            <a 
              href="mailto:rodriguezarquitecto@hotmail.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-blue-700 bg-white border-2 border-blue-700 rounded-xl hover:bg-blue-50 transition-all duration-300"
            >
              Enviar Email Directo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;