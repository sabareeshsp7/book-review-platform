export interface User {
  id: string
  name: string
  email: string
  createdAt: string
}

export interface Book {
  _id: string
  title: string
  author: string
  description: string
  genre: string
  publishedDate: string
  isbn: string
  coverImage?: string
  averageRating: number
  rating: number
  totalReviews: number
  reviewCount: number
  createdAt: string
  updatedAt: string
}

export interface Review {
  _id: string
  bookId: string
  userId: string
  user: {
    name: string
    email: string
  }
  rating: number
  comment: string
  createdAt: string
  updatedAt: string
}

export interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  loading: boolean
  error: string | null
}

export interface BooksState {
  books: Book[]
  currentBook: Book | null
  isLoading: boolean
  loading: boolean
  error: string | null
}

export interface ReviewsState {
  reviews: Review[]
  isLoading: boolean
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  name: string
  email: string
  password: string
}

export interface BookFormData {
  title: string
  author: string
  description: string
  genre: string
  publishedDate: string
  isbn: string
  coverImage?: string
}

export interface ReviewFormData {
  rating: number
  comment: string
}