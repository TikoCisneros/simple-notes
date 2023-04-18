import { useEffect, useState } from 'react';

import { INote } from '@simple-notes/models';
import { Note } from './components';

export function App() {
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    fetch('/api/notes')
      .then((t) => t.json())
      .then((res) => {
        setNotes(res);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '2rem',
      }}
    >
      {notes.map((note: INote, index) => (
        <Note key={note.id} data={note} index={index} />
      ))}
    </div>
  );
}

export default App;
