const express = require("express");
const updateproductroute = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');
const register_Product = require('../models/productSchema');



updateproductroute.patch('/api/updateproduct/:id', auth,admin, async (req, res) => {

        // let input_validity = Joi.object({
        //     description: Joi.string().min(5).max(20).required(),
        // });

        // const {error} = input_validity.validate(req.body);
        // if (error) {res.status(401).json({ "Error": error.details });}

        try {
            const _id = req.params.id;
            const data = await register_Product.findByIdAndUpdate(_id, req.body, {
                new: true
            });
            res.status(201).json({ "Status": true, "Message": "Updated Successfully", data });
            console.log("update working");
        }
        catch (error) {
            res.status(404).json({ "Status": false, "Message": "Not updated", error })
        }
       
    
    // catch (error) {
    //     res.status(404).json({ "Status": false, "Message": "Updation Error", error });
    // }
});


module.exports = updateproductroute;