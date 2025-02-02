// components/WordList.js
import React, { useState } from 'react';

const WordList = ({ words, onDelete, onEdit }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Определение</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <WordItem
            key={word.id}
            word={word}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
};

const WordItem = ({ word, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedWord, setEditedWord] = useState(word.word);
  const [editedDefinition, setEditedDefinition] = useState(word.definition);

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
    <tr className={isEditing ? 'editing' : ''}>
      <td>
        {isEditing ? (
          <input
            type="text"
            value={editedWord}
            onChange={(e) => setEditedWord(e.target.value)}
          />
        ) : (
          word.word
        )}
      </td>
      <td>
        {isEditing ? (
          <textarea
            value={editedDefinition}
            onChange={(e) => setEditedDefinition(e.target.value)}
          />
        ) : (
          word.definition
        )}
      </td>
      <td>
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
      </td>
    </tr>
  );
};

export default WordList;

