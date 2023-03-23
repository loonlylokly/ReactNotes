/* eslint-disable react/function-component-definition */
import { FC, useContext } from 'react';
import { INote } from 'types/INote';
import { ITag } from '../../types/ITag';
import styles from './Tag.module.scss';
import HomeContext from '../../context/HomeContext';

type TagProps = {
  tag: ITag;
  note: INote;
};

const Tag: FC<TagProps> = ({ tag, note }) => {
  const context = useContext(HomeContext);
  if (!context) return null;
  const { onDeleteTag } = context;
  return (
    <div className={styles.tag}>
      <p className={styles.text}>{tag.name}</p>
      <button
        className={styles.delete}
        type="button"
        onClick={() => {
          onDeleteTag(note.id, tag.id);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Tag;
