const express = require("express");
const router = express.Router();

const { send } = require('../controllers/contactController');

router.post("/send", send);

module.exports = router;
