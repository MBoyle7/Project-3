const axios = require("axios");
const router = require("express").Router();

router.get("/wines ", (req, res) => {
  axios
    .get("https://api.globalwinescore.com/search/", { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;