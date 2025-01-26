import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WordList from './components/WordList';
import AddWordForm from './components/AddWordForm';


const App = () => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([
      ...words,
      { id: Date.now(), ...newWord }
    ]);
  };

  const deleteWord = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  const editWord = (id) => {
    
    console.log('Редактирование слова с ID:', id);
  };

  return (
    <div className="App">
      <Header />
      <main>
      <AddWordForm onAdd={addWord} />
      <WordList words={words} onEdit={editWord} onDelete={deleteWord} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
