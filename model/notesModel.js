const mongoose= require("mongoose");
// mongoose.connect("mongodb://localhost:27017/semprep");

// maing schema.

const notesSchema= mongoose.Schema({
            Image:{
                type:String,
                requied:true
            },
            Subject:{
                type:String,
                require:true
            },
           Title :{
                type:String,
                require:true
            },
            Notes:{
                type:String,
                require:true
            },
            Year:{
                type:Number,
                require:true
            }
        })

        // Create model.

    module.exports=mongoose.model("notes",notesSchema);