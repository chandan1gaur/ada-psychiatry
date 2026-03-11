import React from 'react';
import Section from './Section';

const MeetTheFounder = () => {
  return (
    <Section id="about" className="bg-cream-50 py-16 lg:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 relative z-20 flex justify-center lg:justify-start">
            <img
              src="/images/07686e42742c2a4215779139c67f2d0ae1841330.png"
              alt="Lakeisha Appleton"
              className="w-full max-w-[520px] h-[280px] sm:h-[320px] lg:h-[340px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div className="w-full lg:w-1/2 relative z-10 mt-6 lg:mt-0 lg:-ml-16 p-8 sm:p-10 border border-[#C18C2C] rounded-3xl bg-cream-50">
            <h2 className="font-wulkan-display font-bold text-[24px] sm:text-[28px] text-[#1B1B1B] mb-3 text-left">
              Meet The Founder
            </h2>
            <h3 className="font-wulkan-display font-bold text-[18px] sm:text-[20px] text-[#1B1B1B] mb-2 text-left">
              Lakeisha Appleton
            </h3>
            <p className="font-work-sans text-[14px] text-[#1B1B1B] mb-5 text-left">
              FNP-C, PMHNP- BC
            </p>
            <p className="font-playfair-display italic text-[13px] sm:text-[14px] leading-[22px] text-[#1B1B1B] mb-6 text-left">
              "Mental health problems don’t define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN." — Matt Haig
            </p>
            <button
              className="font-work-sans font-medium text-[13px] sm:text-[14px] text-black rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[150px] sm:w-[160px] h-[42px] sm:h-[46px] bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C]"
            >
              Learn More
              <svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path
          d="M0 80 C80 40 160 40 240 80 C320 120 400 120 480 80 C560 40 640 40 720 80 C800 120 880 120 960 80 C1040 40 1120 40 1200 80 C1280 120 1360 120 1440 80 L1440 120 L0 120 Z"
          fill="#F7EED9"
        />
      </svg>
    </Section>
  );
};

export default MeetTheFounder;
