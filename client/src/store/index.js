import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import booksSlice from './booksSlice';
import reviewsSlice from './reviewsSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    books: booksSlice,
    reviews: reviewsSlice,
  },
});

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {typeof store.dispatch} AppDispatch */
export const RootState = {};
export const AppDispatch = {};