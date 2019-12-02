import axios from 'axios'

// const url = 'http://localhost:5000'
const url = 'https://search-books-challenge.herokuapp.com/'

const request = axios.create({
  baseURL: `${url}`,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})

export default request
