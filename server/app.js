const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const spotifyRouter = require("./routes/spotifyRoutes");
const favoritesRouter = require("./routes/favoritesRoutes");
const authRouter = require("./routes/auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use("/api/spotify", spotifyRouter);
app.use("/api/favorites", favoritesRouter);
app.use("/api/auth", authRouter);

module.exports = app;
