import React from 'react';
import WordCard from './WordCard';

const WordList = ({ words, onDelete, onEdit }) => {
  return (
    <div className="word-list">
      {words.map((word) => (
        <WordCard
          key={word.id}
          word={word}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default WordList;

