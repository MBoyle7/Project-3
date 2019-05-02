const axios = require('axios')
const router = require('express').Router()

//https://api.globalwinescore.com/search/
router.get('/api/wines', (req, res) => {
  console.log('hit')
  axios
    .get('https://quiniwine.com', { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err))
})

module.exports = router
