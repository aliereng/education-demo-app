const asyncHandler = require('express-async-handler');

const Course = require('../models/Course');
const Category = require('../models/Category');
const User = require('../models/User');


const getHomePage = (req, res) => {

    res.status(200).render('index', {
        page_name: 'index'
    });

}

const getAboutPage = (req, res) => {

    res.status(200).render('about', {
        page_name: 'about'
    });

}

const getCoursesPage = asyncHandler(async(req, res) => {
    
    let selectedCategory; 
    let courses;
    const categories = await Category.find();
    
    if(req.query.category){
        
        selectedCategory = await Category.findOne({slug:req.query.category})
        courses = await Course.find({category:selectedCategory._id}).populate({path:'createdBy', select:"name"});
    
    }else{
        
        courses = await Course.find().populate({path:'createdBy', select:"name"});
    
    }

    res.render('courses', {
        courses,
        categories,
        page_name: 'courses'
    });

})
const getCourseSinglePage = asyncHandler(async(req,res)=> {
    const course = await Course.findById(req.params.id).populate({path:'createdBy', select:'name'})
    const categories = await Category.find();

    res.status(200).render('course',{
        course,
        categories,
        page_name: 'course'
    })
})

const getContactPage = (req, res) => {

    res.status(200).render('contact', {
        page_name: 'contact'
    });

}
const getDashboardPage = asyncHandler (async (req, res) => {
    let courses;
    const user = await User.findById(req.session.userID).populate("courses")
    if(user.role === "student"){
        courses = user.courses
    }else{
        courses = await Course.find({createdBy: req.session.userID});
    }
    const categories = await Category.find();
    res.status(200).render('dashboard', {
        page_name: 'dashboard',
        user,
        categories,
        courses
    });

})
const getLoginPage = (req, res) => {

    res.status(200).render('login',{
        page_name:"login"
    });

}
const getRegisterPage = (req, res) => {

    res.status(200).render('register', {
        page_name:"register"
    });

}

module.exports = {
    getHomePage,
    getAboutPage,
    getCoursesPage,
    getContactPage,
    getDashboardPage,
    getLoginPage,
    getRegisterPage,
    getCourseSinglePage
}