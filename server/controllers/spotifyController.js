require("dotenv").config();
const axios = require("axios");

const getAccessToken = async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      new URLSearchParams({
        grant_type: "client_credentials",
      }),
      {
        headers: {
          Authorization: `Basic ${Buffer.from(
            `${client_id}:${client_secret}`
          ).toString("base64")}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    const accessToken = response.data.access_token;

    res.json({ accessToken });
  } catch (error) {
    console.error("Could not fetch access token");
    res.status(500).json({ error: "could not get Spotify access token" });
  }
};

const searchPodcasts = async (req, res) => {
  const { topic, market } = req.query;

  try {
    const responseToken = await axios.get(
      "http://localhost:4000/api/spotify/token"
    );

    const accessToken = responseToken.data.accessToken;

    const spotifyResponse = await axios.get(
      "https://api.spotify.com/v1/search",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: topic,
          type: "show",
          market: market || "US",
          limit: 6,
        },
      }
    );

    console.log(spotifyResponse);

    res.json(spotifyResponse.data.shows.items);
  } catch (error) {
    console.error("Error searching for podcast:", error);
    res.status(500).send("Could not fetch podcasts from Spotify");
  }
};

module.exports = { getAccessToken, searchPodcasts };
