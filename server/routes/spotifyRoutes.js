const express = require("express");
const router = express.Router();
const {
  getAccessToken,
  searchPodcasts,
} = require("../controllers/spotifyController");

router.get("/token", getAccessToken);
router.get("/search", searchPodcasts);

module.exports = router;
