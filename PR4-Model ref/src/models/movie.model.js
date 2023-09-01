const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
    {
        movie_name:{
            type:String,
            trim:true
        },
        movie_disc:{
            type:String,
            trim:true
        },
        movie_cast:{
            type:String,
            trim:true
        },
        movie_director:{
            type:String,
            trim:true
        },
        movie_writers:{
            type:String,
            trim:true
        },
        genre:{
            type:mongoose.Types.ObjectId,
            ref:"genre"
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const movie = mongoose.model("movie",movieSchema);
module.exports = movie;