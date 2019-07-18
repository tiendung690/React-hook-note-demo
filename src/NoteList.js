import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
  return (
    <ul>
      {notes.map((note, index) => {
        return (
          <>
            <li key={index.toString()}>{note}</li>
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <button
              onClick={() => {
                deleteNote(index);
              }}
            >
              Delete
            </button>
          </>
        );
      })}
    </ul>
  );
};

export default NoteList;