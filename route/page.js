const express = require("express");
const router = express.Router();

const { getHomePage } = require("../controllers/pagecontroller");

router.get("/", getHomePage);

module.exports = router;
