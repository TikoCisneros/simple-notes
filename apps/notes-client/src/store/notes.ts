import { CaseReducer, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { INote } from '@simple-notes/models';

export type TNotesState = INote[];

const INITIAL_STATE: TNotesState = [];

const populateNotes: CaseReducer<TNotesState, PayloadAction<TNotesState>> = (
  state,
  action
) => {
  state = action.payload;
};

const addNote: CaseReducer<TNotesState, PayloadAction<INote>> = (
  state,
  action
) => {
  state = [...state, action.payload];
};

const updateNote: CaseReducer<TNotesState, PayloadAction<INote>> = (
  state,
  action
) => {
  const index = state.findIndex(({ id }) => id === action.payload.id);
  state[index] = action.payload;
};

const removeNote: CaseReducer<TNotesState, PayloadAction<INote>> = (
  state,
  action
) => {
  const index = state.findIndex(({ id }) => id === action.payload.id);
  state.splice(index, 1);
};

const notesSlide = createSlice({
  name: 'notes',
  initialState: INITIAL_STATE,
  reducers: {
    populateNotes,
    addNote,
    updateNote,
    removeNote,
  },
});

export default notesSlide.reducer;
