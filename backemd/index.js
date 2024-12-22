const express = require('express');
const UserModel = require('./models/Usermodel');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/signup',async (req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    try{
        const existingUser = await UserModel.findOne({email});
        if(existingUser){
            return res.json({msg : "User Alreday Exists!"});
        }

        const newUser = new UserModel({name,email,password});
    await newUser.save();
    return res.json({msg:"successfully registerd!"});
    }catch(err){
        return res.json({msg:"Error!"})
    }
});

app.post('/signin',async (req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    try{
        const checkEmail = await UserModel.findOne({email});
        if(!checkEmail){
            return res.json({msg : "user not exists!"});
        }
        if(checkEmail){
            if (password === checkEmail.password){
                return res.json ({msg: "Login Successful!"});
            }else{
                return res.json ({msg : "Invalid Credentials!"})
            }
        }
    }catch(err){
        return res.json({msg : err});
    }

})





app.listen(3000,()=>console.log("Server Started!"));