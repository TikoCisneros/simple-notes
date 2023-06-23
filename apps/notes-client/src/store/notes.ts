import { createSlice } from '@reduxjs/toolkit';
import { INote } from '@simple-notes/models';

const INITIAL_STATE: INote[] = [];

const notesSlide = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE,
  reducers: {},
});

export default notesSlide.reducer;
