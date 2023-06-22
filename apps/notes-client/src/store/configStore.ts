import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({
  reducer: [],
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
