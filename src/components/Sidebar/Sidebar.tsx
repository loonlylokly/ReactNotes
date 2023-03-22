import List from '../List';
import Note from '../Note/Note';
import { INote } from '../../types/INote';
import styles from './Sidebar.module.scss';

type NoteProps = {
  notes: INote[];
  onAddNote: () => void;
  onDeleteNote: (idDelete: string) => void;
};

function Sidebar({ notes, onAddNote, onDeleteNote }: NoteProps) {
  return (
    <aside className={styles.sidebar}>
      <button type="button" onClick={onAddNote}>
        Add
      </button>
      <input type="search" placeholder="Search all notes and tags" />
      <List
        classNameList={styles.list}
        items={notes}
        renderItem={(note: INote) => <Note key={note.id} note={note} onDeleteNote={onDeleteNote} />}
      />
    </aside>
  );
}

export default Sidebar;
