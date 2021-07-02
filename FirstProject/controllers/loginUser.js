const express = require("express");
const loginRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Joi = require('joi');
const UserSchema = require("../models/userSchama");










loginRouter.post('/api/loginuser',async (req,res)=>{


    let val = Joi.object({
        
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(12).required(),
        
    });
    const result = val.validate(req.body);
    if(result.error){
        res.status(401).json({"Error":result.error.details});
    }
    var {email:email,password:password} = req.body;

    try {
        const user = await UserSchema.findOne({email});
        if(user){
            const result = await bcrypt.compare(password,user.password);
            if(result && user.email == email){
                const token = await jwt.sign({id:user._id},"goodwork");
                res.status(200).json({user,token});
            }
            else{
                res.status(501).json({"messsge":"pass not correct"});
            }
        } 
        else{
            res.status(501).json({"message":"User not Found"});
        }  
    } 
    catch (error) {
        
    }
});


module.exports = loginRouter;