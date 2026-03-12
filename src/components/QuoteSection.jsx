
const QuoteSection = () => {
  return (
    <section className="relative bg-black py-10 sm:py-12 flex flex-col items-center justify-center text-center">
      <div
        className="font-wulkan-display font-bold text-[100px] leading-[29px] text-gold-600"
        style={{ width: '40px', height: '90px' }}
      >
        &ldquo;
      </div>
      <p className="font-wulkan-display font-bold text-[32px] leading-[29px] text-white max-w-[906px]">
        We help people living with and experiencing difficult times
      </p>
    </section>
  );
};

export default QuoteSection;
