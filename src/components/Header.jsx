import React, { useState } from 'react';
import Button from './Button';
import Container from './layout/Container';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white h-[64px] sm:h-[80px] sticky top-0 z-50 border-b border-gold-600">
      <Container className="h-full">
        <div className="w-full flex items-center h-full gap-6">
          <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/b029bc51ef711d6a2be540f499ae3581a58a5da6.png"
            alt="Ada Psychiatry Logo"
            className="w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-work-sans font-semibold text-[12px] sm:text-[14px] tracking-[3px]">Ada Psychiatry</span>
            {/* <span className="font-work-sans font-semibold text-[14px] tracking-[3px]"></span> */}
          </div>
          </div>

          <div className="ml-auto flex items-center gap-6">
            <nav className="hidden lg:flex items-center gap-6 whitespace-nowrap">
              <a href="#home" className="text-white hover:text-amber-700 transition-colors inline-flex items-center font-work-sans font-medium text-[13px] whitespace-nowrap">
              Who we are
               <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
              <a href="#about" className="text-white hover:text-amber-700 transition-colors inline-flex items-center font-work-sans font-medium text-[13px] whitespace-nowrap">
              Who we treat
              <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
              <a href="#services" className="text-white hover:text-amber-700 transition-colors inline-flex items-center font-work-sans font-medium text-[13px] whitespace-nowrap">
              Services
              <svg className="w-[10px] h-[5px] ml-[4px]" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L5 5L10 0" stroke="currentColor" strokeWidth="1" />
              </svg>
            </a>
              <a href="#testimonials" className="text-white hover:text-amber-700 transition-colors inline-flex items-center font-work-sans font-medium text-[13px] whitespace-nowrap">
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
              className="w-[220px] h-[40px] rounded-[60px] font-work-sans font-medium text-[11px] text-center flex items-center justify-center leading-none"
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
      </Container>

      {isMenuOpen && (
        <div className="lg:hidden bg-black border-t border-charcoal-700">
          <Container className="py-6">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-amber-700 transition-colors font-medium inline-flex items-center" onClick={toggleMenu}>
              Who we are
            </a>
              <a href="#about" className="text-white hover:text-amber-700 transition-colors font-medium inline-flex items-center" onClick={toggleMenu}>
              Who we treat
            </a>
              <a href="#services" className="text-white hover:text-amber-700 transition-colors font-medium inline-flex items-center" onClick={toggleMenu}>
              Services
            </a>
              <a href="#testimonials" className="text-white hover:text-amber-700 transition-colors font-medium inline-flex items-center" onClick={toggleMenu}>
              Resources
            </a>
            <Button variant="gradient" size="medium" className="w-full mt-2" onClick={toggleMenu}>Book an Appointment</Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Header;
