const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const detailed = new Schema({
    Name: {
            type:String,
            maxlength: 255,
            validate:{   // Custom validation...
                validator:function (v){
                    return v.length > 0; //works as an if statement...
                },
                message:"Please Enter correctly"
            }
          },
    Age: {type:Number,required: true},
    Department: {type:String},
    
});

const Detail = mongoose.model("data",detailed);

module.exports = Detail;