import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store } from "./store"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import BookListPage from "./pages/BookListPage"
import BookDetailsPage from "./pages/BookDetailsPage"
import UserProfilePage from "./pages/UserProfilePage"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import "./index.css"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BookListPage />} />
              <Route path="/books/:id" element={<BookDetailsPage />} />
              <Route path="/profile" element={<UserProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  )
}

export default App
