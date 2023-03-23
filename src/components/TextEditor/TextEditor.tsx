import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { INote } from 'types/INote';
import { ITag } from 'types/ITag';
import List from '../List';
import Tag from '../Tag/Tag';
import styles from './TextEditor.module.scss';

type TextEditorProps = {
  activeNote: INote;
  onUpdateNote: (note: INote) => void;
};

function TextEditor({ activeNote, onUpdateNote }: TextEditorProps) {
  const [newTag, setNewTag] = useState(-1);

  const checkNewTag = (value: string, length: number) => {
    if (value[length - 1] === '#') {
      setNewTag(length - 1);
    }
    if ((value[length - 1] === ' ' || value[length - 1] === '\n') && newTag !== -1) {
      setNewTag(-1);
      return { id: uuidv4(), name: value.slice(newTag, length - 1) };
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
      <input
        id="title"
        type="text"
        placeholder="Name"
        value={activeNote.title}
        onChange={(e) => onEditField('title', e.target.value)}
      />
      <textarea
        className={styles.textNote}
        placeholder="Note something..."
        value={activeNote.text}
        onChange={(e) => onEditField('text', e.target.value)}
      />
      <List
        classNameList={styles.list}
        items={activeNote.tags}
        renderItem={(tag: ITag) => <Tag key={tag.id} tag={tag} />}
      />
    </div>
  );
}

export default TextEditor;
