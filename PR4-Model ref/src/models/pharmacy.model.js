const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
    {
        medicine_name:{
            type:String,
            trim:true
        },
        medicine_disc:{
            type:String,
            trim:true
        },
        medicine_price:{
            type:Number,
            trim:true
        },
        medicine_quantity:{
            type:Number,
            trim:true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
        },
        is_available:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const pharmacy = mongoose.model("pharmacy" , pharmacySchema);
module.exports = pharmacy ;