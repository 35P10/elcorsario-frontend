import React, { useState } from 'react';
import './CardCarousel.css';

const cards = [
  { id: 1, title: 'Card 1', imageUrl: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg' },
  { id: 2, title: 'Card 2', imageUrl: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg' },
  { id: 3, title: 'Card 3', imageUrl: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg' },
  { id: 4, title: 'Card 4', imageUrl: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg' },
  { id: 5, title: 'Card 5', imageUrl: 'https://content.health.harvard.edu/wp-content/uploads/2023/07/b8a1309a-ba53-48c7-bca3-9c36aab2338a.jpg' }
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
    <div className="carousel-container">
      <button className="carousel-button left" onClick={prevCard}>
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
              {isCentered && <h2 className="card-title">{card.title}</h2>}
            </div>
          );
        })}
      </div>
      <button className="carousel-button right" onClick={nextCard}>
        {'>'}
      </button>
    </div>
  );
};

export default CardCarousel;