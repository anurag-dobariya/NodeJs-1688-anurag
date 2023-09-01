const Joi = require("joi");

/** create school */
const createSchool = {
    body: Joi.object().keys({
        school_name: Joi.string().required().trim(),
        school_address: Joi.string().required().trim(),
        school_email: Joi.string().required().trim(),
        school_cotact: Joi.number().integer().required(),
    }),
};


module.exports = {
    createSchool
}