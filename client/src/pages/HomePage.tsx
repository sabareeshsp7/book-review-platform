"use client"

import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import type { RootState } from "../store"
import { fetchBooks } from "../store/booksSlice"
import { Star, TrendingUp, BookOpen, Users } from "lucide-react"
import BookCard from "../components/BookCard"

const HomePage: React.FC = () => {
  const dispatch = useDispatch()
  const { books, loading } = useSelector((state: RootState) => state.books)

  useEffect(() => {
    dispatch(fetchBooks() as any)
  }, [dispatch])

  // Get featured books (top rated)
  const featuredBooks = books
    .slice()
    .sort((a, b) => b.averageRating - a.averageRating)
    .slice(0, 6)

  // Get recent books
  const recentBooks = books
    .slice()
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 4)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Discover Your Next Great Read
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join our community of book lovers. Read reviews, share your thoughts, and find your next favorite book.
            </p>
            <div className="space-x-4">
              <Link
                to="/books"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Books
              </Link>
              <Link
                to="/register"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <BookOpen className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">{books.length}+</h3>
              <p className="text-gray-600">Books Available</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">10K+</h3>
              <p className="text-gray-600">Active Readers</p>
            </div>
            <div className="flex flex-col items-center">
              <TrendingUp className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-3xl font-bold text-gray-800 mb-2">50K+</h3>
              <p className="text-gray-600">Reviews Written</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Books</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the highest-rated books from our community
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBooks.map((book) => (
                <Link key={book._id} to={`/books/${book._id}`}>
                  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                    <img
                      src={book.coverImage || '/placeholder-book.jpg'}
                      alt={book.title}
                      className="w-full h-64 object-cover"
                    />
                    
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                        {book.title}
                      </h3>
                      <p className="text-gray-600 mb-3 truncate">
                        by {book.author}
                      </p>
                      
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium">
                            {book.averageRating.toFixed(1)}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">
                          {book.totalReviews} reviews
                        </span>
                      </div>
                      
                      <p className="text-gray-700 text-sm line-clamp-2">
                        {book.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <Link
              to="/books"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Books
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Books Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Recently Added</h2>
            <p className="text-gray-600">
              Check out the latest additions to our library
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentBooks.map((book) => (
              <Link key={book._id} to={`/books/${book._id}`}>
                <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                  <img
                    src={book.coverImage || '/placeholder-book.jpg'}
                    alt={book.title}
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-4">
                    <h4 className="font-semibold text-gray-800 mb-1 truncate">
                      {book.title}
                    </h4>
                    <p className="text-gray-600 text-sm truncate">
                      {book.author}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
