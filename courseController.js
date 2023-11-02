const courseModel = require('../models/courseModel');

const createCourse = async function(req,res){
    try{
        let course = req.body;
        let {coursecode, name,description,students}=course;

    let uniqueCode =await courseModel.findOne({coursecode})
    if(uniqueCode) return res.send({message : "Coursecode already exists!"})

    let courseCreate =await courseModel.create(course)
    return res.send({message : courseCreate})
}catch(err){
    console.log("server error",err)
}
}
module.exports ={createCourse}