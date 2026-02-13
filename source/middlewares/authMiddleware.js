const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {

    console.log("-------------------------------------------------");
    console.log("HEADERS CHEGANDO:", req.headers);
    console.log("-------------------------------------------------");


   const authHeader = req.headers.authorization;

   if(!authHeader) {
    return res.status(401).json({message: 'Token não fornecido.'});
    
   }
   const parts = authHeader.split(' ');

   if(parts.length !== 2) {
    return res.status(401).json({message: 'Token inválido.'});
   }

   jwt.verify(parts[1], process.env.JWT_SECRET, (err, decoded) => {
      if(err) {  
         return res.status(401).json({message: 'Token inválido.'});
      }
      req.userId = decoded.id;
      return next();
   });







};