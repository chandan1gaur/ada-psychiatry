import React, { useEffect, useMemo, useRef, useState } from 'react';
import Section from './Section';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carl Rowan',
      company: 'Aglets Inc',
      text:
        'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
      avatar: '/images/07686e42742c2a4215779139c67f2d0ae1841330.png',
    },
    {
      name: 'Carl Rowan',
      company: 'Aglets Inc',
      text:
        'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
      avatar: '/images/07686e42742c2a4215779139c67f2d0ae1841330.png',
    },
    {
      name: 'Carl Rowan',
      company: 'Aglets Inc',
      text:
        'ADA took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach',
      avatar: '/images/07686e42742c2a4215779139c67f2d0ae1841330.png',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(testimonials.length);
  const [cardWidth, setCardWidth] = useState(640);
  const [cardGap, setCardGap] = useState(24);
  const [noTransition, setNoTransition] = useState(false);
  const containerRef = useRef(null);
  const total = testimonials.length;

  useEffect(() => {
    const updateVisible = () => {
      const width = window.innerWidth;
      const containerWidth = containerRef.current?.offsetWidth || width;
      if (width < 640) {
        setCardWidth(Math.min(340, Math.floor(containerWidth * 0.92)));
        setCardGap(14);
      } else if (width < 1024) {
        setCardWidth(520);
        setCardGap(18);
      } else {
        setCardWidth(680);
        setCardGap(22);
      }
    };

    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const dots = useMemo(() => Array.from({ length: total }), [total]);

  const goTo = (index) => {
    setActiveIndex(testimonials.length + index);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (!noTransition) return;
    const id = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(id);
  }, [noTransition]);

  const extended = useMemo(
    () => [...testimonials, ...testimonials, ...testimonials],
    [testimonials]
  );

  const activeDot = ((activeIndex % total) + total) % total;

  return (
    <Section id="testimonials" className="">
      <div className="text-center mb-10">
        <h2 className="font-wulkan-display font-bold text-[28px] sm:text-[34px] text-[#1B1B1B]">
          What Our Patients Are saying
        </h2>
      </div>

      <div className="w-screen" style={{ marginLeft: 'calc(-50vw + 50%)' }}>
        <div ref={containerRef} className="relative overflow-hidden w-full px-2 sm:px-4">
        <div
          className={`flex ${noTransition ? '' : 'transition-transform duration-500 ease-out'}`}
          style={{
            gap: `${cardGap}px`,
            transform: `translateX(-${activeIndex * (cardWidth + cardGap)}px)`,
            paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
            paddingRight: `calc(50% - ${cardWidth / 2}px)`,
          }}
          onTransitionEnd={() => {
            if (activeIndex >= total * 2) {
              setNoTransition(true);
              setActiveIndex(total);
            } else if (activeIndex <= 0) {
              setNoTransition(true);
              setActiveIndex(total);
            }
          }}
        >
          {extended.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{ width: `${cardWidth}px` }}
            >
              <div className="bg-[#F7EED9] border border-[#FFFFFF] rounded-[24px] overflow-hidden shadow-[0_12px_24px_rgba(27,27,27,0.08)] h-full">
                <div className="p-6 sm:p-8">
                  {/* <div className="text-[48px] leading-[48px] text-[#1B1B1B] mb-4">&ldquo;</div> */}
                  <div className="flex items-center justify-center font-wulkan-display font-bold text-[64px] sm:text-[72px] leading-[1] mb-4 ">
        &ldquo;
      </div>
                  <p className="font-work-sans text-[14px] sm:text-[15px] leading-[22px] text-[#1B1B1B]">
                    {testimonial.text}
                  </p>
                </div>
                <div className="bg-[#C18C2C] px-6 py-5 flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-white">
                    <div className="font-work-sans font-semibold text-[14px] leading-[18px]">
                      {testimonial.name}
                    </div>
                    <div className="font-work-sans text-[12px] leading-[16px] opacity-80">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      <div className="mt-8 flex justify-center gap-2">
        {dots.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            className={`w-2 h-2 rounded-full ${i === activeDot ? 'bg-[#C18C2C]' : 'border border-[#C18C2C]'}`}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
