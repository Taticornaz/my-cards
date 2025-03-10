
import React, { useState } from 'react';
import WordCard from '../WordCard/WordCard'; 

const CardsPage = ({ words }) => {
  const [studiedCount, setStudiedCount] = useState(0); 

  
  const handleWordStudy = () => {
    setStudiedCount(studiedCount + 1);
  };

  return (
    <div className="cards-page">
      <h1>Слова для изучения</h1>
      <p>Изучено слов: {studiedCount}</p> 
      {words.length > 0 ? (
        words.map((word) => (
          <WordCard
            key={word.id}  
            word={word}     
            hideTranslationButton={false}  
            onStudy={handleWordStudy} 
          />
        ))
      ) : (
        <p>Нет доступных слов</p>  
      )}
    </div>
  );
};

export default CardsPage;


