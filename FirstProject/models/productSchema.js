const mongoodb = require("mongoose");
const Schema = mongoodb.Schema;


const productSchema = new Schema({
    productName:{
        type: String,
        required: true,
    },
    quantity:{
        type: Number,
        required: false,
    },
    price:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    
});

module.exports = mongoodb.model("product",productSchema);