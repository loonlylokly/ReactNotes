import styles from './TextEditor.module.scss';

function TextEditor() {
  return (
    <div className={styles.texteditor}>
      <input id="title" type="text" placeholder="Name" />
      <textarea id="textNote" placeholder="Note something..." />
    </div>
  );
}

export default TextEditor;
