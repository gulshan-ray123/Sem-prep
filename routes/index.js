require('dotenv').config();
var express = require('express');
const mongoose=require('mongoose');
var app = express();
const userModel=require('../model/user')
const collegeModel=require('../model/colegeTest');
const lectureModel=require('../model/lecture');
const oneshortModel=require('../model/oneshort');
const miniprojectModel=require('../model/miniproject')
const adminModel= require('../model/adminmodel');
const answerModel=require('../model/answercopy');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const {requireAuth}= require('../middleware/protected');
const {adminAuth}=require('../middleware/adminprotected')
// const isLoggedIn=require('../middleware/session');
// const port= process.env.SERVER_PORT|3000;
const jwtSecretKey= process.env.SECRET_KEY;
app.get('/',(req,res)=>{
  res.render("semprep")
});

app.get('/login',(req,res)=>{
  res.render("loginvisme")
});

app.get('/login/admin',(req,res)=>{
  res.render("adminlogin")
});
// Route for admin signin.

app.post('/admin/signin',async(req,res)=>{
  let {name,email,pass,semester}=req.body;

  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(pass, salt, async function(err, hash) {
      let createdUser=await adminModel.create({
        Name: name,
        Email:email,
        Password: hash,
        Semester:semester,
      });
     
      console.log(createdUser);
    });
});
res.redirect('/login/admin');
});

  // Route for admin login.

  app.post('/admin/login',async(req,res)=>{
    let admins= await adminModel.findOne({Email: req.body.email});
    console.log(admins);
    if(!admins) res.send("Something went wrong");
    else{
    bcrypt.compare(req.body.pass,admins.Password,(err,result)=>{
     if(!result) res.redirect('/login/admin');
     else {
       let tokenadmin=jwt.sign({email:admins.Email},jwtSecretKey);
       console.log(tokenadmin);
       res.cookie("tokenadmin",tokenadmin,{
         expires:new Date(Date.now()+1209600000),
         httpOnly:true
       });
       res.redirect('/admindash')
     } 
     console.log(result);
    
    });
 }});

 // Route for one short note.

 app.post('/oneshortnotes',async(req,res)=>{
  let{subject,year,genre,link}=req.body;
  const oneshort= await oneshortModel.create({
       Subject:subject,
       Year:year,
       Genre:genre,
      Link:link
   });
   if(!oneshort) {res.send("Error")}
    else{
   res.send('Successfull')
  console.log(oneshort);
    }
 })

 // Route to view oneshort notes.

 app.get('/view/oneshortnotes',requireAuth,async(req,res)=>{
  let notesone= await oneshortModel.find();
  console.log(notesone);
  res.render('collegeNotes',{notesone})
})


app.get('/notes',async(req,res)=>{
  res.render('notes');
})

// Route for dashboard.

app.get('/student/dashboard',requireAuth,async(req,res)=>{
    const userData=req.email;
    const users=await userModel.findOne({Email:userData.email})
    console.log(users);
    res.render('studentdash',{users})
})

app.get('/guest/dashboard',(req,res)=>{
  res.render('guestdash')
})
//Route to create user.

app.post('/createuser',(req,res)=>{
  let {name,email,pass,semester}=req.body;

  if((name=='')||(email=='')||(pass=='')){
    res.send("Something went wrong");
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(pass, salt, async function(err, hash) {
      let createdUser=await userModel.create({
        Name: name,
        Email:email,
        Password: hash,
        Semester:semester,
      });
      res.redirect('/login');
      console.log(createdUser);
    });
});
});

// route to create miniproject.

  app.post('/miniproject/upload',async(req,res)=>{
    let{subject,year,genre,link}=req.body;
    const miniproject=await miniprojectModel.create({
      Title:subject,
      Year:year,
      Genre:genre,
      Link:link,
    });
    res.send("Successful");
  });

  // Route to view miniproject.

  app.get('/view/important/question',requireAuth,async(req,res)=>{
    let project= await miniprojectModel.find();
    console.log(project);
    res.render('miniproject',{project})
  })
// Route for Update User.

  app.post('/updateuser',(req,res)=>{
    let{name,old_email,email,sem,new_pass}=req.body;
    bcrypt.genSalt(10,(err,salt)=>{
      bcrypt.hash(new_pass,salt, async function (err,hash) {
        let updateUser= await userModel.findOneAndUpdate({Email:old_email},
          {Name:name, Email:email, Semester:sem, Password:hash},{new:true});
          console.log(updateUser);
      })
      res.send("User Updated Successfully")
    });
  })

  // Previous Year Question Routes,

  app.get('/pyqpaper',requireAuth,(req,res)=>{
    // console.log(req.cookies.token);
  res.render('pyq')
  });


  //Route for create College Exam.

  app.post('/collperupld', async(req,res)=>{
    let{subject,year,genre,link}=req.body;
    const paper= await collegeModel.create({
         Subject:subject,
         Year:year,
         Genre:genre,
        Link:link,
     });
     if(!paper) res.send("Error")
      else
     res.send('Successfull')
    console.log(paper);
    
  });
   // Route for Aktu Answer Copy.

   app.post('/upload/answer/aktu',async(req,res)=>{
    let {subject,year,link}=req.body;
      const ansCreated=await answerModel.create({
          Subject:subject,
          Year:year,
          Link:link,
      });
      if(!ansCreated) res.send("error")
        else
      console.log(ansCreated);  
      res.send("Succesfull");
  });

 // Route to view Answer Copy:

 app.get('/view/answer',async(req,res)=>{
  const showAns= await answerModel.find();
  res.render('aktuanswer',{showAns})
})
  // Route to find all sessional papers

  app.get('/collegepaper',async(req,res)=>{
     let paperNew= await collegeModel.find();
     console.log(paperNew);
     res.render('put',{paperNew})
  })
  
  // Route for lectureupload.

  app.post("/upload/lecture",(req,res)=>{
    let {link,year,subject,genre,video}=req.body;
    const lecture= lectureModel.create({
      Link:link,
      Year:year,
      Subject:subject.trim(),
      Genre:genre,
      Video:video,
    });
    console.log(lecture);
    res.send("Lecture Uploaded Successfully")
  });

  // Route to view lectures.

  app.get('/view/lecture',requireAuth,async(req,res)=>{
    console.log(req.body.sub);
    const lectures= await lectureModel.find();
   
    
    console.log(lectures);
    res.render('lectures',{lectures});
  })


  // route for admin.

  app.get('/admindash',adminAuth,(req,res)=>{
    res.render('admindash');
  });

  app.get('/view/user',async(req,res)=>{
    const users=await userModel.find();
    console.log(users);
    res.render('viewuser',{users})
  })

// Route  for login.

app.post('/dashboard',async(req,res)=>{
   let users= await userModel.findOne({Email: req.body.email});
   console.log(users);
   if(!users) res.send("Something went wrong");
   
   bcrypt.compare(req.body.pass,users.Password,(err,result)=>{
    if(!result) res.redirect('/login');
    else {
      let token=jwt.sign({email:users.Email},jwtSecretKey);
      console.log(token);
      res.cookie("token",token,{
        expires:new Date(Date.now()+1209600000),
        httpOnly:true
      });
      res.redirect('/student/dashboard')
    } 
    console.log(result);
   
   });
  

});
  // Logout Route For User.

app.get('/logout',(req,res)=>{
  res.cookie("token","")
  res.redirect('/');
});

// app.listen(port,function(){
//   console.log("App is listening at port:" +port);
// })
module.exports = app;
