import React, { useState } from 'react';

interface MixLogoProps {
  brandName: string;
  compact?: boolean;
}

/**
 * Official MIXED NOODLES logo lockup (swirl bowl, chopsticks, and stacked wordmark).
 */
export function MixLogo({ brandName, compact = false }: MixLogoProps) {
  return (
    <span className="inline-flex items-center whitespace-nowrap shrink-0">
      <img
        src="/assets/aistudio/image_9b040b2a.png"
        alt={brandName}
        className={`w-auto object-contain select-none mix-blend-lighten brightness-[0.95] contrast-[1.12] ${
          compact ? 'h-12 sm:h-14' : 'h-11 sm:h-12'
        }`}
      />
    </span>
  );
}

/**
 * Chopstick-inspired horizontal section divider with crisp white center ring, red & dark-orange sticks.
 */
export function ChopstickDivider({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-center justify-center gap-4 my-10 sm:my-12 ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/15 to-[#C2410C]/70 rounded-full" />
      <svg
        width="56"
        height="18"
        viewBox="0 0 56 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M4 12L52 6"
          stroke="#C2410C"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M6 6.5L50 13"
          stroke="#DC2626"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <circle cx="28" cy="9.5" r="3" fill="#0C0B0A" stroke="#FFFFFF" strokeWidth="1.2" />
      </svg>
      <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/15 to-[#DC2626]/70 rounded-full" />
    </div>
  );
}

/**
 * Subtle organic swirl stroke accent echoing the noodle bowl motif.
 */
export function SwirlAccent({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <circle
        cx="160"
        cy="160"
        r="142"
        stroke="#DC2626"
        strokeOpacity="0.18"
        strokeWidth="1.5"
        strokeDasharray="18 12"
      />
      <path
        d="M52 160C52 99.8 100.8 51 161 51C221.2 51 270 99.8 270 160C270 212 228 249 178 249C132 249 99 216 99 174C99 138 127 112 161 112C190 112 212 133 212 160"
        stroke="#C2410C"
        strokeOpacity="0.2"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectClassName?: string;
  loading?: 'lazy' | 'eager';
}

export function ResilientImage({
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`${aspectClassName} w-full bg-[#12100E] flex flex-col items-center justify-center p-3 text-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          fill="none"
          aria-hidden="true"
          className="opacity-45"
        >
          <path
            d="M10 24H38C37.5 32 31.5 37 24 37C16.5 37 10.5 32 10 24Z"
            fill="#DC2626"
            fillOpacity="0.65"
          />
          <path
            d="M14 20C14 15.5 18.5 12.5 24 12.5C29.5 12.5 33.5 15.5 33.5 20"
            stroke="#C2410C"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`${aspectClassName} w-full overflow-hidden bg-[#141210] relative`}>
      <img
        src={src}
        alt={alt}
        loading={loading}
        referrerPolicy="no-referrer"
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover ${className}`}
      />
    </div>
  );
}
