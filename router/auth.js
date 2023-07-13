const express = require("express");

const { loginUser, logout } = require('../controllers/authController');


const router = express.Router();

router.post("/login", loginUser)
router.get("/logout", logout)

module.exports = router;
