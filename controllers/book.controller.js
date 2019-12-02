const BookService = require('../services/book.service')

const getBooks = async (req, res, next) => {
  const page = req.query.page || 1

  try {
    const results = await BookService.getBooks(page)
    res.send(results)
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

const getBookById = async (req, res, next) => {
  const bookId = req.params.id
  try {
    const results = await BookService.getBookById(bookId)
    res.send(results)
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

const searchBooks = async (req, res, next) => {
  const page = req.query.page || 0
  const query = req.query.query || ''
  const startDate = req.query.startDate || ''
  const dueDate = req.query.dueDate || ''

  try {
    const results = await BookService.searchBooks(query, page, startDate, dueDate)
    res.send(results)
  } catch (e) {
    console.log(e.message)
    res.sendStatus(500) && next(e)
  }
}

module.exports = {
  getBooks,
  searchBooks,
  getBookById
}
