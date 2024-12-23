import React from 'react';
import './FactCard.css';

const FactCard = ({ iconUrl, text }) => {
  return (
    <div className='fact_container'>
      <img
        src={iconUrl}
        alt={text}
      />
      <p>{text}</p>
    </div>
  );
};

export default FactCard;