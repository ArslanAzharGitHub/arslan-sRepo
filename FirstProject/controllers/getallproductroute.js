const express = require("express");
const getallproductroute = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const register_Product = require('../models/productSchema');



getallproductroute.get('/api/getallproduct/', auth,admin, async (req, res) => {
    try {
        const data = await register_Product.find();
        res.status(200).json({  "Status":true,"Message": "Requested data", data });
    }
    catch (error) {
        res.status(404).json({"Status":false , "Message": "Error",  error });
    }
});


module.exports = getallproductroute;