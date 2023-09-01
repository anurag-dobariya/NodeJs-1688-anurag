const express = require("express");
const {busValidation} = require("../../validations");
const {busController} = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create bus info */
router.post(
    "/create-bus",
    validate(busValidation.createBus),
    busController.createBus
);

/** get bus list */
router.get(
    "/list",
    busController.getBusList
);

/** delete bus */
router.delete(
    "/delete-bus/:busId",
    busController.deleteBus
);

/** delete bus */
router.put(
    "/update-bus/:busId",
    busController.busUpdate
)



module.exports = router;