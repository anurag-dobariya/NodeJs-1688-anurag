const Joi = require("joi");

/** create trip */
const createTrip = {
    body: Joi.object().keys({
        trip_name: Joi.string().required().trim(),
        trip_disc: Joi.string().required().trim(),
        trip_price: Joi.number().integer().required(),
        trip_days: Joi.number().integer().required(),
        trip_provider: Joi.string().required().trim(),
    }),
};


module.exports = {
    createTrip
}