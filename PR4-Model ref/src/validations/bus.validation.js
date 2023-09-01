const Joi = require("joi");

/** create bus */
const createBus = {
    body: Joi.object().keys({
        bus_name: Joi.string().required().trim(),
        bus_station: Joi.string().required().trim(),
        bus_number: Joi.string().required().trim(),
        bus_address: Joi.string().required().trim(),
        bus_cotact: Joi.number().integer(),
    }),
};


module.exports = {
    createBus
}