import React, { useState } from 'react';

const AddWordForm = ({ onAdd }) => {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ word, translation, topic });
    setWord('');
    setTranslation('');
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Слово</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
      </div>
      <div>
        <label>Перевод</label>
        <input
          type="text"
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
        />
      </div>
      <div>
        <label>Тема</label>
        <input
          type="text"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </div>
      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;
