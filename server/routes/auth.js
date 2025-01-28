var express = require("express");
var router = express.Router();
require("dotenv").config();
const authControler = require("../controllers/authController");
const userShouldBeLoggedIn = require("../guard/userShouldBeLoggedIn");

router.post("/register", authControler.register);

router.post("/login", authControler.login);

router.get("/profile", userShouldBeLoggedIn, authControler.getProfile);

module.exports = router;
