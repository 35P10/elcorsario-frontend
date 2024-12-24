import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className='hero_section'>
      <div className='bottle'></div>
      <div className='superficie'></div>
      <div className='section_hero__content'>
        <h1>EL CORSARIO</h1>
        <p>EL AGUA QUE TE ACOMPANA</p>
        <button>PROXIMAMENTE</button>
      </div>
  </section>
  );
};

export default HeroSection;