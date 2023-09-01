const Joi = require("joi");

/** create hotel */
const createHotel = {
    body: Joi.object().keys({
        hotel_name: Joi.string().required().trim(),
        hotel_disc: Joi.string().required().trim(),
        hotel_reviews: Joi.string().required().trim(),
        hotel_address: Joi.string().required().trim(),
        hotel_contact: Joi.number().integer()
    }),
};


module.exports = {
    createHotel
}