const asyncHandler = require('express-async-handler');

const User = require('../models/User');
const Course = require('../models/Course');

const createNewUser = asyncHandler(async (req, res) => {
  await User.create(req.body)
  res.status(201).redirect("/login")
});

const deleteUser = asyncHandler(async (req, res) => {
    await User.findByIdAndDelete(req.query.id)
    
    res.status(201).redirect("/dashboard")
  });

module.exports = {
    createNewUser,
    deleteUser
}
