const axios = require("axios");
const router = require("express").Router();

router.get("/wines", (req, res) => {
  const key = "05bd3e5306d43d741a06a939c5ea3dd27eaad377"
  axios
    .get("https://api.globalwinescore.com/search/" + key, { params: req.query })
    .then(({ data: { results } }) => res.json(results))
    .catch(err => res.status(422).json(err));
});

module.exports = router;