const mongoose=require('mongoose');


const answerSchema= mongoose.Schema({
    Subject:{
        type:String,
        require:true,
    },
    Year:{
        type:String,
        require:true,
    },
    Link:{
        type:String,
        require:true
    }
});

module.exports=mongoose.model("AnswerCopy",answerSchema);