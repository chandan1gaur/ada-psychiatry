import React, { useEffect, useState } from 'react';
import Container from './layout/Container';
import { heroImages } from '../data/siteData';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative text-white overflow-hidden min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${heroImages[currentImage]})` }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <Container className="relative z-10 flex items-start lg:items-center min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] py-16 sm:py-24">
        <div className="max-w-[520px]">
          <h1 className="font-wulkan-display font-semibold text-[26px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-[32px] sm:leading-[38px] uppercase text-white">
            Need a mental
            <br />
            health provider?
          </h1>
          <h2 className="mt-3 font-wulkan-display font-semibold text-[13px] sm:text-[14px] text-white">
            No Look Further
          </h2>
          <p className="mt-2 font-playfair-display font-normal text-[12px] sm:text-[13px] leading-[18px] sm:leading-[20px] text-white">
            Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
          </p>
          <button
            className="mt-4 text-black font-work-sans font-medium text-[13px] rounded-full hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 w-[150px] h-[40px] bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
          >
            Learn More
            <svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Container>

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${index === currentImage ? 'bg-white' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
