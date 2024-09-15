const jwt= require('jsonwebtoken');
const requireAuth=(req,res,next)=>{
       const token=req.cookies.token;
       // syntax for jwt token fetching
       // const token = req.cookies.tokenname(token);
       // You can refer tokem name from browser cookie.
       if(token){
                jwt.verify(token,'Rammmmmmmmeshhhhh',(err,decodeToken)=>{
                        if (err) {
                                res.redirect('/');
                        }
                        else{
                                console.log(decodeToken);
                                
                               req.email=decodeToken,
                              
                                next();
                        }
                })
       }
        else{
                res.redirect('/login')
        }
        
       
}

module.exports={requireAuth};