
const QuoteSection = () => {
  return (
    <section className="relative bg-black py-10 sm:py-12 flex flex-col items-center justify-center text-center px-4">
      <div
        className="font-wulkan-display font-bold text-[72px] sm:text-[90px] md:text-[100px] leading-[1] text-gold-600"
        style={{ width: '40px', height: '90px' }}
      >
        &ldquo;
      </div>
      <p className="font-wulkan-display font-bold text-[20px] sm:text-[26px] md:text-[32px] leading-[28px] sm:leading-[30px] text-white max-w-[906px]">
        We help people living with and experiencing difficult times
      </p>
    </section>
  );
};

export default QuoteSection;
