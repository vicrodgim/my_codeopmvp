var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var spotifyRoutes = require("./routes/spotifyRoutes");
var favoritesRoutes = require("./routes/favoritesRoutes");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
// app.use(express.static(path.join(__dirname, "public")));

app.use("/api/spotify", spotifyRoutes);
app.use("/api/favorites", favoritesRoutes);

module.exports = app;
