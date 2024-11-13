require("dotenv").config();
const axios = require("axios");

//get spotify acess token
const getAccessToken = async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;

  //combine clientid and secret and convert the string into buffer(handle binary data), toString ("base64")converts buffer into a base64 encoded string
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

    // console.log(response);
    // console.log(response.data);
    const accessToken = response.data.access_token;

    //send the response with the access token

    res.json({ accessToken });
  } catch (error) {
    console.error("Could not fetch access token");
    res.status(500).json({ error: "could not get Spotify access token" });
  }
};

//search for podcasts

const searchPodcasts = async (req, res) => {
  //query parameters
  const { topic, market } = req.query;
  // console.log(req.query);
  //first, access token must be fetched
  console.log("aaa");
  try {
    const responseToken = await axios.get(
      "http://localhost:4000/api/spotify/token"
    );
    // console.log(responseToken);
    // console.log(responseToken.data);

    const accessToken = responseToken.data.accessToken;

    console.log(accessToken);

    const spotifyResponse = await axios.get(
      "https://api.spotify.com/v1/search",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          q: topic,
          type: "show",
          market: market || "US", //default
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
