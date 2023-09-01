const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create hotel info */
router.post(
  "/create-hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  hotelController.getHotelList
);

/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  hotelController.deleteHotel
);

/** delete hotel */
router.put(
  "/update-hotel/:hotelId",
  hotelController.hotelUpdate
)

module.exports = router;