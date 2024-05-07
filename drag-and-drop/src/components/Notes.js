import React from "react";
import Note from "./Note";
import { useEffect } from "react";

const Notes = ({ notes = [], setNotes = () => {} }) => {
  useEffect(() => {
    //local storage logic
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);

      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = determineNewPosition();
        return { ...note, position };
      }
    });

    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
