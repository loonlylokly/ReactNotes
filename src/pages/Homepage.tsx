import TextEditor from '../components/TextEditor/TextEditor';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Homepage.module.scss';

function Homepage() {
  return (
    <div className={styles.pageContainer}>
      <Sidebar />
      <TextEditor />
    </div>
  );
}

export default Homepage;
