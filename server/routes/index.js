const express = require("express");
const router = express.Router();
const getExample = require("../controllers/favouriteController");

/* GET example */
router.get("/", getExample);

module.exports = router;
