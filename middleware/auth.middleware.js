const jwt= require('jsonwebtoken');
require('dotenv').config();

const auth=(req,res,next)=>{
   const token = req.headers.authorization;
   if(token){
    jwt.verify(token, process.env.key, (err, decoded)=>{
          if(decoded){
            next()
          }else{
            res.status(400).send({"msg":"error in jwt"})
          }
    })
   }else{
    res.status(400).send({"msg":"error in token"})
   }
}

module.exports = auth;