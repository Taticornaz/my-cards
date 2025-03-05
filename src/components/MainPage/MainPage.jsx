
import React from 'react';
import WordList from '../WordList/WordList';
import AddWordForm from '../AddWordForm/AddWordForm';
import WordTable from '../WordTable/WordTable';


const MainPage = ({ words }) => {
  return (
    <div>
      <h1>Моя таблица слов</h1>
     
      <WordTable words={words} />
    </div>
  );
};


export default MainPage;
