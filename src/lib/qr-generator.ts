import * as QRCode from 'qrcode';

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  website?: string;
  organization: string;
  services: string[];
}

/**
 * Genera un código QR en formato vCard para información de contacto
 */
export const generateContactQR = async (contactInfo: ContactInfo): Promise<string> => {
  // Crear vCard format para compatibilidad con dispositivos móviles
  const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.organization}
EMAIL:${contactInfo.email}
${contactInfo.phone ? `TEL:${contactInfo.phone}` : ''}
${contactInfo.website ? `URL:${contactInfo.website}` : ''}
NOTE:Servicios: ${contactInfo.services.join(', ')}
END:VCARD`;

  try {
    const qrCodeDataUrl = await QRCode.toDataURL(vCard, {
      errorCorrectionLevel: 'M',
      margin: 1,
      color: {
        dark: '#1e40af', // Azul profesional
        light: '#ffffff'
      },
      width: 256
    });
    
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generando código QR:', error);
    throw error;
  }
};

/**
 * Genera un código QR simple con texto personalizado
 */
export const generateTextQR = async (text: string): Promise<string> => {
  try {
    const qrCodeDataUrl = await QRCode.toDataURL(text, {
      errorCorrectionLevel: 'M',
      margin: 1,
      color: {
        dark: '#1e40af',
        light: '#ffffff'
      },
      width: 256
    });
    
    return qrCodeDataUrl;
  } catch (error) {
    console.error('Error generando código QR:', error);
    throw error;
  }
};

/**
 * Información de contacto por defecto para RODRIGUEZ ARQUITECTOS
 */
export const defaultContactInfo: ContactInfo = {
  name: 'RODRIGUEZ ARQUITECTOS',
  email: 'rodriguezarquitecto@hotmail.com',
  organization: 'RODRIGUEZ ARQUITECTOS',
  services: [
    'Planos de construcción',
    'Supervisión de obras',
    'Cálculo y presupuesto de obra',
    'Catastros',
    'Planos de división y partición',
    'Fraccionamiento horizontal'
  ]
};