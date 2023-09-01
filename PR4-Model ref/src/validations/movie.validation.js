const Joi = require("joi");

/** create movie */
const createMovie = {
    body : Joi.object().keys({
        movie_name : Joi.string().required().trim(),
        movie_disc: Joi.string().required().trim(),
        movie_cast: Joi.string().required().trim(),
        movie_director: Joi.string().required().trim(),
        movie_writers: Joi.string().required().trim(),
    })
};

module.exports = {
    createMovie
}