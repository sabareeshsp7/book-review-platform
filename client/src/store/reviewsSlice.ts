import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { Review } from "../types"

interface ReviewsState {
  reviews: Review[]
  isLoading: boolean
  loading: boolean // Add this property
  error: string | null
}

const initialState: ReviewsState = {
  reviews: [],
  isLoading: false,
  loading: false,
  error: null,
}

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (bookId: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/books/${bookId}/reviews`)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch reviews")
    }
  },
)

export const addReview = createAsyncThunk(
  "reviews/addReview",
  async ({ bookId, reviewData }: { bookId: string; reviewData: { rating: number; comment: string } }, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/books/${bookId}/reviews`, reviewData)
      return response.data
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Failed to add review")
    }
  },
)

const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch reviews cases
      .addCase(fetchReviews.pending, (state) => {
        state.isLoading = true
        state.loading = true
        state.error = null
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.reviews = action.payload
        state.error = null
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.error = action.payload as string
      })
      // Add review cases
      .addCase(addReview.pending, (state) => {
        state.isLoading = true
        state.loading = true
        state.error = null
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.reviews.push(action.payload)
        state.error = null
      })
      .addCase(addReview.rejected, (state, action) => {
        state.isLoading = false
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { clearError } = reviewsSlice.actions
export default reviewsSlice.reducer
