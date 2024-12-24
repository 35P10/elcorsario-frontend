import React from 'react';
import './PropsSection.css';
import FactCard from '../../components/FactCard.jsx';

const PropsSection = () => {
  return (
    <section className='factos_section'>
        <div className='factos_section__content'>
            <FactCard iconUrl="images/factos/mountain-white.png"  text="ALTA PUREZA Y MINERALES ESENCIALES" />
            <FactCard iconUrl="images/factos/water-white.png" text="100% ELECTROLITOS NATURALES" />
            <FactCard iconUrl="images/factos/ph-white.png" text="PH PERFECTAMENTE BALANCEADO" />
        </div>
    </section>
  );
};

export default PropsSection;