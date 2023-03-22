/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import List from '../List';
import Tag from '../Tag/Tag';
import { ITag } from '../../types/ITag';
import { INote } from '../../types/INote';
import styles from './Note.module.scss';

type NoteProps = {
  note: INote;
  onDeleteNote: (idDelete: string) => void;
};

const Note: FC<NoteProps> = ({ note, onDeleteNote }) => {
  return (
    <div className={`${styles.note}`}>
      <h3>{note.title}</h3>
      <button type="button" onClick={() => onDeleteNote(note.id)}>
        Delete
      </button>
      <p>{note.text && `${note.text.slice(0, 30)}...`}</p>
      <List
        classNameList={styles.list}
        items={note.tags}
        renderItem={(tag: ITag) => <Tag key={tag.id} tag={tag} />}
      />
    </div>
  );
};

export default Note;
