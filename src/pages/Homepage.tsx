import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextEditor from '../components/TextEditor/TextEditor';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Homepage.module.scss';
import { INote } from '../types/INote';

function Homepage() {
  const [notes, setNotes] = useState<INote[]>([]);

  const onAddNote = () => {
    const newNote: INote = {
      id: uuidv4(),
      title: 'New Note',
      tags: [],
      text: '',
    };
    setNotes([newNote, ...notes]);
  };

  const onDeleteNote = (idDelete: string) => {
    setNotes(notes.filter((note) => note.id !== idDelete));
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar notes={notes} onAddNote={onAddNote} onDeleteNote={onDeleteNote} />
      <TextEditor />
    </div>
  );
}

export default Homepage;
