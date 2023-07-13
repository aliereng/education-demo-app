const express = require("express");

const {createNewUser, deleteUser} = require('../controllers/userController')


const router = express.Router();

router.post("/register", createNewUser);
router.get("/delete", deleteUser)

module.exports = router;
