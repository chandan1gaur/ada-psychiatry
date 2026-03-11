import React from "react";

const QuoteSection = () => {
  return (
    <section className="relative bg-black py-16 sm:py-20 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Top Wave */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0 40 C60 0 120 0 180 40 C240 80 300 80 360 40 C420 0 480 0 540 40 C600 80 660 80 720 40 C780 0 840 0 900 40 C960 80 1020 80 1080 40 C1140 0 1200 0 1260 40 C1320 80 1380 80 1440 40 L1440 0 L0 0 Z"
          fill="#F5EFE6"
        />
      </svg>

      <div className="flex items-center justify-center font-wulkan-display font-bold text-[64px] sm:text-[72px] leading-[1] mb-4 text-[#C18C2C]">
        &ldquo;
      </div>

      {/* Quote */}
      <p className="text-white text-[22px] sm:text-[26px] md:text-[30px] font-wulkan-display max-w-4xl px-6">
        &ldquo;We help people living with and experiencing difficult times&rdquo;
      </p>

      {/* Bottom Wave */}
      <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path
          d="M0 40 C60 80 120 80 180 40 C240 0 300 0 360 40 C420 80 480 80 540 40 C600 0 660 0 720 40 C780 80 840 80 900 40 C960 0 1020 0 1080 40 C1140 80 1200 80 1260 40 C1320 0 1380 0 1440 40 L1440 80 L0 80 Z"
          fill="#F5EFE6"
        />
      </svg>
    </section>
  );
};

export default QuoteSection;
