import React, { useState } from 'react';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white h-[80px] sticky top-0 z-50 border-b border-gold-600" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
      <div className="w-full flex items-center px-6 sm:px-8 h-full">
        <div className="flex items-center gap-3">
          <img
            src="/images/b029bc51ef711d6a2be540f499ae3581a58a5da6.png"
            alt="Ada Psychiatry Logo"
            className="w-[38px] h-[38px] object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-work-sans font-semibold text-[14px] tracking-[3px]">Ada Psychiatry</span>
            {/* <span className="font-work-sans font-semibold text-[14px] tracking-[3px]"></span> */}
          </div>
        </div>

        <div className="ml-auto flex items-center gap-6">
          <nav className="hidden lg:flex items-center gap-6">
            <a href="#home" className="text-white hover:text-amber-700 transition-colors flex items-center font-work-sans font-medium text-[13px]">
              Who we are
               <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a href="#about" className="text-white hover:text-amber-700 transition-colors flex items-center font-work-sans font-medium text-[13px]">
              Who we treat
              <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a href="#services" className="text-white hover:text-amber-700 transition-colors flex items-center font-work-sans font-medium text-[13px]">
              Services
              <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
            <a href="#testimonials" className="text-white hover:text-amber-700 transition-colors flex items-center font-work-sans font-medium text-[13px]">
              Resources
              <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="gradient"
              size="medium"
              className="w-[220px] h-[40px] rounded-[60px] font-work-sans font-medium text-[11px] text-center bg-black text-black flex items-center justify-center leading-none"
            >
              Book an Appointment
            </Button>
          </div>
        </div>

        <button
          className="lg:hidden text-white focus:outline-none ml-auto"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black px-4 py-6 border-t border-charcoal-700" style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
          <nav className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-amber-700 transition-colors font-medium flex items-center" onClick={toggleMenu}>
              Who we are
            </a>
            <a href="#about" className="text-white hover:text-amber-700 transition-colors font-medium flex items-center" onClick={toggleMenu}>
              Who we treat
            </a>
            <a href="#services" className="text-white hover:text-amber-700 transition-colors font-medium flex items-center" onClick={toggleMenu}>
              Services
            </a>
            <a href="#testimonials" className="text-white hover:text-amber-700 transition-colors font-medium flex items-center" onClick={toggleMenu}>
              Resources
            </a>
            <Button variant="gradient" size="medium" className="w-full mt-2" onClick={toggleMenu}>Book an Appointment</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
