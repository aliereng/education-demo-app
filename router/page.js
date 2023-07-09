const express = require("express");
const router = express.Router();

const { getHomePage, getAboutPage, getCoursesPage, getContactPage, getDashboardPage, getLoginPage, getRegisterPage } = require("../controllers/pageController");
const {getAccessToRoute, alredyRegistered} = require("../middlewares/authMiddlware");

router.get("/", getHomePage);
router.get("/about", getAboutPage);
router.get("/courses", getCoursesPage);
router.get("/contact", getContactPage);
router.get("/dashboard", getAccessToRoute ,getDashboardPage);
router.get("/login", getLoginPage);
router.get("/register", alredyRegistered ,getRegisterPage);

module.exports = router;
