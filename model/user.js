const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/semprep");

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