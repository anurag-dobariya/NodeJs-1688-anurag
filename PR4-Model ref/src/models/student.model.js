const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name:{
        type:String,
        trim:true 
    },
    last_name:{
        type:String,
        trim:true
    },
    email:{
        type: String,
        trim:true
    },
    password:{
        type:String,
    },
    is_active:{
        type:Boolean,
        default:false
    }
},
{
    timestamps: true,
    versionKey:false
}
);

const student = mongoose.model("student", studentSchema);
module.exports= student;
