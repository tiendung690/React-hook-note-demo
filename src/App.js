import React, { useEffect } from 'react';

import NoteList from './NoteList';
import NoteForm from './NoteForm';

import useNoteState from './useNoteState';

const App = () => {
  const { notes, addNote, deleteNote } = useNoteState([]);

  useEffect(() => {
    document.title = `You have ${notes.length} notes`;
  });

  return (
    <div className="App">
      <h1>Notes</h1>

      <NoteForm
        saveNote={note => {
          const trimmedText = note.trim();
          if (trimmedText.length > 0) addNote(trimmedText);
        }}
      />

      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;