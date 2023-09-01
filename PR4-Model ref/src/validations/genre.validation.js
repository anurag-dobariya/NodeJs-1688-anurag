const Joi = require("joi");

/** create genre */
const createGenre = {
    body : Joi.object().keys({
        genre_name:Joi.string().required().trim(),
        genre_disc:Joi.string().required().trim(),
    })
};

module.exports = {
    createGenre
}
