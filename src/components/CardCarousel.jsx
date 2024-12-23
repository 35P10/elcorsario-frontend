import React, { useState } from 'react';
import './CardCarousel.css';

const cards = [
  { id: 1, title: 'Botella de 500 ml', content: 'Perfecta para acompañarte en tus días activos.', imageUrl: 'images/product/bottle-1.png' },
  { id: 2, title: 'Botella de 1 L', content: 'Pensada para mantenerte hidratado durante todo el día.', imageUrl: 'images/product/bottle-1.png' },
  { id: 3, title: 'Garrafón de 20 L', content: 'Tu aliado para abastecer a toda la familia.', imageUrl: 'images/product/bottle-1.png' },
  { id: 4, title: 'Hielo', content: 'Perfecta para refrescar tu día.', imageUrl: 'images/product/bottle-1.png' }
];

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel_container">
      <button className="carousel_button left" onClick={prevCard}>
        {'<'}
      </button>
      <div className="carousel">
        {cards.map((card, index) => {
          const isCentered = index === currentIndex;
          const isPrev = index === (currentIndex - 1 + cards.length) % cards.length;
          const isNext = index === (currentIndex + 1) % cards.length;

          return (
            <div
              key={card.id}
              className={`card ${isCentered ? 'centered' : ''} ${
                isPrev || isNext ? 'adjacent' : ''
              }`}
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className={`card-image ${isCentered ? '' : 'faded'}`}
              />
              <div className="card-title-mobile">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>
              {isCentered && <div className="card-title-tablet">
                <h3>{card.title}</h3>
                <p>{card.content}</p>
              </div>}
            </div>
          );
        })}
      </div>
      <button className="carousel_button right" onClick={nextCard}>
        {'>'}
      </button>
    </div>
  );
};

export default CardCarousel;