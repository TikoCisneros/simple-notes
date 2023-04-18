import { INote } from '@simple-notes/models';
import { getOddEvenLabel } from '../../utils/comparison';
import styles from './Note.module.scss';

import { useDebouncedStateCallback } from '../../hooks';

const EDIT_DELAY = 1000;
const CHARACTERS_MAX_LENGTH = 120;

export interface NoteProps {
  data: INote;
  index: number;
}

function Note({ data: { text, color }, index }: NoteProps) {
  const {
    state: note,
    setState: setNote,
    debouncedCallback: debouncedNoteCallback,
  } = useDebouncedStateCallback(text, EDIT_DELAY, () => {
    console.log(note);
  });

  const setNoteTextHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(value);
    debouncedNoteCallback();
  };

  return (
    <div
      className={`${styles.note} ${styles[`note--${color}`]} ${
        styles[`note--${getOddEvenLabel(index)}`]
      }`}
    >
      <textarea
        value={note}
        className={styles.note__text}
        onChange={setNoteTextHandler}
        cols={20}
        rows={6}
        maxLength={CHARACTERS_MAX_LENGTH}
      ></textarea>
    </div>
  );
}

export default Note;
