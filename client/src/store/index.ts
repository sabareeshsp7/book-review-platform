import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import booksReducer from './booksSlice'
import reviewsReducer from './reviewsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
