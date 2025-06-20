const Book = require('../models/Book');
const Review = require('../models/Review');

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, description, coverImage } = req.body;
    
    const book = new Book({
      title,
      author,
      description,
      coverImage
    });

    await book.save();
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateBookRating = async (bookId) => {
  try {
    const reviews = await Review.find({ bookId });
    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;

    await Book.findByIdAndUpdate(bookId, {
      rating: averageRating,
      reviewCount: reviews.length
    });
  } catch (error) {
    console.error('Error updating book rating:', error);
  }
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBookRating
};