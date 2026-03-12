import React from 'react';
import Section from './Section';

const TreatmentFocus = () => {
  const items = [
    {
      title: 'Mental Health',
      text:
        'Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.',
      align: 'left',
    },
    {
      title: 'Addiction And Recovery',
      text:
        'Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behavior may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.',
      align: 'right',
    },
    {
      title: 'Supervised Medical Weight Loss',
      text:
        "The primary indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers supervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.",
      align: 'left',
    },
  ];

  return (
    <Section className="bg-cream-50">
      <div className="w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        <div className="max-w-6xl mx-auto px-4 py-10 sm:py-12">
          <div className="text-center mb-10">
            <h2 className="font-wulkan-display font-bold text-[26px] sm:text-[30px] text-ink-900">
              Our Treatment Focus
            </h2>
          </div>
          <div className="space-y-16">
            {items.map((item) => (
              <div
                key={item.title}
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center ${item.align === 'right' ? 'md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1' : ''}`}
              >
                <div className={`flex  ${item.align === 'right' ? 'justify-left' : 'justify-end'}`}>
                  <div className="w-[190px] h-[190px] sm:w-[220px] sm:h-[220px] rounded-full border border-gold-600 p-1">
                    <img
                      src="/images/2a07a7c8585529d7c710103b474635150518f950.png"
                      alt="Treatment"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                </div>
                <div className={` ${item.align === 'right' ? 'flex justify-end' : ''}`}>
                <div className="max-w-[320px] md:max-w-[320px]">
                  <h3 className="font-wulkan-display font-bold text-[22px] sm:text-[24px] text-ink-900 mb-4 text-center md:text-left">
                    {item.title}
                  </h3>
                  <p className="font-work-sans text-[13px] sm:text-[14px] leading-[20px] text-ink-900 mb-5 text-center md:text-left">
                    {item.text}
                  </p>
                  <div className="flex justify-center md:justify-start">
                    <button className="font-work-sans font-medium text-[12px] text-black rounded-full px-4 py-2 bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600">
                      Learn More ?
                    </button>
                  </div>
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

export default TreatmentFocus;
