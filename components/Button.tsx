import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', size = 'md', className = '', children, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed tracking-wide";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 border-2 border-transparent hover:scale-[1.02]",
    secondary: "bg-purple-600 text-white hover:bg-purple-700",
    outline: "border-2 border-black text-black hover:bg-black hover:text-white",
    ghost: "text-gray-600 hover:text-black hover:bg-gray-100"
  };
  const sizes = { sm: "px-4 py-2 text-xs", md: "px-6 py-3 text-sm", lg: "px-8 py-4 text-base" };
  return <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>{children}</button>;
};
