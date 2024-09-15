const mongoose=require('mongoose');


const oneshortSchema= mongoose.Schema({
    Subject:{
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

module.exports=mongoose.model("oneshortNotes",oneshortSchema);