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
    <Section className="bg-cream-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="w-full">
          <div className="relative inline-block">
            <div className="absolute -bottom-3 -right-3 w-full h-full border border-gold-600 rounded-[4px]"></div>
            <img
              src="/images/7dc04fb34c515c443278887c52067648f3475290.png"
              alt="Counseling session"
              className="relative w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="text-ink-900">
          <h2 className="font-wulkan-display font-bold text-[26px] sm:text-[32px] lg:text-[38px] leading-[36px] sm:leading-[42px] lg:leading-[48px] mb-6">
            Why Should You Choose
            <br />
            Ada Psychiatry?
          </h2>

          <div className="border-t border-gold-600">
            {highlights.map((item) => (
              <div key={item.title} className="border-b border-gold-600 py-4">
                <div className="flex items-start gap-3 text-left">
                  <span className="text-[22px] leading-[26px] text-ink-900">
                    {item.open ? '-' : '+'}
                  </span>
                  <div>
                    <h3 className="font-wulkan-display font-bold text-[20px] leading-[28px]">
                      {item.title}
                    </h3>
                    {item.open && (
                      <p className="mt-2 font-work-sans text-[14px] sm:text-[15px] leading-[22px] text-stone-700 max-w-[520px]">
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
