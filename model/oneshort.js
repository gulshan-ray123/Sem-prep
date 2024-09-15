const mongoose=require('mongoose');
// mongoose.connect('mongodb://localhost:27017/semprep');

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