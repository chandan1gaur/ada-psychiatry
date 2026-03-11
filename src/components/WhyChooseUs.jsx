import React from 'react';
import Section from './Section';

const WhyChooseUs = () => {
  const highlights = [
    {
      title: 'Convenient access',
      description:
        'We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.',
      open: true,
    },
    { title: 'Concierge approach', open: false },
    { title: 'High quality service', open: false },
    { title: 'Trusted and empathic', open: false },
  ];

  return (
    <Section className="bg-[#F7EED9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        <div className="w-full">
          <img
            src="/images/7dc04fb34c515c443278887c52067648f3475290.png"
            alt="Counseling session"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="text-[#1B1B1B]">
          <h2 className="font-wulkan-display font-bold text-[32px] sm:text-[38px] leading-[42px] sm:leading-[48px] mb-6">
            Why Should You Choose
            <br />
            Ada Psychiatry?
          </h2>

          <div className="border-t border-[#D8C9A6]">
            {highlights.map((item) => (
              <div key={item.title} className="border-b border-[#D8C9A6] py-4">
                <div className="flex items-start gap-3">
                  <span className="text-[22px] leading-[26px] text-[#1B1B1B]">
                    {item.open ? '-' : '+'}
                  </span>
                  <div>
                    <h3 className="font-wulkan-display font-bold text-[20px] leading-[28px]">
                      {item.title}
                    </h3>
                    {item.open && (
                      <p className="mt-2 font-work-sans text-[14px] sm:text-[15px] leading-[22px] text-[#3A3A3A] max-w-[520px]">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default WhyChooseUs;
