'use client';

import { Card, CardContent } from '@/components/ui/card';

export function AboutSection() {
  const stats = [
    {
      number: '15+',
      label: 'Años de Experiencia',
      description: 'En el sector arquitectónico'
    },
    {
      number: '200+',
      label: 'Proyectos Completados',
      description: 'Exitosos y entregados'
    },
    {
      number: '98%',
      label: 'Satisfacción del Cliente',
      description: 'Clientes recomiendan nuestros servicios'
    },
    {
      number: '24h',
      label: 'Respuesta Promedio',
      description: 'A consultas y presupuestos'
    }
  ];

  const values = [
    {
      title: 'Calidad Profesional',
      description: 'Aplicamos los más altos estándares de calidad en cada proyecto, utilizando las mejores prácticas y tecnologías del sector.',
      icon: '🏗️'
    },
    {
      title: 'Cumplimiento Normativo',
      description: 'Garantizamos el cumplimiento total de todas las normativas municipales, regionales y nacionales vigentes.',
      icon: '📋'
    },
    {
      title: 'Atención Personalizada',
      description: 'Cada cliente recibe atención individualizada y seguimiento personalizado durante todo el proceso del proyecto.',
      icon: '🤝'
    },
    {
      title: 'Experiencia Comprobada',
      description: 'Más de 15 años de experiencia nos respaldan en la realización exitosa de proyectos de toda envergadura.',
      icon: '⭐'
    }
  ];

  return (
    <section id="nosotros" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre RODRIGUEZ ARQUITECTOS
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos un estudio de arquitectura con una sólida trayectoria en el sector, 
            comprometidos con la excelencia y la satisfacción de nuestros clientes.
          </p>
        </div>

        {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Imagen del Estudio */}
          <div className="relative">
            <img
              src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ac75f9ae-c4c9-4d6a-9d70-f40c44bad292.png"
              alt="Oficina moderna de RODRIGUEZ ARQUITECTOS con equipo profesional trabajando en proyectos"
              className="w-full h-full object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl"></div>
          </div>

          {/* Contenido Textual */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              Experiencia que Construye Confianza
            </h3>
            
            <div className="prose prose-lg text-gray-700 space-y-4">
              <p>
                En <strong>RODRIGUEZ ARQUITECTOS</strong> combinamos experiencia, innovación y 
                compromiso para ofrecer servicios arquitectónicos integrales de la más alta calidad. 
                Nuestro equipo de profesionales especializados trabaja con dedicación en cada proyecto, 
                desde la conceptualización inicial hasta la entrega final.
              </p>
              
              <p>
                Nos especializamos en brindar soluciones arquitectónicas completas que incluyen diseño, 
                planificación, supervisión y gestión de proyectos. Nuestra experiencia abarca desde 
                proyectos residenciales hasta desarrollos comerciales e industriales de gran envergadura.
              </p>

              <p>
                La confianza de nuestros clientes se basa en nuestra capacidad demostrada para entregar 
                proyectos en tiempo y forma, cumpliendo con los más altos estándares de calidad y 
                manteniendo una comunicación fluida durante todo el proceso.
              </p>
            </div>

            {/* Contacto Directo */}
            <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-2">Contacto Directo</h4>
              <a 
                href="mailto:rodriguezarquitecto@hotmail.com"
                className="text-blue-700 hover:text-blue-800 font-medium transition-colors duration-200"
              >
                rodriguezarquitecto@hotmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-lg bg-white">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Valores y Metodología */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los pilares fundamentales que guían nuestro trabajo y garantizan 
              el éxito de cada proyecto que emprendemos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-4xl">{value.icon}</div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h4>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;