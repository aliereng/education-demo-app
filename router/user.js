const express = require("express");
const router = express.Router();
const { createNewUser, loginUser, logout } = require('../controllers/authController');

router.post("/register", createNewUser);
router.post("/login", loginUser)
router.get("/logout", logout)

module.exports = router;
