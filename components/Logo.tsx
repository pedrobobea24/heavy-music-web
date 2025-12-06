import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  // Cuando tengas tu logo.png subido, cambia esto a true
  const useUploadedImage = true;

  if (useUploadedImage) {
    return (
      <img src="/logo.png" alt="Heavy Music Logo" className={`${className} object-contain`} />
    );
  }

  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="heavyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7E22CE" />
          <stop offset="50%" stopColor="#DB2777" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <path d="M45 5 L70 5 L55 40 L80 40 L35 95 L50 50 L25 50 Z" fill="url(#heavyGradient)" stroke="white" strokeWidth="1.5" />
      <path d="M35 15 L55 15 L45 45 L65 45 L35 85" stroke="url(#heavyGradient)" strokeWidth="2" strokeOpacity="0.5" fill="none" className="opacity-50" />
    </svg>
  );
};
