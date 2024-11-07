const express = require("express");
const router = express.Router();
//import the acess token
const {
  getAccessToken,
  searchPodcasts,
} = require("../controllers/spotifyController");

//route to get Spotify access token
router.get("/token", getAccessToken);

//route to search for podcasts

router.get("/search", searchPodcasts);

module.exports = router;
