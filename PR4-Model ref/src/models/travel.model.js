const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema(
    {
        trip_name:{
            type: String,
            trim:true
        },
        trip_disc:{
            type:String,
            trim:true
        },
        trip_price:{
            type:Number,
            trim:true
        },
        trip_days:{
            type:Number,
            trim:true
        },
        trip_provider:{
            type:String,
            trim:true
        },
        bus:{
            type:mongoose.Types.ObjectId,
            ref:"bus"
        },
        is_active:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const travel = mongoose.model("travel" , travelSchema);
module.exports = travel;