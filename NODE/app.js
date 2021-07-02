const express = require("express");
const app = express();
const db = require("mongoose");
const Detail = require("./models/modelss");

const uri = "mongodb+srv://user4:user4@tododatabase.j4rh6.mongodb.net/practice?retryWrites=true&w=majority";
try {
    db.connect(uri,{ useNewUrlParser: true, useUnifiedTopology: true }).then((result)=>{
        console.log("DataBase has been connected");
    });
}
catch (error) {
    console.log(error);
}


app.get('/enter',async (req,res)=>{
    const Detail_Of_Employee = new Detail({
        Name:"Arslan Azhar",
        Age:27,
        Department:"Software Engg",
    });
    try {
       let g = await Detail_Of_Employee.save();
        if(g){
            console.log("Data Entered");
        }
    } catch (error) {
        console.log(error.message);
    }
});


app.listen(3000,'localhost',()=>{
    console.log("Port 3000 started");
});