import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContentEditable from 'react-contenteditable';
import { ITag } from 'types/ITag';
import List from '../List';
import Tag from '../Tag/Tag';
import styles from './TextEditor.module.scss';
import HomeContext from '../../context/HomeContext';

function TextEditor() {
  const [newTag, setNewTag] = useState(-1);
  const context = useContext(HomeContext);
  if (!context) return null;
  const { getActiveNote, onUpdateNote, onDeleteTag } = context;
  const activeNote = getActiveNote();

  const checkNewTag = (value: string, length: number) => {
    if (value[length - 1] === '#') {
      setNewTag(length - 1);
    }
    if (newTag !== -1) {
      if (value.slice(length - 6, length) === '&nbsp;') {
        setNewTag(-1);
        return { id: uuidv4(), name: value.slice(newTag, length - 6) };
      }
      if (value.slice(length - 4, length) === '<br>') {
        setNewTag(-1);
        return { id: uuidv4(), name: value.slice(newTag, length - 8) };
      }
    }
    return { id: '', name: '' };
  };

  const onEditField = (key: 'title' | 'text', value: string) => {
    const updateTags = [...activeNote.tags];
    if (key === 'text') {
      const tag = checkNewTag(value, value.length);
      if (tag.id !== '') {
        updateTags.push(tag);
      }
    }
    onUpdateNote({
      ...activeNote,
      tags: updateTags,
      [key]: value,
    });
  };

  if (!activeNote.id) return <div className={styles.texteditor}>No active note</div>;

  return (
    <div className={styles.texteditor}>
      <ContentEditable
        innerRef={React.createRef()}
        html={activeNote.title}
        disabled={false}
        onChange={(e) => onEditField('title', e.target.value)}
        tagName="span"
        suppressContentEditableWarning
      />
      <ContentEditable
        className={styles.textNote}
        innerRef={React.createRef()}
        html={activeNote.text.replace(
          / #(\w+ )| #(\w+<br>)/g,
          `<span class="${styles.tag}">#$1</span>`
        )}
        disabled={false}
        onChange={(e) => onEditField('text', e.target.value)}
        tagName="span"
        suppressContentEditableWarning
      />
      <List
        classNameList={styles.list}
        items={activeNote.tags}
        renderItem={(tag: ITag) => <Tag key={tag.id} tag={tag} note={activeNote} />}
      />
    </div>
  );
}

export default TextEditor;
