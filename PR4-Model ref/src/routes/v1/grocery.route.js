const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create grocery info */
router.post(
  "/create-grocery",
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list",
  groceryController.getGroceryList
);

/** Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  groceryController.deleteGrocery
);

/** delete grocery */
router.put(
  "/update-grocery/:groceryId",
  groceryController.groceryUpdate
)

module.exports = router;