const Joi = require("joi");

/** create stationary */
const createStationary = {
    body : Joi.object().keys({
        stationary_name:Joi.string().required().trim(),
        stationary_address:Joi.string().required().trim(),
        stationary_items:Joi.string().required().trim(),
        stationary_contact:Joi.number().integer().required()
    })
};

module.exports = {
    createStationary
}