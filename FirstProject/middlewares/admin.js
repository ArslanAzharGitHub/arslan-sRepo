const admin = (req,res,next)=>{
    console.log("this is admin middleware....");
    next();
}


module.exports = admin;