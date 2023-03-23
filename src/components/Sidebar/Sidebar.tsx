import { Dispatch, SetStateAction } from 'react';
import List from '../List';
import Note from '../Note/Note';
import { INote } from '../../types/INote';
import styles from './Sidebar.module.scss';

type NoteProps = {
  notes: INote[];
  onAddNote: () => void;
  onDeleteNote: (idDelete: string) => void;
  selectedNote: string;
  setSelectedNote: Dispatch<SetStateAction<string>>;
};

function Sidebar({ notes, onAddNote, onDeleteNote, selectedNote, setSelectedNote }: NoteProps) {
  return (
    <aside className={styles.sidebar}>
      <button className={styles.add} type="button" onClick={onAddNote}>
        Add Note
      </button>
      <input className={styles.search} type="search" placeholder="Search notes by tags" />
      <List
        classNameList={styles.list}
        items={notes}
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

export default Sidebar;
