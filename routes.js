const express = require('express')
const router = express.Router()
const studentModel = require('../models/studentModel');
const{createStudent,loginStudent}=require('../controller/studentControl')
const courseModel = require('../models/courseModel');

// router.get('/',(req,res)=>{
//     res.send("Router Method!!")
// })
// router.post('/student',createStudent)

// //login student
// router.post("/login",loginStudent)
// module.exports=router;
router.get('/students', async (req, res) => {
  try {
    const students = await studentModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
