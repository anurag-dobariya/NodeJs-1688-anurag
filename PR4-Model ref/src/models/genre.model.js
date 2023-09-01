const mongoose = require("mongoose");

const genreSchema = new mongoose.Schema(
    {
        genre_name:{
            type:String,
            trim:true
        },
        genre_disc:{
            type:String,
            trim:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const genre = mongoose.model("genre" , genreSchema);
module.exports = genre;