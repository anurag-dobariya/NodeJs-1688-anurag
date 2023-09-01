const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
    {
        hotel_name: {
            type: String,
            trim: true,
        },
        hotel_disc: {
            type: String,
            trim: true,
        },
        hotel_reviews: {
            type: String,
            trim: true
        },
        hotel_address: {
            type: String,
            trim: true,
        },
        hotel_contact:{
          type: Number ,
          trim:true
        },
        travel:{
            type:mongoose.Types.ObjectId,
            ref: "travel"
        },
        is_open: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const hotel = mongoose.model("hotel", hotelSchema);
module.exports = hotel;