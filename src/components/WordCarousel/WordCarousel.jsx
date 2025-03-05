
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import WordCard from '../WordCard/WordCard'; 
import './WordCarousel.module.scss';

const WordCarousel = ({ words }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  
  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  return (
    <div className="carousel-container">
     
      <button
        className="prev"
        onClick={prevCard}
        disabled={words.length <= 1}
        aria-label="Предыдущая карточка"
      >
        &#8592;
      </button>

      
      {words.length > 0 ? (
        <WordCard
          key={words[currentIndex].id}  
          word={words[currentIndex]}    
          hideTranslationButton={true}  
        />
      ) : (
        <p className="no-words-message">Нет доступных слов для отображения</p>
      )}

    
      <button
        className="next"
        onClick={nextCard}
        disabled={words.length <= 1}
        aria-label="Следующая карточка"
      >
        &#8594;
      </button>
    </div>
  );
};

WordCarousel.propTypes = {
  words: PropTypes.array.isRequired,
};

WordCarousel.defaultProps = {
  words: [],  
};

export default WordCarousel;



