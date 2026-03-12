import React from 'react';
import Section from './Section';
import { servicesData } from '../data/siteData';

const Services = () => {
  return (
    <Section id="services" className="bg-cream-50">
      <div className="text-center mb-12 sm:mb-16">
        <h2 className="font-playfair-display text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-brown-700">
          Our Services
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 xl:gap-6 justify-items-center">
        {servicesData.map((service, index) => (
          <div key={index} className="text-center flex flex-col items-center gap-4">
            <div className="w-[72px] h-[72px] sm:w-[90px] sm:h-[90px] rounded-full bg-cream-100 flex items-center justify-center">
              <img src={service.icon} alt={service.alt} className="w-7 h-7 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-wulkan-display font-bold text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[28px] text-ink-900 text-center max-w-[150px]">
              {service.title}
            </h3>
          </div>
        ))}
      </div>

      <div className="mt-12 sm:mt-14 flex justify-center">
        <button className="font-work-sans font-medium text-[13px] sm:text-[15px] text-black rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[190px] sm:w-[240px] h-[44px] sm:h-[50px] bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600">
          View our services
          <svg width="20" height="20" viewBox="0 0 22 23" fill="none">
            <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </Section>
  );
};

export default Services;
