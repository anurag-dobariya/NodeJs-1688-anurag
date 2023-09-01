const { genre} = require("../models");

// create genre 
const createGenre = async (reqBody) =>{
    return genre.create(reqBody);
};

// get genre list
const getGenreList = async(req,res) =>{
    return genre.find();
};

// delete genre 
const deleteGenre = async (genreId) =>{
    return genre.findByIdAndDelete(genreId);
};

// get genre by id
const getGenreById = async(genreId) =>{
    return genre.findById(genreId);
}

// update genre
const genreUpdate = async(genreId , updateBody) =>{
    return genre.findByIdAndUpdate(genreId , {$set : updateBody});
}

module.exports={
    createGenre,
    getGenreList,
    deleteGenre,
    getGenreById,
    genreUpdate
}