const Joi = require("joi");

/** create jewellery */
const createJewellery = {
    body: Joi.object().keys({
        jewellery_name: Joi.string().required().trim(),
        jewellery_disc: Joi.string().required().trim(),
        jewellery_designer: Joi.string().required().trim(),
        jewellery_price: Joi.number().integer().required(),
    }),
};


module.exports = {
    createJewellery
}