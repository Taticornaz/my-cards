import React, { useState } from 'react';

const WordCard = ({ word, onEdit, onDelete }) => {
  
  const [showTranslation, setShowTranslation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word.word);
  const [editedDefinition, setEditedDefinition] = useState(word.definition);

  
  const toggleTranslation = () => {
    setShowTranslation(prevState => !prevState);
  };

  
  const handleSave = () => {
    onEdit(word.id, editedWord, editedDefinition);
    setIsEditing(false);
  };

  
  const handleCancel = () => {
    setEditedWord(word.word);
    setEditedDefinition(word.definition);
    setIsEditing(false);
  };

  return (
    <div className="word-card">
      <h3>{isEditing ? (
        <input
          type="text"
          value={editedWord}
          onChange={(e) => setEditedWord(e.target.value)}
        />
      ) : word.word}</h3>
      
      <p><strong>Тема:</strong> {word.topic}</p>

      {}
      {showTranslation ? (
        <p><strong>Перевод:</strong> {word.translation}</p>
      ) : (
        <button onClick={toggleTranslation}>Показать перевод</button>
      )}

      {}
      {isEditing ? (
        <>
          <button onClick={handleSave}>Сохранить</button>
          <button onClick={handleCancel}>Отмена</button>
        </>
      ) : (
        <>
          <button onClick={() => setIsEditing(true)}>Редактировать</button>
          <button onClick={() => onDelete(word.id)}>Удалить</button>
        </>
      )}
    </div>
  );
};

export default WordCard;
