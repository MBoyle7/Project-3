import axios from 'axios'

export default {
  // Gets all wine
  getWine: function () {
    return axios.get('/api/wine')
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get('/api/wine/' + id)
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete('/api/wine/' + id)
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post('/api/wine', bookData)
  },
  getBeer: function (queryTem) {
    return axios.get('/api/beers/?beer=' + queryTem)
  }
}
