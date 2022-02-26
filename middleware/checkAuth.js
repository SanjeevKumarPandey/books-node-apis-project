const jwt = require('jsonwebtoken');
module.exports= (req,res,next)=>{
    try
    {
        const token = req.headers.authorization;
        const decode = jwt.verify(token,"book2502022");
        req.userData = decode;
        next();
    }
    catch(error)
    {
        res.status(401).json({
            status: 401,
            message:"Unauthorized User",
        });
    }
}