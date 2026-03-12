import React from 'react';
import Container from './layout/Container';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <Container className="py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">
          <div className="order-1">
            <h4 className="text-gold-700 font-wulkan-display font-bold text-[13px] mb-4 text-left">Quick Links</h4>
            <ul className="space-y-3 text-[12px] text-white text-left">
              <li>Who We Are</li>
              <li>What We Treat</li>
              <li>Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="order-2">
            <h4 className="text-gold-700 font-wulkan-display font-bold text-[13px] mb-4 text-left">Resources</h4>
            <ul className="space-y-3 text-[12px] text-white text-left">
              <li>FAQs</li>
              <li>Blog</li>
              <li>Fees and Insurance</li>
            </ul>
          </div>

          <div className="order-3">
            <h4 className="text-gold-700 font-wulkan-display font-bold text-[13px] mb-4 text-left">Legal</h4>
            <ul className="space-y-3 text-[12px] text-white text-left">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Return Policy</li>
              <li>Cookie Settings</li>
            </ul>
          </div>

          <div className="order-4">
            <h4 className="text-gold-700 font-wulkan-display font-bold text-[13px] mb-3 text-left">Business Hours</h4>
            <p className="text-[12px] text-white text-left">Monday - Thursday</p>
            <p className="text-[12px] text-white text-left">09:00 am - 4:00 pm</p>
            <h4 className="text-gold-700 font-wulkan-display font-bold text-[13px] mt-5 mb-2 text-left">For Careers</h4>
            <p className="text-[12px] text-white text-left">Interested in joining the ADA Team?</p>
            <p className="text-[12px] text-white text-left">Career@adapsychiatry.com</p>
          </div>

          <div className="order-5 col-span-2 md:col-span-1 mt-4 md:mt-0">
            <div className="flex items-center gap-2 mb-4 text-left">
              <img
                src="/images/b029bc51ef711d6a2be540f499ae3581a58a5da6.png"
                alt="Ada Psychiatry"
                className="w-7 h-7 object-contain"
              />
              <span className="text-[11px] font-semibold tracking-[2px]">ADA PSYCHIATRY</span>
            </div>
            <p className="text-gold-700 font-wulkan-display font-bold text-[13px] mt-5 mb-2 text-left">Locate us</p>
            <p className="text-[12px] text-white leading-[18px] mb-4 text-left">
              1802 E Ray Road, STE A107, Chandler, Arizona 85225
              <br />
              Phone: 480-526-9292
            </p>
            <p className="text-gold-700 font-wulkan-display font-bold text-[13px] mt-5 mb-2 text-left">Follow us</p>
            <div className="flex items-center gap-3 text-white">
              <span className="w-4 h-4 inline-flex">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="18" cy="6" r="1" />
                </svg>
              </span>
              <span className="w-4 h-4 inline-flex">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 9h3V6h-3c-2.2 0-4 1.8-4 4v2H6v3h3v6h3v-6h3l1-3h-4v-2c0-.6.4-1 1-1z" />
                </svg>
              </span>
              <span className="w-4 h-4 inline-flex">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.6 7.3c.01.16.01.33.01.49 0 5.02-3.82 10.8-10.8 10.8-2.15 0-4.14-.63-5.82-1.7.3.04.6.05.9.05 1.78 0 3.42-.6 4.72-1.62-1.66-.03-3.06-1.12-3.55-2.62.23.04.46.07.7.07.33 0 .66-.04.97-.12-1.73-.35-3.03-1.87-3.03-3.7v-.05c.5.28 1.08.45 1.69.47-1.01-.68-1.68-1.84-1.68-3.15 0-.7.19-1.35.52-1.9 1.88 2.31 4.69 3.83 7.86 3.99-.06-.28-.1-.57-.1-.87 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.46 2.8 1.2.86-.17 1.67-.48 2.4-.92-.28.89-.88 1.63-1.66 2.1.77-.09 1.5-.29 2.18-.59-.51.76-1.16 1.43-1.9 1.96z" />
                </svg>
              </span>
              <span className="w-4 h-4 inline-flex">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 8.5c-1.1 0-2 .9-2 2v1.2c0 .3-.2.6-.5.7l-4 1.8c-.3.1-.5.4-.5.7v3.1c0 1.1-.9 2-2 2h-1.5c-1.1 0-2-.9-2-2v-3.1c0-.3-.2-.6-.5-.7l-4-1.8c-.3-.1-.5-.4-.5-.7V10.5c0-1.1-.9-2-2-2V6.5c2.4 0 4 1.6 4 4v1l2 1V8.5c0-2.5 2-4.5 4.5-4.5S17 6 17 8.5v3l2-1v-1c0-2.4 1.6-4 4-4v2z" />
                </svg>
              </span>
              <span className="w-4 h-4 inline-flex">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4 7v7h3v-4.2c0-1.1.8-2 1.9-2s1.9.9 1.9 2V17h3v-4.9c0-2.6-1.6-4-3.7-4-1.7 0-2.5.9-2.9 1.5V10H8zm0-4a1.7 1.7 0 1 0 0 3.4A1.7 1.7 0 0 0 8 6z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t border-charcoal-700 py-4 text-center text-[11px] text-white">
        (c) Ada Psychiatry. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

