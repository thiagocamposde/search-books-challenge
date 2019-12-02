const express = require('express')

const BooksController = require('../controllers/book.controller')

const router = express.Router()

router.get('/books', BooksController.getBooks)

router.get('/book/search', BooksController.searchBooks)

router.get('/book/:id', BooksController.getBookById)

module.exports = router
