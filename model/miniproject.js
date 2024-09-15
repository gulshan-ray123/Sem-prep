const mongoose=require('mongoose');


const projectSchema= mongoose.Schema({
    Title:{
        type:String,
        require:true
    },
    Year:{
        type:Number,
        require:true
    },
    Genre:{
        type:String,
        require:true
    },
    Link:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model("miniproject",projectSchema);