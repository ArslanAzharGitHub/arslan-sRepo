const express = require("express");
const registerUser = express.Router();
const UserSchema = require("../models/userSchama");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const auth = require("../middlewares/auth");
const Joi = require('joi');




registerUser.post('/api/registeruser', async (req, res) => {

    var { userName: userName, firstName: firstName, lastName: lastName, email: email, password: password } = req.body;

    var val = Joi.object({
        userName: Joi.string().min(2).max(15).required(),
        firstName: Joi.string().min(2).max(15).required(),
        lastName: Joi.string().min(2).max(15).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(8).max(12).required(),
        confirm_password: Joi.ref('password'),
    });
    const result = val.validate(req.body);
    if (result.error) {
        res.status(401).json({ "Error": result.error.details });
    }
    try {
        let existing_email = await UserSchema.exists({ email });
        if (existing_email) {
            return res.status(406).json({ "Error": "Email Exist, Try another email" });
        }
        const hashPass = await bcrypt.hash(password, 10);
    

        const Schema = await UserSchema.create({
            userName: userName,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashPass,
        });
        const token = await jwt.sign({ id: result._id }, "goodwork");
        res.status(200).json({ result, token });

    }
    catch (error) {
        res.status(501).json({ "Error": "Data Not Entered" });
    }
});


module.exports = registerUser;