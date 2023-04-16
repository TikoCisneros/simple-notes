import styles from './note.module.scss';

/* eslint-disable-next-line */
export interface NoteProps {}

export function Note(props: NoteProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Note!</h1>
    </div>
  );
}

export default Note;
