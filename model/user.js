const mongoose= require("mongoose");
const dotenv=require('dotenv');
dotenv.config();
const db=process.env.DATABASE_URL;
mongoose.connect(db);
// maing schema.

const userSchema= mongoose.Schema({
            Name:{
                type:String,
                requied:true,
            },
            Email:{
                type:String,
                require:true,
            },
            Password:{
                type:String,
                require:true,
            },
            Semester:{
                type:String,
                require:true,
            }
        })

        // Create model.

    module.exports=mongoose.model("student",userSchema);