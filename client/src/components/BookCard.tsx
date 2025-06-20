import type React from "react"
import { Link } from "react-router-dom"
import { Star } from "lucide-react"

interface Book {
  _id: string
  title: string
  author: string
  description: string
  coverImage: string
  rating: number
  reviewCount: number
}

interface BookCardProps {
  book: Book
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={book.coverImage || "/placeholder.svg?height=300&width=200"}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{book.title}</h3>
        <p className="text-gray-600 mb-2">by {book.author}</p>
        <p className="text-gray-700 text-sm mb-3 line-clamp-3">{book.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">
              {book.rating.toFixed(1)} ({book.reviewCount} reviews)
            </span>
          </div>
          <Link
            to={`/books/${book._id}`}
            className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BookCard
