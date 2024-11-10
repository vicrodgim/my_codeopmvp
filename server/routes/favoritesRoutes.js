var express = require("express");
var router = express.Router();

const {
  addPodcast,
  getPodcasts,
  getPodcast,
  addRating,
  deletePodcast,
} = require("../controllers/favoriteController");

//adds podcasts to favorite list
router.post("/", addPodcast);
//displays all podcasts saved in fav list
router.get("/", getPodcasts);
//get podcast
router.get("/:id", getPodcast);
//adds rating once it's been listened
router.put("/:id/rating", addRating);
//deletes it
router.delete("/:id", deletePodcast);

module.exports = router;
