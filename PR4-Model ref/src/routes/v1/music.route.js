const express = require("express");
const {musicValidation}= require("../../validations");
const {musicController}= require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create music info */
router.post(
    "/create-music",
    validate(musicValidation.createMusic),
    musicController.createMusic 
);

/** get music list */
router.get(
    "/list",
    musicController.getMusicList
);

/** delete music */
router.delete(
    "/delete-music/:musicId",
    musicController.deleteMusic
);

/** delete music */
router.put(
    "/update-music/:musicId",
    musicController.musicUpdate
)

module.exports = router;