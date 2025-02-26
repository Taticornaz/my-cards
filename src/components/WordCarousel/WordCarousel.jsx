import React, { useState } from 'react';
import './WordCarousel.module.scss';

const WordCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const nextWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  
  const prevWord = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  return (
    <div className="carousel-container">
     
      <button className="prev" onClick={prevWord}>
        &#8592;
      </button>

      
      <div className="carousel-items">
        {words.map((word, index) => (
          <div
            key={word.id}
            className={`carousel-item ${index === currentIndex ? 'show' : 'hide'}`}
          >
            <h2>{word.word}</h2>
            <p>{word.definition}</p>
          </div>
        ))}
      </div>

      
      <button className="next" onClick={nextWord}>
        &#8594; 
      </button>
    </div>
  );
};

export default WordCarousel;

