import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import NotesReducer from './notes';
import apiMiddleware from './middleware/api';

const store = configureStore({
  reducer: NotesReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    logger,
    apiMiddleware,
  ],
});

export type TStore = typeof store;
export type TRootState = ReturnType<typeof store.getState>;
export type TDispatch = typeof store.dispatch;

export default store;
