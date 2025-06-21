# 📚 Book Review Platform

A full-stack web application for book lovers to discover, review, and rate books. Built with React.js frontend and Node.js backend with MongoDB database.



![image](https://github.com/user-attachments/assets/256be8da-c540-4b25-a21e-cc4d71f3b7bf)


## 🌟 Features

- **User Authentication** - Register, login, and manage user profiles
- **Book Discovery** - Browse and search through a collection of books
- **Review System** - Write and read book reviews with star ratings
- **Responsive Design** - Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates** - Dynamic rating calculations based on user reviews
- **User Profiles** - Personal dashboard with review history and statistics


## 🛠️ Tech Stack

### Frontend

- **React.js** - UI library for building user interfaces
- **React Router** - Client-side routing
- **Redux Toolkit** - State management
- **Axios** - HTTP client for API requests
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons


### Backend

- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing


### Development Tools

- **Nodemon** - Auto-restart server during development
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management


## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (v6.0.0 or higher) - Comes with Node.js
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/atlas)
- **Git** - [Download here](https://git-scm.com/)


### Check your installations:

```shellscript
node --version
npm --version
git --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository

```shellscript
git clone https://github.com/yourusername/book-review-platform.git
cd book-review-platform
```

### 2. Project Structure

```plaintext
book-review-platform/
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store and slices
│   │   ├── api/            # API configuration
│   │   └── App.tsx         # Main App component
│   ├── package.json
│   └── tailwind.config.js
├── server/                 # Node.js backend
│   ├── controllers/        # Route controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── scripts/            # Database seeding scripts
│   ├── package.json
│   └── index.js           # Server entry point
├── README.md
└── .gitignore
```

## 🖥️ Frontend Setup

### 1. Navigate to Client Directory

```shellscript
cd client
```

### 2. Install Dependencies

```shellscript
npm install
```

### 3. Install Additional Dependencies

```shellscript
# Core dependencies
npm install react-router-dom axios @reduxjs/toolkit react-redux

# UI and styling
npm install lucide-react tailwindcss autoprefixer postcss

# Development dependencies
npm install --save-dev @types/react @types/react-dom typescript
```

### 4. Initialize Tailwind CSS

```shellscript
npx tailwindcss init -p
```

### 5. Environment Variables

Create a `.env` file in the `client` directory:

```plaintext
REACT_APP_API_URL=http://localhost:5000/api
```

### 6. Start Development Server

```shellscript
npm start
```

The frontend will run on `http://localhost:3000`

## 🔧 Backend Setup

### 1. Navigate to Server Directory

```shellscript
cd ../server
```

### 2. Initialize Package.json

```shellscript
npm init -y
```

### 3. Install Dependencies

```shellscript
# Core dependencies
npm install express mongoose cors dotenv bcryptjs jsonwebtoken

# Development dependencies
npm install --save-dev nodemon
```

### 4. Environment Variables

Create a `.env` file in the `server` directory:

```plaintext
PORT=5000
MONGODB_URI=mongodb://localhost:27017/bookreview
JWT_SECRET=your_super_secret_jwt_key_here_make_it_long_and_complex
NODE_ENV=development
```

**Important:** Replace `your_super_secret_jwt_key_here_make_it_long_and_complex` with a strong, unique secret key.

### 5. Update Package.json Scripts

Add these scripts to your `server/package.json`:

```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "seed": "node scripts/seedData.js"
  }
}
```

## 🗄️ Database Setup

### Option 1: Local MongoDB

#### Install MongoDB

**On macOS (using Homebrew):**

```shellscript
brew tap mongodb/brew
brew install mongodb-community
```

**On Ubuntu:**

```shellscript
sudo apt-get update
sudo apt-get install -y mongodb
```

**On Windows:**
Download and install from [MongoDB Download Center](https://www.mongodb.com/try/download/community)

#### Start MongoDB Service

**macOS:**

```shellscript
brew services start mongodb/brew/mongodb-community
```

**Ubuntu:**

```shellscript
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:**
MongoDB should start automatically as a service.

#### Verify MongoDB Installation

```shellscript
mongo --version
```

### Option 2: MongoDB Atlas (Cloud)

1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Create a database user
5. Whitelist your IP address
6. Get your connection string
7. Update your `.env` file:


```plaintext
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/bookreview?retryWrites=true&w=majority
```

### Seed the Database

```shellscript
cd server
npm run seed
```

This will populate your database with sample books.

## 🏃‍♂️ Running the Application

### 1. Start the Backend Server

```shellscript
cd server
npm run dev
```

You should see:

```plaintext
Connected to MongoDB
Server running on port 5000
```

### 2. Start the Frontend (New Terminal)

```shellscript
cd client
npm start
```

You should see:

```plaintext
Compiled successfully!
Local:            http://localhost:3000
```

### 3. Access the Application

Open your browser and navigate to `http://localhost:3000`

## 📱 Usage Guide

![image](https://github.com/user-attachments/assets/2d3f173c-1cbb-49f9-95d9-779662089282)


### User Registration & Authentication

1. **Register**: Navigate to `/register` to create a new account
2. **Login**: Use `/login` to access your account
3. **Profile**: View and edit your profile at `/profile`


### Browsing Books

1. **Home Page**: View featured books and platform statistics
2. **All Books**: Browse the complete collection at `/books`
3. **Search**: Use the search bar to find books by title or author
4. **Sort**: Sort books by title, author, or rating


### Writing Reviews

1. **Book Details**: Click on any book to view its details
2. **Write Review**: Logged-in users can write reviews with star ratings
3. **View Reviews**: Read what other users think about the book


## 🔧 API Endpoints

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login


### Books

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book (authenticated)


### Reviews

- `GET /api/reviews?bookId=:id` - Get reviews for a book
- `POST /api/reviews` - Create new review (authenticated)


### Users

- `GET /api/users/:id` - Get user profile
- `PUT /api/users/profile` - Update user profile (authenticated)


## 🚀 Deployment

### Frontend Deployment (Vercel)

1. **Prepare for deployment:**

```shellscript
cd client
npm run build
```


2. **Deploy to Vercel:**

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Set build command: `npm run build`
5. Set output directory: `build`
6. Add environment variable: `REACT_APP_API_URL=https://your-backend-url.com/api`





### Backend Deployment (Render/Heroku)

#### Using Render:

1. Go to [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Configure:

1. Build Command: `npm install`
2. Start Command: `npm start`
3. Environment Variables:

```plaintext
MONGODB_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret
PORT=10000
NODE_ENV=production
```







#### Using Heroku:

```shellscript
# Install Heroku CLI
npm install -g heroku

# Login to Heroku
heroku login

# Create Heroku app
heroku create your-app-name

# Set environment variables
heroku config:set MONGODB_URI=your_mongodb_connection_string
heroku config:set JWT_SECRET=your_jwt_secret
heroku config:set NODE_ENV=production

# Deploy
git push heroku main
```

## 🧪 Testing

### Run Frontend Tests

```shellscript
cd client
npm test
```

### Test API Endpoints

You can test the API using tools like:

- **Postman** - [Download here](https://www.postman.com/)
- **Insomnia** - [Download here](https://insomnia.rest/)
- **curl** - Command line tool


Example API test:

```shellscript
# Test user registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","password":"password123"}'
```

## 🐛 Troubleshooting

### Common Issues

#### 1. MongoDB Connection Error

```plaintext
Error: connect ECONNREFUSED 127.0.0.1:27017
```

**Solution:** Make sure MongoDB is running

```shellscript
# macOS
brew services start mongodb/brew/mongodb-community

# Ubuntu
sudo systemctl start mongod
```

#### 2. Port Already in Use

```plaintext
Error: listen EADDRINUSE: address already in use :::5000
```

**Solution:** Kill the process using the port

```shellscript
# Find process using port 5000
lsof -ti:5000

# Kill the process
kill -9 <PID>
```

#### 3. CORS Error

```plaintext
Access to fetch at 'http://localhost:5000/api/books' from origin 'http://localhost:3000' has been blocked by CORS policy
```

**Solution:** Ensure CORS is properly configured in your backend `index.js`

#### 4. JWT Token Issues

```plaintext
Error: Invalid token
```

**Solution:** Check if JWT_SECRET is set in your `.env` file and tokens are being sent correctly

### Environment Variables Checklist

**Frontend (.env):**

- ✅ `REACT_APP_API_URL`


**Backend (.env):**

- ✅ `PORT`
- ✅ `MONGODB_URI`
- ✅ `JWT_SECRET`
- ✅ `NODE_ENV`


## 📚 Additional Resources

### Learning Resources

- [React Documentation](https://reactjs.org/docs)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)


### Tools & Extensions

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
- [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)
- [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI for MongoDB


## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/yourusername)


## 🙏 Acknowledgments

- Thanks to all the open-source libraries that made this project possible
- Book cover images from [Unsplash](https://unsplash.com)
- Icons from [Lucide](https://lucide.dev)


## 📞 Support

If you have any questions or run into issues, please:

1. Check the [Troubleshooting](#-troubleshooting) section
2. Search existing [GitHub Issues](https://github.com/yourusername/book-review-platform/issues)
3. Create a new issue if your problem isn't covered


---

**Happy Reading! 📖✨**
