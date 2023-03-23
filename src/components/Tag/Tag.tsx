/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { ITag } from '../../types/ITag';
import styles from './Tag.module.scss';

type TagProps = {
  tag: ITag;
};

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <div className={styles.tag}>
      <p className={styles.text}>{tag.name}</p>
      <button className={styles.delete} type="button">
        X
      </button>
    </div>
  );
};

export default Tag;
