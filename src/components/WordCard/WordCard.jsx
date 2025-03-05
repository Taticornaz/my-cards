// WordCard.js
import React, { useState } from 'react';
import './WordCard.module.scss';

const WordCard = ({ word, hideTranslationButton }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const toggleTranslation = () => {
    setShowTranslation((prevState) => !prevState);
  };

  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p><strong>Тема:</strong> {word.topic}</p>

      {/* Если showTranslation истинно, показываем перевод */}
      {showTranslation && (
        <p><strong>Перевод:</strong> {word.translation}</p>
      )}

      {/* Если hideTranslationButton false, отображаем кнопку */}
      {!hideTranslationButton && (
        <button onClick={toggleTranslation}>
          {showTranslation ? 'Скрыть перевод' : 'Показать перевод'}
        </button>
      )}
    </div>
  );
};

export default WordCard;





