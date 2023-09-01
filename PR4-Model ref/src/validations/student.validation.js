const Joi = require("joi");

/** create Student */
const createStudent ={
    body : Joi.object().keys({
        first_name : Joi.string().required().trim(),
        last_name: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.number().required().integer(),
    })
}

module.exports = {
    createStudent
}