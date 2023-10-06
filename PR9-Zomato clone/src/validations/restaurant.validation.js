const joi = require("joi");

// create restaurant
const createRestaurant = {
    body:joi.object.keys({
        restaurant_name: joi.string().trim().required(),
        restaurant_address: joi.string().trim().required(),
        restaurant_category: joi.string().trim().required(),
        restaurant_no: joi.number().integer().trim().required(),
        restaurant_email: joi.string().trim().required(),
        opening_hours: joi.string().trim().required(),
        restaurant_image: joi.string().allow("").required(),
        shop_license_image: joi.string().allow("").required(),
        res_owner_name: joi.string().trim().required(),
        res_owner_number: joi.number().trim().integer().required(),
        res_owner_email: joi.string().trim().required(),
    })
};

module.exports = {
    createRestaurant
}