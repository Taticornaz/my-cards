import React from 'react';
import WordCard from './WordCard';

const WordList = ({ words, onEdit, onDelete }) => {
  return (
    <div className="word-list">
      {words.map(word => (
        <WordCard
          key={word.id}
          word={word}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default WordList;
