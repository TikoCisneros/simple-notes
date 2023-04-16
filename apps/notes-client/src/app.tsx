import { useEffect, useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { Note } from '@simple-notes/models';

export function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch('/api/notes')
      .then((t) => t.json())
      .then((res) => {
        setNotes(res);
      });
  }, []);

  return (
    <ul>
      {notes.map(({ id, text }: Note) => (
        <li key={id}>{text}</li>
      ))}
    </ul>
  );
}

export default App;
