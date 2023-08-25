const { book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createBook = async (reqBody) => {
  return book.create(reqBody);
};

const getBookList = async (req,res) => {
  return book.find()
};

const deleteBook= async (bookId) => {
  return book.findByIdAndDelete(bookId);
};


module.exports = {
  createBook,
  getBookList,
  deleteBook
};