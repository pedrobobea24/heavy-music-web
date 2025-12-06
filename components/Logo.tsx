import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => {
  return (
    <img 
      src="/logo.png" 
      alt="Heavy Music Logo" 
      className={`${className} object-contain`}
    />
  );
};