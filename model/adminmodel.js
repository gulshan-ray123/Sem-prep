const mongoose= require("mongoose");

// maing schema.

const adminSchema= mongoose.Schema({
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

    module.exports=mongoose.model("admindata",adminSchema);