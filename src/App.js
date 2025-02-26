import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import WordList from './components/WordList/WordList';
import AddWordForm from './AddWordForm/AddWordForm';
import WordCarousel from './components/WordCarousel/WordCarousel'; 
import './components/styles/styles.scss';

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

  const editWord = (id, newWord, newDefinition) => {
    setWords(words.map(word => 
      word.id === id ? { ...word, word: newWord, definition: newDefinition } : word
    ));
  };

  return (
    <div className="App">
      <Header />
      <main>
        
        <AddWordForm onAdd={addWord} />

        
        <WordList words={words} onDelete={deleteWord} onEdit={editWord} />

        
        {words.length > 0 ? (
          <WordCarousel words={words} />
        ) : (
          <p>No words to display</p>
        )}





      </main>
      <Footer />
    </div>
  );
};

export default App;
