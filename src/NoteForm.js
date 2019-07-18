import React from 'react';

import useInputState from './useInputState';

const NoteForm = ({ saveNote }) => {
  const { value, onChange, reset } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveNote(value);
        reset();
      }}
    >
      <input placeholder="Add note" onChange={onChange} value={value} />
    </form>
  );
};

export default NoteForm;