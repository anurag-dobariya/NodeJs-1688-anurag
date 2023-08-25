const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
// const validate = require("../../middlewares/validate");

const router = express.Router();

/** create book info */
router.post(
  "/create-book",
  // validate(bookValidation.createBook),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list",
  // validate(userValidation.getUserList),
  bookController.getBookList
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  // validate(userValidation.getDetails),
  bookController.deleteBook
);

module.exports = router;