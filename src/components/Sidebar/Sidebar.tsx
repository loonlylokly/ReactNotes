import React, { useContext, useState } from 'react';
import List from '../List';
import Note from '../Note/Note';
import { INote } from '../../types/INote';
import styles from './Sidebar.module.scss';
import HomeContext from '../../context/HomeContext';

function Sidebar() {
  console.log('render Sidebar');
  const [notesFiltred, setNotesFiltred] = useState<INote[]>([]);
  const context = useContext(HomeContext);
  if (!context) return null;
  const { notes, onAddNote, onDeleteNote, selectedNote, setSelectedNote } = context;

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setNotesFiltred([...notes]);
      if (!((e.target as HTMLInputElement).value === '')) {
        setNotesFiltred(
          notes.filter((note) => {
            return Boolean(
              note.tags.filter((tag) => {
                return !(e.target as HTMLInputElement).value.includes(tag.name.slice(1));
              }).length
            );
          })
        );
      }
    }
  };

  // setNotesFiltred([...notes]);

  return (
    <aside className={styles.sidebar}>
      <button className={styles.add} type="button" onClick={onAddNote}>
        Add Note
      </button>
      <input
        className={styles.search}
        type="search"
        placeholder="Search notes by tags"
        onKeyUp={handleKeyPress}
      />
      <List
        classNameList={styles.list}
        items={(() => {
          console.log(notesFiltred.length ? notesFiltred : notes);
          return notesFiltred.length ? notesFiltred : notes;
        })()}
        renderItem={(note: INote) => (
          <Note
            key={note.id}
            note={note}
            onDeleteNote={onDeleteNote}
            selectedNote={selectedNote}
            setSelectedNote={setSelectedNote}
          />
        )}
      />
    </aside>
  );
}

export default React.memo(Sidebar);
