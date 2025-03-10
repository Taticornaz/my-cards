import React, { useState, useRef, useEffect } from 'react';
import './WordCard.module.scss';

const WordCard = ({ word, hideTranslationButton, onStudy }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const [hasStudied, setHasStudied] = useState(false);  
  const translateButtonRef = useRef(null);  
  
  const toggleTranslation = () => {
    if (!showTranslation && !hasStudied) {
      
      onStudy();  
      setHasStudied(true);  
    }
    
    
    setShowTranslation((prevState) => !prevState);
  };

  
  useEffect(() => {
    if (translateButtonRef.current) {
      translateButtonRef.current.focus();
    }
  }, []);  

  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p><strong>Тема:</strong> {word.topic}</p>

     
      {showTranslation && (
        <p><strong>Перевод:</strong> {word.translation}</p>
      )}

      
      {!hideTranslationButton && (
        <button 
          ref={translateButtonRef}  
          onClick={toggleTranslation}  
        >
          {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
        </button>
      )}
    </div>
  );
};

export default WordCard;




