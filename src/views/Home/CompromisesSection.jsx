import React from 'react';
import './CompromisesSection.css';

const CompromisesSection = () => {
  return (
    <section className='compromises_section'>
        <div className='compromises_section__content'>
          <div className='compromises_section__image_1'></div>
          <div className='compromises_section__content__text'>
            <h2>Nuestro Compromiso con la Calidad</h2>
            <p>La calidad no es una opción, es un estándar. Nuestro proceso de purificación incluye:
            </p>
            <ul>
              <li>Filtración múltiple para eliminar impurezas.</li>
              <li>Control de calidad riguroso en cada etapa de producción.</li>
              <li>Certificaciones que garantizan un agua de confianza.</li>
            </ul>
          </div>
        </div>
        <div className='compromises_section__content'>
          <div className='compromises_section__image_2'></div>     
          <div className='compromises_section__content__text'>
            <h2>Sostenibilidad</h2>
            <p>Nuestro compromiso con el medio ambiente es tan fuerte como nuestras raíces. 
            </p>
            <ul>
              <li>Promovemos el reciclaje de botellas.</li>
              <li>Implementamos procesos sostenibles en nuestras plantas.</li>
              <li>Trabajamos con comunidades portuarias para cuidar los recursos naturales.</li>
            </ul>
          </div>
        </div>
    </section>
  );
};

export default CompromisesSection;