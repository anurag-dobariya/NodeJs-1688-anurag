const { book } = require("../models");

/**
 * Create user
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createrBook = async (reqBody) => {
  return book.create(reqBody);
};

const getBookList = async (filter, options) => {
  return book.find()
};

module.exports = {
  createrBook,
  getBookList
};