const router = require('express').Router();
const breweriesControllers = require("../../controllers/breweriesControllers");

router
    .route("/")
    .get(breweriesControllers.findAll)
    .post(breweriesControllers.create);

router
    .route("/:id")
    .get(breweriesControllers.findById)
    .put(breweriesControllers.update)
    .delete(breweriesControllers.remove);

module.exports = router;