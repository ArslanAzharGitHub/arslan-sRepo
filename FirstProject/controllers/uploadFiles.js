const express = require("express");
const uploadFile = express.Router();
const multerMiddleware = require('../middlewares/multer');



uploadFile.post("/api/uploadfile",multerMiddleware.any(), async(req,res)=>{
    try {
        let data = req.files;
        return res.status(201).json({"Status":true,"Messsage":"File Uploaded",data});    
    } 
    catch (error) {
        return res.status(404).json({"Status":false,"Messsage":"File Not Uploaded",error});
    }
    
});


module.exports = uploadFile;