const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema({
    username: {type:String, unique:true},
    password: String,
    skills:[String],
    desc:String,
    email:String,
    github:String
},{ 
    collection:"users"
});

mongoose.model("users",userDetailSchema);