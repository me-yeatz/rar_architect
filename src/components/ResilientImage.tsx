import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle = 'Architectural Study',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#F7F7F5] text-[#4A4A48] border border-[#E5E5E3] p-6 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <Building2 className="w-8 h-8 text-[#EB8B1D] mb-2" aria-hidden="true" />
        <span className="font-display text-sm font-semibold text-[#0F0F0F]">
          {fallbackTitle}
        </span>
        <span className="text-xs text-[#666663] mt-1">
          RAR Architect &amp; Engineer Sdn. Bhd.
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
