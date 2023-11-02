const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
    coursecode:{
        type:Number,
        unique:true,
        required:true,
    },
    name:{
        type:String,
        required:true
    },
    description :{
        type:String,
    },
    students : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Student'
    }
    ]
},{timestamps:true
})
module.exports=mongoose.model('Course',courseSchema)