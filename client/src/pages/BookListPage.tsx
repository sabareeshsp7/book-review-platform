"use client"

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../store'
import { fetchBooks } from '../store/booksSlice'
import { Search, Star } from 'lucide-react'

const BookListPage: React.FC = () => {
  const dispatch = useDispatch()
  const { books, loading, error } = useSelector((state: RootState) => state.books)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortBy, setSortBy] = useState("title")

  useEffect(() => {
    dispatch(fetchBooks() as any)
  }, [dispatch])

  // Filter and sort books
  const filteredAndSortedBooks = books
    .filter(book => 
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title)
        case 'author':
          return a.author.localeCompare(b.author)
        case 'rating':
          return b.averageRating - a.averageRating
        case 'publishedDate':
          return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        default:
          return 0
      }
    })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading Books</h2>
          <p className="text-gray-600">{error}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Book Library</h1>
        
        {/* Search and Filter Controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search books or authors..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <select
            aria-label="Sort books by"
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="title">Sort by Title</option>
            <option value="author">Sort by Author</option>
            <option value="rating">Sort by Rating</option>
            <option value="publishedDate">Sort by Date</option>
          </select>
        </div>
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAndSortedBooks.map((book) => (
          <Link key={book._id} to={`/books/${book._id}`}>
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              <img
                src={book.coverImage || '/placeholder-book.jpg'}
                alt={book.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
                  {book.title}
                </h3>
                <p className="text-gray-600 mb-2 truncate">
                  by {book.author}
                </p>
                
                <div className="flex items-center justify-between mb-2">
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
                
                <div className="mb-2">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {book.genre}
                  </span>
                </div>
                
                <p className="text-gray-700 text-sm line-clamp-3">
                  {book.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredAndSortedBooks.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No books found matching your search criteria.
          </p>
        </div>
      )}
    </div>
  )
}

export default BookListPage
