
import React from 'react';
import WordCarousel from '../WordCarousel/WordCarousel'; 

const CarouselPage = ({ words }) => {
  return (
    <div className="carousel-page">
      {words.length > 0 ? (
        <WordCarousel words={words} />  
      ) : (
        <p>Нет доступных слов</p>  
      )}
    </div>
  );
};

export default CarouselPage;
