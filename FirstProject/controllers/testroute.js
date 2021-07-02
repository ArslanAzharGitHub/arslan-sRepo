const express = require("express");
const testrouter = express.Router();
const auth = require('../middlewares/auth');
const admin = require('../middlewares/admin');




testrouter.get('/api/test',auth,admin ,(req, res) => {
    console.log("From test");
    res.end();
});


module.exports = testrouter;