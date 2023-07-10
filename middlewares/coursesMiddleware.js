const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const CustomError = require("../helpers/errorHelper");

const courseAlreadyExist = asyncHandler(async(req,res,next)=> {
    const user = await User.findById(req.session.userID);
    if(user.courses.includes(req.body.course_id)){
        return next(new CustomError("daha önce bu kursa kaydoldunuz.", 400))
    }else{
        next();
    }
})

module.exports = {
    courseAlreadyExist
}