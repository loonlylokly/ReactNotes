import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextEditor from '../components/TextEditor/TextEditor';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Homepage.module.scss';
import { INote } from '../types/INote';

function Homepage() {
  const [notes, setNotes] = useState<INote[]>(JSON.parse(localStorage.notes) || []);
  const [selectedNote, setSelectedNote] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = () => {
    const newNote: INote = {
      id: uuidv4(),
      title: 'New Note',
      tags: [],
      text: '',
    };
    setNotes([newNote, ...notes]);
  };

  const onUpdateNote = (updatedNote: INote) => {
    const updateNotesArray = notes.map((note) => {
      if (note.id === selectedNote) {
        // if (updatedNote.text[updatedNote.text.length - 1] === '#') {
        //   setNewTag(note.text.length - 1);
        //   console.log('1111');
        // }
        // console.log(updatedNote.text[updatedNote.text.length - 1], newTag);
        // if (
        //   (updatedNote.text[updatedNote.text.length - 1] === ' ' ||
        //     updatedNote.text[updatedNote.text.length - 1] === '\n') &&
        //   newTag !== -1
        // ) {
        //   setNewTag(-1);
        //   updatedNote.tags.push({
        //     id: uuidv4(),
        //     name: note.text.slice(newTag, note.text.length - 1),
        //   });
        //   console.log('2222');
        // }
        // console.log(updatedNote);
        return updatedNote;
      }
      return note;
    });
    // console.log(updateNotesArray);
    setNotes(updateNotesArray);
  };

  const onDeleteNote = (idDelete: string) => {
    setNotes(notes.filter((note) => note.id !== idDelete));
  };

  const getActiveNote = () => {
    return (
      notes.find((note) => note.id === selectedNote) || { id: '', title: '', tags: [], text: '' }
    );
  };

  return (
    <div className={styles.pageContainer}>
      <Sidebar
        notes={notes}
        onAddNote={onAddNote}
        onDeleteNote={onDeleteNote}
        selectedNote={selectedNote}
        setSelectedNote={setSelectedNote}
      />
      <TextEditor activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  );
}

export default Homepage;
