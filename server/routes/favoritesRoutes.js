var express = require("express");
var router = express.Router();

const {
  addPodcast,
  getPodcasts,
  getPodcast,
  addRating,
  deletePodcast,
} = require("../controllers/favoriteController");

router.post("/", addPodcast);
router.get("/", getPodcasts);
router.get("/:id", getPodcast);
router.put("/:id/rating", addRating);
router.delete("/:id", deletePodcast);

module.exports = router;
