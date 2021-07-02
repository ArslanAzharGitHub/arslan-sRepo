const express = require("express");
const deleteProductroute = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const register_Product = require('../models/productSchema');

deleteProductroute.delete("/api/deleteproduct/:id", auth, async (req, res) => {
    try {
        const id = await req.params.id;
        console.log(id);
        const data = await register_Product.findByIdAndDelete({ _id: id });
        return res.status(201).json({"Status":true,"Message":"Product Deleted",data});
    }
    catch (error) {
        return res.status(201).json({"Status":false,"Message":"Product Not Deleted",error});
    } 
});

module.exports = deleteProductroute;

