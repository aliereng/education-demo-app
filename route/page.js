const express = require("express");
const router = express.Router();

const { getHomePage, getAboutPage, getCoursesPage, getContactPage, getDashboardPage, getLoginPage, getRegisterPage } = require("../controllers/pagecontroller");

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/courses", getCoursesPage);
router.get("/contact", getContactPage);
router.get("/dashboard", getDashboardPage);
router.get("/login", getLoginPage);
router.get("/register", getRegisterPage);

module.exports = router;
