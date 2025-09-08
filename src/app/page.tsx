import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header con navegación sticky */}
      <Header />
      
      {/* Hero Section - Sección principal */}
      <HeroSection />
      
      {/* Services Section - Servicios profesionales */}
      <ServicesSection />
      
      {/* About Section - Sobre nosotros */}
      <AboutSection />
      
      {/* Contact Section - Contacto con QR */}
      <ContactSection />
      
      {/* Footer - Pie de página */}
      <Footer />
    </main>
  );
}