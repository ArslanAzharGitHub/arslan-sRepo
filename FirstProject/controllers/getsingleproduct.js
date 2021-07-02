const express = require("express");
const getsingleproductroute = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const register_Product = require('../models/productSchema');




getsingleproductroute.get('/api/getproduct/:id', auth, async (req, res) => {
    try {
        const data = await register_Product.findOne({ _id: req.params.id });
        res.status(200).json({ "Status": true, "Message": "Requested Product", data });
    }
    catch (error) {
        res.status(404).json({ "Status": false, "essage": "Please Enter a valid Id Of product", error });
    }
});

module.exports = getsingleproductroute;