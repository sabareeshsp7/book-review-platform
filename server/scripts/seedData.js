const mongoose = require('mongoose');
const Book = require('../models/Book');
require('dotenv').config();

const sampleBooks = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description: "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age in a South poisoned by virulent prejudice.",
    coverImage: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
    rating: 4.5,
    reviewCount: 0
  },
  {
    title: "1984",
    author: "George Orwell",
    description: "A dystopian social science fiction novel that follows the life of Winston Smith, a low-ranking member of 'the Party'.",
    coverImage: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=300&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 0
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description: "A romantic novel of manners written by Jane Austen. The novel follows the character development of Elizabeth Bennet.",
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
    rating: 4.3,
    reviewCount: 0
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description: "A classic American novel set in the Jazz Age that tells the story of Jay Gatsby's pursuit of the American Dream.",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
    rating: 4.2,
    reviewCount: 0
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    description: "A controversial novel originally published for adults, it has since become popular with adolescent readers.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
    rating: 3.8,
    reviewCount: 0
  },
  {
    title: "Lord of the Flies",
    author: "William Golding",
    description: "A novel about a group of British boys stuck on an uninhabited island and their disastrous attempt to govern themselves.",
    coverImage: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=300&h=400&fit=crop",
    rating: 4.1,
    reviewCount: 0
  }
];

const seedDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');

    // Insert sample books
    await Book.insertMany(sampleBooks);
    console.log('Sample books inserted successfully');

    mongoose.connection.close();
    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();