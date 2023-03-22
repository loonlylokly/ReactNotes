/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import List from '../List';
import Tag from '../Tag/Tag';
import { ITag } from '../../types/ITag';
import { INote } from '../../types/INote';
import styles from './Note.module.scss';

interface NoteProps {
  note: INote;
}

const Note: FC<NoteProps> = ({ note }) => {
  return (
    <div className={`${styles.note}`}>
      <h3>{note.title}</h3>
      <p>{note.text}</p>
      <List
        classNameList={styles.list}
        items={note.tags}
        renderItem={(tag: ITag) => <Tag key={tag.id} tag={tag} />}
      />
    </div>
  );
};

export default Note;
