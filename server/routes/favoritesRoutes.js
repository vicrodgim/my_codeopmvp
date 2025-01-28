var express = require("express");
var router = express.Router();

const userShouldBeLoggedIn = require("../guard/userShouldBeLoggedIn");

const {
  addPodcast,
  getPodcasts,
  getPodcast,
  addRating,
  deletePodcast,
} = require("../controllers/favoriteController");

router.use(userShouldBeLoggedIn);
router.post("/", addPodcast);
router.get("/", getPodcasts);
router.get("/:id", getPodcast);
router.put("/:id/rating", addRating);
router.delete("/:id", deletePodcast);

module.exports = router;
