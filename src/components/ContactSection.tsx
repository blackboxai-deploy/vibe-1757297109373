'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import QRCode from '@/components/QRCode';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    'Planos de construcción',
    'Supervisión de obras',
    'Cálculo y presupuesto de obra',
    'Catastros',
    'Planos de división y partición',
    'Fraccionamiento horizontal',
    'Consulta general'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear el cuerpo del email
    const subject = `Consulta de ${formData.name} - ${formData.service}`;
    const body = `
Nombre: ${formData.name}
Email: ${formData.email}
Teléfono: ${formData.phone}
Servicio de interés: ${formData.service}

Mensaje:
${formData.message}

---
Enviado desde la página web de RODRIGUEZ ARQUITECTOS
    `.trim();

    // Crear el enlace mailto
    const mailtoUrl = `mailto:rodriguezarquitecto@hotmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Abrir el cliente de correo
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Título de la Sección */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contactanos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes un proyecto en mente? Contáctanos para una consulta gratuita. 
            Estamos aquí para ayudarte a hacer realidad tu proyecto arquitectónico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl font-bold text-gray-900">
                  Solicitar Información
                </CardTitle>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Información Personal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre completo"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Tu número de teléfono"
                        className="border-gray-300 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Servicio de interés *</Label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Mensaje */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe tu proyecto o consulta en detalle..."
                      rows={6}
                      className="border-gray-300 focus:border-blue-500"
                    />
                  </div>

                  {/* Botón de Envío */}
                  <Button 
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Enviar Consulta
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Al enviar este formulario, se abrirá tu cliente de correo con los datos prellenados
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Información de Contacto y Código QR */}
          <div className="space-y-8">
            {/* Información de Contacto */}
            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">
                  Información de Contacto
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Email Principal</h4>
                  <a 
                    href="mailto:rodriguezarquitecto@hotmail.com"
                    className="text-blue-700 hover:text-blue-800 font-medium transition-colors duration-200 break-all"
                  >
                    rodriguezarquitecto@hotmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Horarios de Atención</h4>
                  <p className="text-gray-700">
                    Lunes a Viernes: 8:00 - 18:00<br />
                    Sábados: 9:00 - 13:00<br />
                    <span className="text-sm text-gray-500">Consultas por email 24/7</span>
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Respuesta Promedio</h4>
                  <p className="text-gray-700">
                    Menos de 24 horas en días hábiles
                  </p>
                </div>

                <div className="pt-4 border-t">
                  <Button 
                    asChild
                    variant="outline" 
                    className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    <a href="mailto:rodriguezarquitecto@hotmail.com">
                      Enviar Email Directo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Código QR */}
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Código QR de Contacto
              </h3>
              <QRCode 
                size="md"
                showDownloadButton={true}
                className="mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Call to Action Adicional */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Prefieres una llamada?
          </h3>
          <p className="text-gray-600 mb-6">
            Si prefieres hablar directamente, también puedes contactarnos por email 
            y coordinaremos una llamada telefónica en el horario que más te convenga.
          </p>
          <a 
            href="mailto:rodriguezarquitecto@hotmail.com?subject=Solicitud de llamada telefónica&body=Hola, me gustaría coordinar una llamada telefónica para discutir mi proyecto. Por favor contáctenme para coordinar un horario conveniente.%0A%0AMis datos de contacto:%0ANombre:%0ATeléfono:%0AHorario preferido:"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-700 text-white font-semibold rounded-xl hover:bg-blue-800 transition-colors duration-300"
          >
            Solicitar Llamada
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;