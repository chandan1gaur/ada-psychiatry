import React from 'react';
import Container from './layout/Container';

const Section = ({ id, className = '', children, withContainer = true, containerClassName = '' }) => {
  return (
    <section id={id} className={`py-12 md:py-20 ${className}`}>
      {withContainer ? (
        <Container className={containerClassName}>
          {children}
        </Container>
      ) : (
        children
      )}
    </section>
  );
};

export default Section;
