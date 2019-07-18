import { useState } from 'react';

export default initialValue => {
  const [notes, setNotes] = useState(initialValue);

  return {
    notes,
    addNote: note => {
      setNotes([...notes, note]);
    },
    deleteNote: noteIndex => {
      const newList = notes.filter((_, index) => index !== noteIndex);
      setNotes(newList);
    },
  };
};