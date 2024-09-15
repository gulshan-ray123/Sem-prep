const mongoose= require("mongoose");
mongoose.connect("mongodb+srv://gk0507818:c2joUMsAuPCh8UhB@cluster0.h9jgx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

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