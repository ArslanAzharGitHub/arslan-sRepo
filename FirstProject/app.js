const express = require("express");
const app = express();
const mongoose = require("mongoose");
const testrouter = require("./controllers/testroute");
const getallproductroute = require("./controllers/getallproductroute");
const getsingleproductroute= require("./controllers/getsingleproduct");
const updateproductroute = require("./controllers/updateproductroute");
const url = "mongodb+srv://user5:user5@tododatabase.j4rh6.mongodb.net/FirstProject?retryWrites=true&w=majority";
const registerUser = require("./controllers/registerusers");
const loginRouter = require("./controllers/loginUser");
const addProductRoute = require("./controllers/addproduct");
const deleteProductroute = require("./controllers/deleteProduct");
const uploadFileRoute = require("./controllers/uploadFiles");

mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify : false }).then(()=>{
    console.log("DB Connected");
   
});


app.use(express.urlencoded({extended:true}));
app.use(express.static('uploads'));
app.use(express.json());

////////Routes/////////////
app.use(deleteProductroute);
app.use(addProductRoute);
app.use(loginRouter);
app.use(registerUser);
app.use(testrouter);
app.use(getallproductroute);
app.use(getsingleproductroute);
app.use(updateproductroute);
app.use(uploadFileRoute);

app.listen(3000,"localhost",()=>{
    console.log("PORT 3000");
});