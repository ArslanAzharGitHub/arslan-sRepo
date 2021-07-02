const jwt = require('jsonwebtoken');




//////////Getting The token from the Header//////////////
const auth = async function auth_token(req,res,next){
    try {
        const header = req.headers["authorization"]; //getting authorization header
        const token = header && header.split(" ")[1]; // spliting the Header veriable
        console.log("From Auth");
      
        if(token == null) return res.status(501).json({"Message":"Token Not Found"});
        jwt.verify(token,"goodwork",(err,user)=>{if(err)  return res.status(501).json( { "Message":"Invalid Token" } );
            req.user = user.id;
            next();
        });
    } 
    catch (error) {
        res.status(404).json({"Message":"Token Not Found","Status":false,error});
    }
}


module.exports = auth;