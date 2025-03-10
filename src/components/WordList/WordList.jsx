import React from 'react';
import WordCard from '../WordCard/WordCard';
import  './WordList.module.scss';

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

