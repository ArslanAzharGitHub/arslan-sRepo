const mongoodb = require("mongoose");
const Schema = mongoodb.Schema;

const registration_Schema = new Schema({
    userName:{
        type: String,
        required: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
});

module.exports = mongoodb.model("firstproject",registration_Schema);



