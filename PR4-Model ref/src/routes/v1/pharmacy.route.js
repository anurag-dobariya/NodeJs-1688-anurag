const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create pharmacy info */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  pharmacyController.getPharmacyList
);

/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  pharmacyController.deletePharmacy
);

/** delete pharmacy */
router.put(
  "/update-pharmacy/:pharmacyId",
  pharmacyController.pharmacyUpdate
)

module.exports = router;