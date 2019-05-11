const axios = require('axios')
const router = require('express').Router()
const key = 'f1cd99daef522dc34a820c854fb10e79'
// https://api.globalwinescore.com/search/
router.get('/api/beers', (req, res) => {
  console.log('hit')
  console.log(req.query)
  var beerURL = `https://sandbox-api.brewerydb.com/v2/search/style?q=${
    req.query.beer
  }&key=${key}&withDescriptions=Y`
  console.log(beerURL)
  axios
    .get(beerURL)
    .then(result => {
      // console.log(result)
      // res.json({ hello: 'world' })
      res.json(result.data.data)
    })
    .catch(err => res.status(422).json(err))
})

module.exports = router
