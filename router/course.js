const express = require("express");
const router = express.Router();

const { createNewCourse } = require("../controllers/courseController");
const { getCourseSinglePage,  } = require("../controllers/pageController")

router.post("/", createNewCourse);
router.get('/:id', getCourseSinglePage);

module.exports = router;
