const express = require("express");
const { mobileValidation } = require("../../validations");
const { mobileController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create mobile info */
router.post(
    "/create-mobile",
    validate(mobileValidation.createMobile),
    mobileController.createMobile
)

/** get mobile list*/
router.get(
    "/list",
    mobileController.getMobileList
)

/** delete mobile*/
router.delete(
    "/delete-mobile/:mobileId",
    mobileController.deleteMobile
)

/** update mobile details */
router.put(
    "/update-mobile/:mobileId",
    mobileController.updateMobile
)

/** update mobile status*/
router.put(
    "/update-moble-status/:mobileId",
    mobileController.updateMobileStatus
)

module.exports = router;