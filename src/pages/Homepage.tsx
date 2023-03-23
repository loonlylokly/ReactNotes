import { useCallback, useEffect, useMemo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextEditor from '../components/TextEditor/TextEditor';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Homepage.module.scss';
import { INote } from '../types/INote';
import HomeContext from '../context/HomeContext';

function Homepage() {
  const [notes, setNotes] = useState<INote[]>(JSON.parse(localStorage.getItem('notes') as string));
  const [selectedNote, setSelectedNote] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const onAddNote = useCallback(() => {
    const newNote: INote = {
      id: uuidv4(),
      title: 'New Note',
      tags: [],
      text: '',
    };
    setNotes((prev) => [newNote, ...prev]);
  }, []);

  const onUpdateNote = useCallback(
    (updatedNote: INote) => {
      const updateNotesArray = notes.map((note) => {
        if (note.id === selectedNote) {
          return updatedNote;
        }
        return note;
      });
      setNotes(updateNotesArray);
    },
    [notes, selectedNote]
  );

  const onDeleteNote = useCallback(
    (idDelete: string) => {
      setNotes(notes.filter((note) => note.id !== idDelete));
    },
    [notes]
  );

  const onDeleteTag = useCallback(
    (idDeleteNote: string, idDeleteTag: string) => {
      setNotes(
        notes.map((note) => {
          const tmp = note;
          if (note.id === idDeleteNote) {
            tmp.tags = note.tags.filter((tag) => tag.id !== idDeleteTag);
          }
          return tmp;
        })
      );
    },
    [notes]
  );
  const getActiveNote = useCallback(() => {
    return (
      notes.find((note) => note.id === selectedNote) || { id: '', title: '', tags: [], text: '' }
    );
  }, [notes, selectedNote]);

  const globalContextValue = useMemo(
    () => ({
      notes,
      setNotes,
      onAddNote,
      onDeleteNote,
      selectedNote,
      setSelectedNote,
      getActiveNote,
      onUpdateNote,
      onDeleteTag,
    }),
    [
      notes,
      setNotes,
      onAddNote,
      onDeleteNote,
      selectedNote,
      setSelectedNote,
      getActiveNote,
      onUpdateNote,
      onDeleteTag,
    ]
  );

  return (
    <div className={styles.pageContainer}>
      <HomeContext.Provider value={globalContextValue}>
        <Sidebar />
        <TextEditor />
      </HomeContext.Provider>
    </div>
  );
}

export default Homepage;
