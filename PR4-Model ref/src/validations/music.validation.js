const Joi = require("joi");

/** create music */

const createMusic = {
    body : Joi.object().keys({
        music_name: Joi.string().required().trim(),
        music_disc:Joi.string().required().trim(),
        music_singer:Joi.string().required().trim(),
        music_writers:Joi.string().required().trim()
    })
};

module.exports = {
    createMusic
}
