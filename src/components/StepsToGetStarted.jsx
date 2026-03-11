import React from 'react';
import Section from './Section';

const StepsToGetStarted = () => {
  const steps = [
    {
      number: '01',
      title: 'Schedule an appointment',
      icon: '/svg/Group.png',
    },
    {
      number: '02',
      title: 'Connect with your provider',
      icon: '/svg/Group 1948761191.png',
    },
    {
      number: '03',
      title: 'Discuss your comprehensive assessment',
      icon: '/svg/Group 1948761217.png',
    },
    {
      number: '04',
      title: 'Receive your individualized treatment plan',
      icon: '/svg/Group 1948761218.png',
    },
  ];

  return (
    <Section className="bg-black">
      <div className="w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="max-w-8xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="font-wulkan-display font-bold text-[28px] sm:text-[34px] text-gold-600">
              Four Simple Steps To
              <br />
              Get Started
            </h2>
          </div>

          <div className="flex items-start justify-center gap-4 text-gold-600 overflow-x-auto md:overflow-visible no-scrollbar">
            {steps.map((step, index) => (
              <React.Fragment key={step.number}>
                <div className="flex flex-col items-center text-center text-white min-w-[150px]">
                  <img src={step.icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 mb-3" />
             <div className="font-wulkan-display font-bold text-[20px] rounded-full px-3 py-1 mb-2 bg-gradient-to-r from-[#C18C2C] via-[#FCF38A] to-[#C18C2C] bg-clip-text text-transparent">
              {step.number}
            </div>
                  <p className="font-work-sans text-[12px] leading-[18px] text-white max-w-[150px]">
                    {step.title}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <span className="flex-1 mt-[14px] border-t border-dashed border-stone-600" />
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              className="font-work-sans font-medium text-[14px] sm:text-[15px] text-black rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[190px] sm:w-[210px] h-[44px] sm:h-[48px] bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
            >
              Schedule a Call
              <svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StepsToGetStarted;
