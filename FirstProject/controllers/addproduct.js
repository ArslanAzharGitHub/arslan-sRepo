const express = require("express");
const addProductRoute = express.Router();
const auth = require('../middlewares/auth');

const productSchema = require("../models/productSchema");
const Joi = require('joi');

addProductRoute.post("/api/addproduct", auth, async (req, res) => {

    var { productName,quantity,price,description } = req.body;

    var val = Joi.object({
        productName: Joi.string().min(5).max(15).required(),
        quantity: Joi.number().min(1).max(100).required(),
        price: Joi.number().min(1).max(100000).required(),
        description: Joi.string().min(8).max(100).required(),

    });
    const result = val.validate(req.body);
    if (result.error) {
        res.status(401).json({ "Error": result.error.details });
    }

    console.log(productName);
    try {
        let existing_product = await productSchema.exists({ productName });
        if (existing_product) return res.status(406).json({ "Status":false,"Alert": "Product already been Entered" });
        
        const product = await productSchema.create({
            productName,
            quantity,
            price,
            description,
        });
        return res.status(201).json({ "Status": true, "Message": "Product Created", product });
    }
    catch (error) {
        return res.status(401).json({ "Status": false, "Message": "Product not Created", error });
    }
});

module.exports = addProductRoute;