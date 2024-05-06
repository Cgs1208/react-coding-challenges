import React from "react";
import Note from "./Note";
import { useEffect } from "react";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  useEffect(() => {
    //local storage logic
    const savedNotes = [];

    const updatedNotes = notes.map((note) => {
      const savedNote = null;

      if (savedNote) {
        return {};
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
  }, [notes.length]);

  const determineNewPosition = () => {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  return (
    <div>
      {notes.map((note) => (
        <Note key={note.id} initialPos={note.position} content={note.text} />
      ))}
    </div>
  );
};

export default Notes;
