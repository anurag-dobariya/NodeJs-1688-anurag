const express = require("express");
const {movieValidation}= require("../../validations");
const {movieController}= require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create movie info */
router.post(
    "/create-movie",
    validate(movieValidation.createMovie),
    movieController.createMovie
);

/** get movie list */
router.get(
    "/list",
    movieController.getMovieList
);

/** delete movie */
router.delete(
    "/delete-movie/:movieId",
    movieController.deleteMovie
);

/** delete movie */
router.put(
    "/update-movie/:movieId",
    movieController.movieUpdate
)

module.exports = router;