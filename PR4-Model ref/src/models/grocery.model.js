const mongoose = require("mongoose");

const grocerySchema = new mongoose.Schema(
    {
        grocery_shop_name:{
            type:String,
            trim:true
        },
        grocery_shop_disc:{
            type:String,
            trim:true
        },
        grocery_shop_add:{
            type:String,
            trim:true
        },
        grocery_shop_contact:{
            type:Number,
            trim:true
        },
        product:{
            type:mongoose.Types.ObjectId,
            ref:"product"
        },
        is_open:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps:true,
        versionKey:false
    }
);

const grocery = mongoose.model("grocery",grocerySchema);
module.exports = grocery;