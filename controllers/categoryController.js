const asyncHandler = require('express-async-handler');

const Category = require("../models/Category");

const createNewCategory = asyncHandler(async (req, res) => {
    const category = await Category.create(req.body);
    
    res.status(201).redirect("/dashboard");
  });
  
  module.exports = {
    // getAllCourse,
    createNewCategory,
  };
  