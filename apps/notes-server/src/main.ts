/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';

import cors from 'cors';
import { uuid } from 'uuidv4';

import { Note } from '@simple-notes/models';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to notes-server!' });
});

let notes: Note[] = [
  {
    id: '412223f9-7dab-46bb-b365-bba59a6dc94b',
    text: 'Start creating Redux application',
    stared: true,
  },
  {
    id: 'f9b78e88-e7d9-4eb1-842c-682b22742624',
    text: 'Design redux store',
    stared: false,
  },
  {
    id: '7d530cf9-c776-46e4-bd00-b51e923197cd',
    text: 'Define all actions list',
    stared: false,
  },
];

app.get('/api', (_req, res) => {
  res.send({ message: 'Welcome to notes-api!' });
});

// Get all notes
app.get('/api/notes', (_req, res) => {
  res.json(notes);
});

// Add new Note
app.post('/api/notes', (req, res) => {
  const newNote = { id: uuid(), ...req.body, completed: false };
  notes.push(newNote);

  console.log(notes);
  res.json(newNote);
});

// Change note stared property
app.patch('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  const index = notes.findIndex((task) => task.id === id);
  const note = notes[index];
  note.stared = req.body.stared;

  res.json(note);
});

// Delete Specific note
app.delete('/api/notes/:id', (req, res) => {
  const id = req.params.id;
  notes = notes.filter((note) => note.id !== id);

  res.json({ id });
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
