const jwt= require('jsonwebtoken');
require('dotenv').config();
const jwtSecretKey=process.env.SECRET_KEY;
const adminAuth=(req,res,next)=>{
       const token=req.cookies.tokenadmin;
       // syntax for jwt token fetching
       // const token = req.cookies.tokenname(token);
       // You can refer tokem name from browser cookie.
       if(token){
                jwt.verify(token,jwtSecretKey,(err,decodeToken)=>{
                        if (err) {
                                res.redirect('/');
                        }
                        else{
                                console.log(decodeToken);
                              
                                next();
                        }
                })
       }
        else{
                res.redirect('/login/admin')
        }
        
       
}

module.exports={adminAuth};