'use client';

import { useState, useEffect } from 'react';
import { generateContactQR, defaultContactInfo, ContactInfo } from '@/lib/qr-generator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface QRCodeProps {
  contactInfo?: ContactInfo;
  size?: 'sm' | 'md' | 'lg';
  showDownloadButton?: boolean;
  className?: string;
}

export function QRCode({ 
  contactInfo = defaultContactInfo, 
  size = 'md',
  showDownloadButton = true,
  className = '' 
}: QRCodeProps) {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  useEffect(() => {
    const generateQR = async () => {
      try {
        setIsLoading(true);
        setError('');
        const qrUrl = await generateContactQR(contactInfo);
        setQrCodeUrl(qrUrl);
      } catch (err) {
        console.error('Error generando QR:', err);
        setError('Error generando código QR');
      } finally {
        setIsLoading(false);
      }
    };

    generateQR();
  }, [contactInfo]);

  const downloadQR = () => {
    if (!qrCodeUrl) return;

    const link = document.createElement('a');
    link.download = `${contactInfo.name}-contacto.png`;
    link.href = qrCodeUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (error) {
    return (
      <Card className={`${className}`}>
        <CardContent className="p-4 text-center">
          <div className="text-red-500 text-sm">{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`${className}`}>
      <CardContent className="p-4 text-center space-y-3">
        <div className="flex justify-center">
          {isLoading ? (
            <div className={`${sizeClasses[size]} bg-gray-100 rounded-lg flex items-center justify-center`}>
              <div className="animate-pulse text-gray-400">Generando...</div>
            </div>
          ) : (
            <img 
              src={qrCodeUrl} 
              alt={`Código QR de contacto para ${contactInfo.name}`}
              className={`${sizeClasses[size]} rounded-lg shadow-sm`}
            />
          )}
        </div>
        
        <div className="space-y-1">
          <p className="font-medium text-sm text-gray-900">
            Escanea para contactar
          </p>
          <p className="text-xs text-gray-600">
            Agrega nuestro contacto a tu teléfono
          </p>
        </div>

        {showDownloadButton && !isLoading && qrCodeUrl && (
          <Button 
            variant="outline" 
            size="sm"
            onClick={downloadQR}
            className="text-xs"
          >
            Descargar QR
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default QRCode;