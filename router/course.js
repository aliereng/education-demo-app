const express = require("express");
const router = express.Router();

const { createNewCourse } = require("../controllers/courseController");
const { getCourseSinglePage,  } = require("../controllers/pageController")
const {getAccessToRoute, checkRole} = require('../middlewares/authMiddleware')

router.post("/", [getAccessToRoute, checkRole(["admin", "teacher"])], createNewCourse);
router.get('/:id', getCourseSinglePage);

module.exports = router;
