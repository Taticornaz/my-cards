import React, { useState } from 'react';

const AddWordForm = ({ onAdd }) => {
  const [word, setWord] = useState('');
  const [transcription, setTranscription] = useState('');
  const [translation, setTranslation] = useState('');
  const [topic, setTopic] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ word, transcription, translation, topic });
    setWord('');
    setTranscription('');
    setTranslation('');
    setTopic('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Введите слово"
      />
      <input
        type="text"
        value={transcription}
        onChange={(e) => setTranscription(e.target.value)}
        placeholder="Транскрипция"
      />
      <input
        type="text"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
        placeholder="Перевод"
      />
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Тема"
      />
      <button type="submit">Добавить слово</button>
    </form>
  );
};

export default AddWordForm;
