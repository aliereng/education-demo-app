const express = require("express");
const router = express.Router();

const { createNewCategory  } = require("../controllers/categoryController");

router.post("/", createNewCategory);

module.exports = router;
