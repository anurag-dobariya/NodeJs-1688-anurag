const mongoose = require("mongoose");

const stationarySchema = new mongoose.Schema(
    {
        stationary_name: {
            type: String,
            trim: true,
        },
        stationary_address: {
            type: String,
            trim: true,
        },
        stationary_items: {
            type: String,
            trim: true
        },
        stationary_contact: {
            type: Number,
            trim: true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
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

const stationary = mongoose.model("stationary", stationarySchema);
module.exports = stationary;