// CardsPage.js
import React from 'react';
import WordCard from '../WordCard/WordCard'; // импортируем WordCard

const CardsPage = ({ words }) => {
  return (
    <div className="cards-page">
      {words.length > 0 ? (
        words.map((word) => (
          <WordCard
            key={word.id}  // Устанавливаем уникальный key для каждой карточки
            word={word}     // Передаем каждое слово
            hideTranslationButton={false}  // Показываем кнопку перевода
          />
        ))
      ) : (
        <p>Нет доступных слов</p>  // Сообщение, если слов нет
      )}
    </div>
  );
};

export default CardsPage;

