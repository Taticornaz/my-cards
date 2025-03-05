
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import AddWordForm from './components/AddWordForm/AddWordForm';
import WordList from './components/WordList/WordList';
import WordCarousel from './components/WordCarousel/WordCarousel';
import WordTable from './components/WordTable/WordTable';
import MainPage from './components/MainPage/MainPage';
import CardsPage from './components/CardsPage/CardsPage';
import CarouselPage from './components/CarouselPage/CarouselPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import './components/styles/styles.scss';

const App = () => {
  const [words, setWords] = useState([]);

  const addWord = (newWord) => {
    setWords([...words, { id: Date.now(), ...newWord }]);
  };

  const handleDelete = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  const handleSave = (id, editedWord) => {
    setWords(words.map((word) => (word.id === id ? { ...word, ...editedWord } : word)));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Header />
        <div className="app-content">
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <AddWordForm onAdd={addWord} />
                    <WordTable words={words} onDelete={handleDelete} onSave={handleSave} />
                  </>
                }
              />
              <Route path="/cards" element={<CardsPage words={words} />} />
              <Route path="/carousel" element={<WordCarousel words={words} />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
