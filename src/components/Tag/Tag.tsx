/* eslint-disable react/function-component-definition */
import { FC } from 'react';
import { ITag } from '../../types/ITag';
import styles from './Tag.module.scss';

interface TagProps {
  tag: ITag;
}

const Tag: FC<TagProps> = ({ tag }) => {
  return (
    <div className={`${styles.note}`}>
      <p>{tag.name}</p>
    </div>
  );
};

export default Tag;
