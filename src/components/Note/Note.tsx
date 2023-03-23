/* eslint-disable react/function-component-definition */
import { Dispatch, FC, SetStateAction } from 'react';
import List from '../List';
import Tag from '../Tag/Tag';
import { ITag } from '../../types/ITag';
import { INote } from '../../types/INote';
import styles from './Note.module.scss';

type NoteProps = {
  note: INote;
  onDeleteNote: (idDelete: string) => void;
  selectedNote: string;
  setSelectedNote: Dispatch<SetStateAction<string>>;
};

const Note: FC<NoteProps> = ({ note, onDeleteNote, selectedNote, setSelectedNote }) => {
  return (
    <div
      className={`${styles.note} ${(note.id === selectedNote && styles.selected) || ''}`}
      onClick={() => setSelectedNote(note.id)}
      role="presentation"
    >
      <div className={styles.header}>
        <h3 className={styles.title}>{note.title}</h3>
        <button className={styles.delete} type="button" onClick={() => onDeleteNote(note.id)}>
          X
        </button>
      </div>
      <p className={styles.text}>
        {note.text.length > 30 ? `${note.text.slice(0, 30)}...` : note.text}
      </p>
      <List
        classNameList={styles.list}
        items={note.tags}
        renderItem={(tag: ITag) => <Tag key={tag.id} tag={tag} />}
      />
    </div>
  );
};

export default Note;
