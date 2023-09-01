const mongoose = require("mongoose");

const jewellerySchema = new mongoose.Schema(
    {
        jewellery_name:{
            type:String,
            trim:true
        },
        jewellery_disc:{
            type:String,
            trim:true
        },
        jewellery_designer:{
            type:String,
            trim:true
        },
        jewellery_price:{
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

const jewellery = mongoose.model("jewellery" , jewellerySchema);
module.exports = jewellery;