const express = require('express');
const router = express.Router();

const page = require("./page");

router.get("/",page);


module.exports = router;