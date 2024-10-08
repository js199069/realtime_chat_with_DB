const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: { type:String, required: true, unique:true },
    password:{type: String, required: true},
    pic:{type:String,required: true, default: ""}
},{
    timestamps: true
});

const User = mongoose.model("User", userSchema)

module.exports = User;
