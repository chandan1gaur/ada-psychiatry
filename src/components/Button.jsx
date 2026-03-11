import React from 'react';

const Button = ({ children, variant = 'primary', size = 'medium', onClick, className = '', style = {} }) => {
  const baseClasses = 'rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-gold-400 text-navy-900 hover:bg-gold-500 focus:ring-gold-400',
    secondary: 'bg-transparent border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-900 focus:ring-gold-400',
    gradient: 'text-black hover:opacity-90 focus:ring-yellow-600',
  };

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  const isGradient = variant === 'gradient';

  return (
    <button
      className={`${baseClasses} ${!isGradient ? variants[variant] : variants.gradient} ${sizes[size]} ${className}`}
      onClick={onClick}
      style={isGradient ? { background: 'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50.52%, #C18C2C 100%)', ...style } : style}
    >
      {children}
    </button>
  );
};

export default Button;