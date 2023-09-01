const express = require("express");
const { stationaryValidation } = require("../../validations");
const { stationaryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create stationary info */
router.post(
  "/create-stationary",
  validate(stationaryValidation.createStationary),
  stationaryController.createStationary
);

/** Get stationary list */
router.get(
  "/list",
  stationaryController.getStationaryList
);

/** Delete stationary */
router.delete(
  "/delete-stationary/:stationaryId",
  stationaryController.deleteStationary
);

/** delete stationary */
router.put(
  "/update-stationary/:stationaryId",
  stationaryController.stationaryUpdate
)

module.exports = router;