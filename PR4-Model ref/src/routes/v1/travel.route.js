const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create travel info */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  travelController.getTravelList
);

/** Delete travel */
router.delete(
  "/delete-travel/:travelId",
  travelController.deleteTravel
);

/** delete travel */
router.put(
  "/update-travel/:travelId",
  travelController.travelUpdate
)

module.exports = router;