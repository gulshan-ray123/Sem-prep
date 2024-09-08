var express = require('express');
var app = express();
const userModel=require('../model/user')
const notesModel=require('../model/notesModel');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
// const isLoggedIn=require('../middleware/session');


app.get('/',(req,res)=>{
  res.render("semprep")
});

app.get('/login',(req,res)=>{
  res.render("loginvisme")
});

// Route for upload notes.

app.post('/notesupload',async(req,res)=>{
  let {link,subject,title,notes,year}=req.body;

  const notesCreated=await notesModel.create({
      Image:link,
      Title:title,
      Subject:subject,
      Notes: notes,
      Year: year,
    });
    console.log(notesCreated);
    res.send("Notes created Successfully")
})

app.get('/upld',(req,res)=>{
  res.render("noteuplod");
})

app.get('/notes',async(req,res)=>{
  res.render('notes');
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

  app.get('/pyqpaper',(req,res)=>{
  res.render('pyq')
  });

// Route  for login.

app.post('/dashboard',async(req,res)=>{

   let users= await userModel.findOne({Email: req.body.email});
   console.log(users);
   if(!users) res.send("Something went wrong");
   
   bcrypt.compare(req.body.pass,users.Password,(err,result)=>{
    if(!result) res.redirect('/login');
    else {
      let token=jwt.sign({email:users.Email},"Rammmmmmmmeshhhhh");
      console.log(token);
      res.cookie("token",token);
      res.render('studentdash',{users});
    } 
    console.log(result);
   
   });
});
  // Logout Route For User.

app.get('/logout',(req,res)=>{
  res.cookie("token","")
  res.redirect('/');
});

module.exports = app;
