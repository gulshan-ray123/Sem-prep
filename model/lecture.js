const mongoose= require('mongoose');


const videoSchema= mongoose.Schema({

    Link:{
        type:String,
        require:true
    },
    Year:{
        type:Number,
        require:true,
    },
    Subject:{
        type:String,
        require:true
    }, 
    Genre:{
        type:String,
        require:true
    },
    Video:{
        type:String,
        require:true
    }
})

module.exports= mongoose.model("videolectures",videoSchema);