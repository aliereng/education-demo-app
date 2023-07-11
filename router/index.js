const express = require('express');
const router = express.Router();

const page = require("./page");
const course = require("./course");
const category = require("./category");
const user = require("./user");
const contact = require("./contact");


router.use("/",page);
router.use("/courses",course);
router.use("/categories",category);
router.use("/users",user);
router.use("/contact", contact);
module.exports = router;