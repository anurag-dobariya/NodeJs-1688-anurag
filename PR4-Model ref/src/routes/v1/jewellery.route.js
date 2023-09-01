const express = require("express");
const { jewelleryValidation } = require("../../validations");
const { jewelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create jewellery info */
router.post(
  "/create-jewellery",
  validate(jewelleryValidation.createJewellery),
  jewelleryController.createJewellery
);

/** Get jewellery list */
router.get(
  "/list",
  jewelleryController.getJewelleryList
);

/** Delete jewellery */
router.delete(
  "/delete-jewellery/:jewelleryId",
  jewelleryController.deleteJewellery
);

/** delete jewellery */
router.put(
  "/update-jewellery/:jewelleryId",
  jewelleryController.jewelleryUpdate
)

module.exports = router;