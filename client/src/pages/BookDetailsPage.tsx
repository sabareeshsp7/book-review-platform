"use client"

import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from "../store"
import { fetchBookById } from "../store/booksSlice"
import type { Book } from "../types"
import { fetchReviews } from "../store/reviewsSlice"
import ReviewForm from "../components/ReviewForm"
import { Star, Calendar } from "lucide-react"

const BookDetailsPage: React.FC = () => {
  // Fix: Remove type assertions and use proper state properties
  const { currentBook, loading: bookLoading } = useSelector((state: RootState) => state.books)
  const { reviews, loading: reviewsLoading } = useSelector((state: RootState) => state.reviews)
  const { user } = useSelector((state: RootState) => state.auth)
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      dispatch(fetchBookById(id) as any)
      dispatch(fetchReviews(id) as any)
    }
  }, [dispatch, id])

  const handleReviewAdded = () => {
    if (id) {
      dispatch(fetchReviews(id) as any)
    }
  }

  if (bookLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!currentBook) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Book not found</h2>
          <button
            onClick={() => navigate('/books')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Back to Books
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Book Details */}
        <div className="md:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src={currentBook.coverImage || '/placeholder-book.jpg'}
                  alt={currentBook.title}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:w-2/3">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  {currentBook.title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">
                  by {currentBook.author}
                </p>
                
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-semibold">{currentBook.averageRating.toFixed(1)}</span>
                    <span className="text-gray-600">({currentBook.totalReviews} reviews)</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">
                    Published: {new Date(currentBook.publishedDate).toLocaleDateString()}
                  </span>
                </div>

                <div className="mb-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    {currentBook.genre}
                  </span>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {currentBook.description}
                  </p>
                </div>

                <div className="text-sm text-gray-500">
                  <p>ISBN: {currentBook.isbn}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div>
          {user && (
            <div className="mb-6">
              <ReviewForm bookId={currentBook._id} onReviewAdded={handleReviewAdded} />
            </div>
          )}

          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">Reviews</h3>
            
            {reviewsLoading ? (
              <div className="flex justify-center py-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : reviews.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No reviews yet. Be the first to review this book!
              </p>
            ) : (
              <div className="space-y-4">
                {reviews.map((review) => (
                  <div key={review._id} className="border-b border-gray-200 pb-4 last:border-b-0">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{review.user.name}</span>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-4 w-4 ${
                              star <= review.rating
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{review.comment}</p>
                    <p className="text-sm text-gray-500">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsPage
