import List from '../List';
import Note from '../Note/Note';
import { INote } from '../../types/INote';
import styles from './Sidebar.module.scss';

function Sidebar() {
  const notes: INote[] = [
    {
      id: '1',
      title: 'Note1 Test',
      tags: [
        { id: '1', name: 'test1' },
        { id: '2', name: 'note1' },
      ],
      text: 'Text for first note test',
    },
    {
      id: '2',
      title: 'Note2 Test',
      tags: [
        { id: '1', name: 'test2' },
        { id: '2', name: 'note2' },
      ],
      text: 'Text for second note test',
    },
    {
      id: '3',
      title: 'Note3 Test',
      tags: [
        { id: '1', name: 'test3' },
        { id: '2', name: 'note3' },
      ],
      text: 'Text for third note test',
    },
  ];

  return (
    <div className={styles.sidebar}>
      <input type="search" placeholder="Search all notes and tags" />
      <List
        classNameList={styles.list}
        items={notes}
        renderItem={(note: INote) => <Note key={note.id} note={note} />}
      />
    </div>
  );
}

export default Sidebar;
