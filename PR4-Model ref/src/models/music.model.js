const mongoose = require("mongoose");

const musicSchema = new mongoose.Schema(
    {
        music_name:{
            type:String,
            trim:true
        },
        music_disc:{
            type:String,
            trim:true
        },
        music_singer:{
            type:String,
            trim:true
        },
        music_writers:{
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

const music = mongoose.model("music",musicSchema);
module.exports = music;