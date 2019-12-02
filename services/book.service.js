const BooksConnection = require('../db/book.database')

const getBooks = async (page) => {
  try {
    const limit = 10
    const offset = page * limit

    const books = await BooksConnection.loadBooks(limit, offset)
    const totalBooks = await BooksConnection.countBooks()

    const response = {
      results: books,
      total: totalBooks,
      total_pages: Math.ceil(totalBooks / limit)
    }
    return response
  } catch (e) {
    throw new Error(e.message)
  }
}

const getBookById = async (id) => {
  try {
    return await BooksConnection.getBookById(id)
  } catch (e) {
    throw new Error(e.message)
  }
}

const searchBooks = async (query, page, startDate, dueDate) => {
  try {
    const limit = 10
    const offset = (page - 1) * limit

    const booksFounded = await BooksConnection.searchBooks(query, limit, offset, startDate, dueDate)
    const totalBooksFounded = await BooksConnection.countSearchBooks(query, startDate, dueDate)

    const response = {
      results: booksFounded,
      total: totalBooksFounded,
      total_pages: Math.ceil(totalBooksFounded / limit)
    }
    return response
  } catch (e) {
    throw new Error(e.message)
  }
}

module.exports = {
  getBooks,
  searchBooks,
  getBookById
}
