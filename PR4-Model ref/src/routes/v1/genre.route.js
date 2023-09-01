const express = require("express");
const {genreValidation} = require("../../validations");
const {genreController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

// create genre 
router.post(
    "/create-genre",
    validate(genreValidation.createGenre),
    genreController.createGenre
);

// get genre list
router.get(
    "/list",
    genreController.getGenreList
);

// delete genre 
router.delete(
    "/delete-genre/:genreId",
    genreController.deleteGenre
);

// update genre 
router.put(
    "/update-genre/:genreId",
    genreController.genreUpdate
);

module.exports = router;