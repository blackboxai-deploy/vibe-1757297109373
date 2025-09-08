import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RODRIGUEZ ARQUITECTOS - Estudio de Arquitectura Profesional',
  description: 'RODRIGUEZ ARQUITECTOS ofrece servicios profesionales de arquitectura: planos de construcción, supervisión de obras, cálculo y presupuesto, catastros, planos de división y fraccionamiento horizontal. Contacto: rodriguezarquitecto@hotmail.com',
  keywords: 'arquitecto, planos construcción, supervisión obras, presupuesto obra, catastros, fraccionamiento horizontal, división terrenos, arquitectura profesional',
  authors: [{ name: 'RODRIGUEZ ARQUITECTOS', url: 'mailto:rodriguezarquitecto@hotmail.com' }],
  creator: 'RODRIGUEZ ARQUITECTOS',
  publisher: 'RODRIGUEZ ARQUITECTOS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'RODRIGUEZ ARQUITECTOS - Estudio de Arquitectura Profesional',
    description: 'Servicios profesionales de arquitectura: planos, supervisión de obras, presupuestos, catastros y fraccionamiento horizontal.',
    type: 'website',
    locale: 'es_ES',
    siteName: 'RODRIGUEZ ARQUITECTOS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RODRIGUEZ ARQUITECTOS - Estudio de Arquitectura Profesional',
    description: 'Servicios profesionales de arquitectura: planos, supervisión de obras, presupuestos, catastros y fraccionamiento horizontal.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'rodriguez-arquitectos-verification',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <meta name="contact" content="rodriguezarquitecto@hotmail.com" />
        <meta name="business-type" content="Arquitectura y Construcción" />
        <meta name="geo.region" content="ES" />
        <meta name="geo.placename" content="España" />
      </head>
      <body className={`${inter.className} antialiased min-h-screen bg-gray-50`}>
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}