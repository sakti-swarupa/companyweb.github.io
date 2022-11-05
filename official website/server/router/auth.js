const express = require('express');
const router = express.Router();
const bcrypt=require('bcryptjs')
const jwt = require('jsonwebtoken')

require('../db/conn');
const User=require("../model/userSchema");

router.get('/', (req,res) => {
    res.send(`hello me router`)
});

router.post('/Registration' , async (req,res)=>{
    
    const{name, email, phone, work, password , cpassword}= req.body
    if(!name || !email || !phone || !work ||!password ||!cpassword){
        return res.status(422).json({error:"Please fill the field properly"})
    }
    try{
        const userExist = await User.findOne({email:email});

        if(userExist){ 
            return res.status(422).json({error:"Email already exists"})
        }else if(password != cpassword){
            return res.status(422).json({error:"passwords are not matching"})
        }else {
            const user = new User({name ,email ,phone ,work,password ,cpassword});
        await user.save();
        res.status(201).json({message:"user registered successfully"})
        }
        
    }
    catch(err){
        console.log(err);
    }

})


router.post("/Login",async(req,res)=>{

    try{
        const { email,password }= req.body;
        if(!email||!password){
           return res.status(400).json({error:"Please fill the data properly"})
        }
        const userLogin = await User.findOne({email:email});
        //console.log(userLogin);
        if (userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+25892000000),
                httpOnly:true
            })                          
            if(!isMatch){
               res.status(400).json({message:"Invalid Credentials"});
            }else{
                res.json({message:"user logged in successfully"});
               }

        }else{
            res.status(400).json({message:"Invalid Credentials"});

        }
   }
   catch(err){
       console.log(err);
   }
})
module.exports= router;
