import React, { useState } from 'react';
import styles from './WordTable.module.scss';

const WordTable = ({ words, onDelete, onSave }) => {
  const [editingWord, setEditingWord] = useState(null); 
  const [editedWord, setEditedWord] = useState({ word: '', definition: '' }); 

  
  const handleEdit = (word) => {
    setEditingWord(word.id);
    setEditedWord({ word: word.word, definition: word.definition });
  };

  
  const handleCancel = () => {
    setEditingWord(null);
    setEditedWord({ word: '', definition: '' });
  };

  
  const handleSave = (id) => {
    onSave(id, editedWord); 
    setEditingWord(null);
  };

  
  const handleDelete = (id) => {
    onDelete(id); 
  };

  return (
    <table className={styles.wordTable}>
      <thead>
        <tr>
          <th>Слово</th>
          <th>Определение</th>
          <th>Действия</th>
        </tr>
      </thead>
      <tbody>
        {words.length > 0 ? (
          words.map((word) => (
            <tr key={word.id}>
              <td>
                {editingWord === word.id ? (
                  <input
                    type="text"
                    value={editedWord.word}
                    onChange={(e) => setEditedWord({ ...editedWord, word: e.target.value })}
                  />
                ) : (
                  word.word
                )}
              </td>
              <td>
                {editingWord === word.id ? (
                  <input
                    type="text"
                    value={editedWord.definition}
                    onChange={(e) => setEditedWord({ ...editedWord, definition: e.target.value })}
                  />
                ) : (
                  word.definition
                )}
              </td>
              <td>
                {editingWord === word.id ? (
                  <>
                    <button onClick={() => handleSave(word.id)}>Сохранить</button>
                    <button onClick={handleCancel}>Отмена</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(word)}>Редактировать</button>
                    <button onClick={() => handleDelete(word.id)}>Удалить</button>
                  </>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">Нет слов для отображения</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default WordTable;
