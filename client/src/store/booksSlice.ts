import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { Book } from '../types'

interface BooksState {
  books: Book[]
  currentBook: Book | null
  isLoading: boolean
  loading: boolean // Add this property
  error: string | null
}

const initialState: BooksState = {
  books: [],
  currentBook: null,
  isLoading: false,
  loading: false,
  error: null,
}

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/books')
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch books')
    }
  }
)

export const fetchBookById = createAsyncThunk(
  'books/fetchBookById',
  async (bookId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/books/${bookId}`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch book')
    }
  }
)

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    clearCurrentBook: (state) => {
      state.currentBook = null
    },
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch books cases
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true
        state.loading = true
        state.error = null
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.books = action.payload
        state.error = null
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.error = action.payload as string
      })
      // Fetch book by ID cases
      .addCase(fetchBookById.pending, (state) => {
        state.isLoading = true
        state.loading = true
        state.error = null
      })
      .addCase(fetchBookById.fulfilled, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.currentBook = action.payload
        state.error = null
      })
      .addCase(fetchBookById.rejected, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearCurrentBook, clearError } = booksSlice.actions
export default booksSlice.reducer
