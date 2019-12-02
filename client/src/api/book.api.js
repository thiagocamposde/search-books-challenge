import request from '../util/request'

export const getBooks = async (page) => {
  try {
    return await request.get(`/books?page=${page}`)
  } catch (err) {
    console.log(err.message)
  }
}
export const getBookById = async (bookId) => {
  try {
    const response = await request.get(`/book/${bookId}`)
    return response.data
  } catch (err) {
    console.log(err.message)
  }
}

export const searchBooks = async (query, startDate, dueDate, page) => {
  try {
    const response = await request.get(`/book/search?query=${query}&startDate=${startDate}&dueDate=${dueDate}&page=${page}`)
    return response.data
  } catch (err) {
    console.log(err.message)
  }
}
