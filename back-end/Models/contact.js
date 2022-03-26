const mongoose = require('mongoose')

const contactSchema = new mongoose.Schema({
    fName:{
        type:String,
        required:true,
        trim:true
    },
    lName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true,
    },
    message:{
        type:String,
        required:true,
        trim:true
    },
    view:{
        type: String,
        default: "unread",
        trim: true
    }

},{timestamps:true})

module.exports = mongoose.model("Contact", contactSchema);
