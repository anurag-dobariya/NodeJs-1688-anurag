const Joi = require("joi");

/** create medicine */
const createMedicine = {
    body : Joi.object().keys({
        medicine_name: Joi.string().required().trim(),
        medicine_disc : Joi.string().required().trim(),
        medicine_price: Joi.number().integer().required(),
        medicine_quantity:Joi.number().integer().required()
    })
};

module.exports = {
    createMedicine
}