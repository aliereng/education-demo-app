const asyncHandler = require('express-async-handler');

const Course = require('../models/Course');
const User = require('../models/User');
const Category = require('../models/Category');

// const getAllCourse = asyncHandler(async (req, res) => {
//   const courses = await Course.find();

//   res.status(200).json({
//     success: true,
//     data: courses,
//   });
// });

const createNewCourse = asyncHandler(async (req, res) => {
  await Course.create({
    createdBy: req.session.userID,
    ...req.body
  });
  
  req.flash("success",`${req.body.name} kursu başarı ile eklendi.`)
  res.status(201).redirect('dashboard');
});
const enrollCourse = asyncHandler(async(req,res)=> {
  const user = await User.findById(req.session.userID);
  user.courses.push(req.body.course_id);
  await user.save();
  res.status(200).redirect("/dashboard");
})
const releaseCourse = asyncHandler(async(req,res)=> {
  const user = await User.findById(req.session.userID);
  const index =  user.courses.indexOf(req.body.course_id);
  user.courses.splice(index,1);
  await user.save();
  res.status(200).redirect("/dashboard");
})

const deleteCourse = asyncHandler(async (req, res, next)=>{
  await Course.findByIdAndDelete(req.params.id);
  res.status(200).redirect('/dashboard');
})

const updateCourse = asyncHandler(async(req, res, next)=> {
  await Course.findByIdAndUpdate(req.body.id,{
    ...req.body
  },{new:true, runValidators:true})
  res.status(200).redirect('/dashboard');
})


module.exports = {
  createNewCourse,
  enrollCourse,
  releaseCourse,
  deleteCourse,
  updateCourse
};
