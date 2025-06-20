const Review = require('../models/Review');
const { updateBookRating } = require('./bookController');

const getReviews = async (req, res) => {
  try {
    const { bookId } = req.query;
    const reviews = await Review.find({ bookId }).sort({ createdAt: -1 });
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const { bookId, rating, comment } = req.body;
    const userId = req.user._id;
    const userName = req.user.name;

    // Check if user already reviewed this book
    const existingReview = await Review.findOne({ bookId, userId });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this book' });
    }

    const review = new Review({
      bookId,
      userId,
      userName,
      rating,
      comment
    });

    await review.save();
    
    // Update book rating
    await updateBookRating(bookId);

    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  getReviews,
  createReview
};