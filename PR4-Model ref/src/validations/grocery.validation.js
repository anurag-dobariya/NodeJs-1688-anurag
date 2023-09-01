const Joi = require("joi");

/** create grocery */
const createGrocery = {
    body: Joi.object().keys({
        grocery_shop_name: Joi.string().required().trim(),
        grocery_shop_disc: Joi.string().required().trim(),
        grocery_shop_add: Joi.string().required().trim(),
        grocery_shop_contact: Joi.number().integer().required(),
    }),
};


module.exports = {
    createGrocery
}