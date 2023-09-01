const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
    {
        bus_name: {
            type: String,
            trim: true,
        },
        bus_station: {
            type: String,
            trim: true,
        },
        bus_number: {
            type: String,
            trim: true
        },
        bus_address: {
            type: String,
            trim: true,
        },
        bus_contact:{
          type: Number ,
          trim:true
        },
        travel:{
            type:mongoose.Types.ObjectId,
            ref:"travel"
        },
        is_active: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const bus = mongoose.model("bus", busSchema);
module.exports = bus;