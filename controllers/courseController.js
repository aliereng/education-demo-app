const asyncHandler = require('express-async-handler');

const Course = require('../models/Course');

// const getAllCourse = asyncHandler(async (req, res) => {
//   const courses = await Course.find();

//   res.status(200).json({
//     success: true,
//     data: courses,
//   });
// });

const createNewCourse = asyncHandler(async (req, res) => {
  const course = await Course.create(req.body);
  
  res.status(201).json({
    success: true,
    data: course,
  });
});

module.exports = {
  createNewCourse,
};
