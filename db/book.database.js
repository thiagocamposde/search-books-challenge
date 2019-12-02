const { pool } = require('../config/env/config')

const loadBooks = async (limit, offset) => {
  const results = await pool.query(`SELECT * FROM books OFFSET ${offset} LIMIT ${limit}`)
  return results.rows
}

const getBookById = async (id) => {
  const results = await pool.query(`SELECT * FROM books b WHERE b.id=${id} `)

  return results.rows[0]
}

const countBooks = async () => {
  const results = await pool.query('SELECT count(*) AS total FROM books')
  return results.rows[0].total
}

const searchBooks = async (query, limit, offset, startDate, dueDate) => {
  let yearFilter = ''
  if (startDate && dueDate) {
    yearFilter = ` and b.ano between ${startDate} and ${dueDate} `
  }

  const results = await pool.query(
    `SELECT * FROM books b 
    WHERE (b.titulo LIKE '%${query}%' 
    OR b.autor LIKE '%${query}%' 
    OR b.isbn LIKE '%${query}%')
    ${yearFilter}
    OFFSET ${offset} LIMIT ${limit}`)

  return results.rows
}

const countSearchBooks = async (query, startDate, dueDate) => {
  let yearFilter = ''
  if (startDate && dueDate) {
    yearFilter = ` and b.ano between ${startDate} and ${dueDate} `
  }

  const results = await pool.query(
    `SELECT count(*) AS total 
    FROM books b 
    WHERE (b.titulo LIKE '%${query}%' 
    OR b.autor LIKE '%${query}%' 
    OR b.isbn LIKE '%${query}%')
    ${yearFilter}`)

  return results.rows[0].total
}

module.exports = {
  loadBooks,
  countBooks,
  searchBooks,
  countSearchBooks,
  getBookById
}
