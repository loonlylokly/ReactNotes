import { useContext } from 'react';
import List from '../List';
import Note from '../Note/Note';
import { INote } from '../../types/INote';
import styles from './Sidebar.module.scss';
import HomeContext from '../../context/HomeContext';

function Sidebar() {
  const context = useContext(HomeContext);
  if (!context) return null;
  const { notes, onAddNote, onDeleteNote, selectedNote, setSelectedNote } = context;
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
