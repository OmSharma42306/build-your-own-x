const mongoose = require('mongoose');
const Usermodel = require('../db');


// create a schema
// create a model

// Schema.
const UserSchema = mongoose.Schema({
    name : {type : String,required:true},
    email : {type : String,required:true},
    password : {type : String,required:true},
    date : {type : Date,default:Date.now},
})

// Model

const UserModel = mongoose.model('UserModel',UserSchema);

module.exports = UserModel;

