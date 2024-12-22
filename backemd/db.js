const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI;

mongoose.connect(mongoUri).then(()=>console.log("MongoDB Connected!")).catch((err)=>{console.log("error",err)});

// // 1) Create Schema
// // 2) Create Model


// const Userschema = new mongoose.Schema({
//     name : {type:String,required:true},
//     email : {type : String,required:true},
//     password : {type : String,required:true},
//     date : {type : Date,default:Date.now},
// });

// const Usermodel = mongoose.model('User',Userschema);

// module.exports = Usermodel;