import { useState } from 'react';

function buildFallbackSvg(alt) {
  const safeAlt = alt.replace(/[<>&]/g, '');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-label="${safeAlt}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#191919"/>
          <stop offset="100%" stop-color="#090909"/>
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="35%" r="60%">
          <stop offset="0%" stop-color="#C8A23A" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#C8A23A" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#bg)"/>
      <rect width="800" height="600" fill="url(#glow)"/>
      <circle cx="400" cy="225" r="110" fill="#d9bf6a" fill-opacity="0.16"/>
      <circle cx="400" cy="205" r="70" fill="#f3df9a" fill-opacity="0.22"/>
      <rect x="190" y="360" width="420" height="140" rx="28" fill="#111" fill-opacity="0.65" stroke="#C8A23A" stroke-opacity="0.2"/>
      <text x="400" y="430" fill="#fff" font-family="Poppins, Arial, sans-serif" font-size="28" text-anchor="middle" letter-spacing="3">${safeAlt}</text>
    </svg>
  `;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

export default function ImageFrame({ src, alt, className = '', imgClassName = '', loading = 'lazy', fallbackSrc }) {
  const [loaded, setLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);
  const fallback = fallbackSrc || buildFallbackSvg(alt);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded ? <div className="absolute inset-0 animate-pulse bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]" /> : null}
      <img
        src={currentSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (currentSrc !== fallback) {
            setCurrentSrc(fallback);
            return;
          }
          setLoaded(true);
        }}
        className={`h-full w-full object-cover transition duration-700 ${loaded ? 'opacity-100' : 'opacity-0'} ${imgClassName}`}
      />
    </div>
  );
}