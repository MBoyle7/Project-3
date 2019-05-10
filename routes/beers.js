const router = require('express').Router();
const beerControllers = require("../../controllers/beerControllers");

router
    .route("/")
    .get(beerControllers.findAll)
    .post(beerControllers.create);

router
    .route("/:id")
    .get(beerControllers.findById)
    .put(beerControllers.update)
    .delete(beerControllers.remove);

module.exports = router; 