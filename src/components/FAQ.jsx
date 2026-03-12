import React, { useState } from 'react';
import Section from './Section';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'Is Ada psychiatry confidential?',
      answer:
        'We offer in-person and virtual psychiatry services where you can meet your provider in person or at the convenience of your own home.',
    },
    {
      question: 'What is the best way to schedule a appointment?',
      answer: '',
    },
    {
      question: 'Do you prescribe controlled substance medication?',
      answer: '',
    },
    {
      question: 'How long does the initial appointment take?',
      answer: '',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <Section className="bg-cream-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="font-wulkan-display font-bold text-[24px] sm:text-[28px] lg:text-[34px] text-ink-900">
            Frequently asked questions
          </h2>
        </div>

        <div className="border-t border-sand-400">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-sand-400">
              <button
                className="w-full text-left py-4 flex items-start gap-3"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-ink-900 text-[20px] leading-[24px] mt-[2px]">
                  {openIndex === index ? '-' : '+'}
                </span>
                <div>
                  <h3 className="font-wulkan-display font-bold text-[18px] leading-[26px] text-ink-900">
                    {faq.question}
                  </h3>
                  {openIndex === index && faq.answer && (
                    <p className="mt-2 font-work-sans text-[14px] leading-[22px] text-ink-900">
                      {faq.answer}
                    </p>
                  )}
                </div>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <button
            className="font-work-sans font-medium text-[14px] sm:text-[15px] text-black rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2 w-[190px] sm:w-[210px] h-[44px] sm:h-[48px] bg-gradient-to-r from-gold-600 via-gold-300 to-gold-600"
          >
            See all FAQ
            <svg width="18" height="18" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 5L20.5 12M20.5 12L13.5 19M20.5 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default FAQ;
