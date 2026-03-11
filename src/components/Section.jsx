import React from 'react';

const Section = ({ id, className = '', children }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`} style={{ width: '100vw' }}>
      <div className="max-w-8xl ">
        {children}
      </div>
    </section>
  );
};

export default Section;