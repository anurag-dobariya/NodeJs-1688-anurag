const Joi = require("joi");

/** create book */
const createBook = {
    body: Joi.object().keys({
        book_name: Joi.string().required().trim(),
        book_disc: Joi.string().required().trim(),
        book_author: Joi.string().required().trim(),
        book_price: Joi.number().integer()
    }),
};

module.exports = {
    createBook
}