import React from 'react';
import Section from './Section';

const Services = () => {
  const services = [
    { title: 'Psychiatric Evaluation', icon: '/svg/mental-health.png', alt: 'Psychiatric Evaluation' },
    { title: 'Medication Management', icon: '/svg/hospital.png', alt: 'Medication Management' },
    { title: 'Supportive Psychotherapy', icon: '/svg/human-brain.png', alt: 'Supportive Psychotherapy' },
    { title: 'ADHD Screening', icon: '/svg/brain.png', alt: 'ADHD Screening' },
    { title: 'MAT Treatment', icon: '/svg/mental-health.png', alt: 'MAT Treatment' },
    { title: 'Gene Sight Testing', icon: '/svg/hospital.png', alt: 'Gene Sight Testing' },
  ];

  return (
    <Section id="services" className="bg-cream-50">
      <div className="w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-playfair-display text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-brown-700">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8 xl:gap-6 justify-items-center">
            {services.map((service, index) => (
              <div key={index} className="text-center flex flex-col items-center gap-4">
                <div className="w-[100px] h-[100px] rounded-full bg-cream-100 flex items-center justify-center">
                  <img src={service.icon} alt={service.alt} className="w-8 h-8" />
                </div>
                <h3 className="font-wulkan-display font-bold text-[20px] leading-[28px] text-ink-900 text-center max-w-[150px]">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-14 flex justify-center">
            <button className="font-work-sans font-medium text-[14px] sm:text-[15px] text-black rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[210px] sm:w-[240px] h-[44px] sm:h-[50px] bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600">
              View our services
              <svg width="20" height="20" viewBox="0 0 22 23" fill="none">
                <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
