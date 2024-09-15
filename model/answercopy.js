const mongoose=require('mongoose');
// mongoose.connect('mongodb+srv://gk0507818:c2joUMsAuPCh8UhB@semprepdatabase.h9jgx.mongodb.net/')

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