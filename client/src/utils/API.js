import axios from 'axios'

export default {
  // Gets all wine
  getWine: function () {
    return axios.get('/api/wine')
  },
  // Gets the book with the given id
  getBeer: function (id) {
    return axios.get('/api/wine/' + id)
  },
  // Deletes the book with the given id
  deleteBeer: function (id) {
    return axios.delete('/api/wine/' + id)
  },
  // Saves a book to the database
  saveBeer: function (bookData) {
    return axios.post('/api/wine', bookData)
  },
  getBeer: function (queryTem) {
    return axios.get('/api/beers/?beer=' + queryTem)
  }
}
