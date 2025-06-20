const express = require('express');
const { getAllBooks, getBookById, createBook } = require('../controllers/bookController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', auth, createBook);

module.exports = router;