import React from 'react';

const WordCard = ({ word, onEdit, onDelete }) => {
  return (
    <div className="word-card">
      <h3>{word.word}</h3>
      <p><strong>Перевод:</strong> {word.translation}</p>
      <p><strong>Тема:</strong> {word.topic}</p>
      <button onClick={() => onEdit(word.id)}>Редактировать</button>
      <button onClick={() => onDelete(word.id)}>Удалить</button>
    </div>
  );
};

export default WordCard;
