const express = require("express");
const router = express.Router();

const { createNewCourse, enrollCourse, releaseCourse} = require("../controllers/courseController");
const { getCourseSinglePage } = require("../controllers/pageController")
const {getAccessToRoute, checkRole} = require('../middlewares/authMiddleware');
const { courseAlreadyExist } = require("../middlewares/coursesMiddleware");

router.post("/", [getAccessToRoute, checkRole(["admin", "teacher"])], createNewCourse);
router.get('/:id', getCourseSinglePage);
router.post("/enroll", [getAccessToRoute, checkRole(["student"]), courseAlreadyExist], enrollCourse);
router.post("/release", releaseCourse)

module.exports = router;
