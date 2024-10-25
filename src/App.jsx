import React from "react";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import { getInitialData } from "./utils/data";

export default function App() {
  const [noteList, setNoteList] = useState(getInitialData());
  const [filteredNotes, setFilteredNotes] = useState(noteList);

  const updateFilteredNotes = (notes = noteList) => {
    setFilteredNotes(notes);
  };

  const addNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title,
      body,
      createdAt: new Date().toISOString(),
      archived: false
    };
    const updatedNotes = [...noteList, newNote];
    setNoteList(updatedNotes);
    updateFilteredNotes(updatedNotes);
  };

  const onDeleteHandler = (id) => {
    const updatedNotes = noteList.filter(note => note.id !== id);
    setNoteList(updatedNotes);
    updateFilteredNotes(updatedNotes);
  };

  const onArchiveHandler = (id) => {
    const updatedNotes = noteList.map(note =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    setNoteList(updatedNotes);
    updateFilteredNotes(updatedNotes);
  };

  const searchHandler = (value) => {
    if (value.trim() === '') {
      updateFilteredNotes(noteList);
    } else {
      const query = noteList.filter(note =>
        note.title.toLowerCase().includes(value.toLowerCase())
      );
      updateFilteredNotes(query);
    };
  };

  return (
    <div className='font-opensans'>
      <Navbar><Search onSearch={searchHandler} /></Navbar>

      <NoteForm addNotes={addNoteHandler} />

      <NoteList
        title="Your Notes"
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        isArchived={false}
      />

      <NoteList
        title="Archived"
        notes={filteredNotes}
        onDelete={onDeleteHandler}
        onArchive={onArchiveHandler}
        isArchived={true}
      />
    </div>
  );
};