const pool = require("../config/db");

const addPodcast = async (req, res) => {
  const { spotify_id, title, description, cover_image } = req.body;

  try {
    const [podcast] = await pool.query(
      "INSERT INTO favorites(spotify_id, title, description, cover_image) VALUES (?,?,?,?)",
      [spotify_id, title, description, cover_image]
    );

    return res.status(201).json({
      podcast: {
        spotify_id,
        title,
        description,
        cover_image,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while adding a podcast",
    });
  }
};

const getPodcasts = async (req, res) => {
  try {
    const [podcasts] = await pool.query("SELECT * FROM favorites");
    return res.status(200).json({ podcasts });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ error: "An error occurred while fetching the podcasts" });
  }
};

const getPodcast = async (req, res) => {
  const { id } = req.params;

  try {
    const [rows] = await pool.query("SELECT * FROM favorites WHERE id=?", [id]);

    if (rows.length === 0) {
      return res.status(404).json({
        error: "An error occurred while fetching the podcast",
      });
    }

    return res.json({
      data: rows[0],
    });
  } catch (error) {
    console.log("Error fetching podcast:", error);

    return res.status(500).json({
      error: "Failed to get podcast",
    });
  }
};

const addRating = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body;
  if (!rating) {
    return res.status(400).json({
      error: "Rating is required to update the podcast",
    });
  }

  try {
    const [result] = await pool.query(
      "UPDATE favorites SET rating = ? WHERE id =?",
      [rating, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Rating could not be updated",
      });
    }

    return res.status(200).json({
      message: "Successfully updated rating",
      podcast: {
        id: id,
        rating,
      },
    });
  } catch (error) {
    console.error("there was an error updating the rating:", error);
    return res.status(500).json({
      error: "An error occurred while updating student",
    });
  }
};

const deletePodcast = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query("DELETE FROM favorites WHERE id=?", [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Podcast does not exist",
      });
    }
    return res.status(200).json({
      message: "Successfully deleted the podcast",
    });
  } catch (error) {
    console.error("Error deleting podcast", error);
    return res.status(500).json({
      error: "An error occurred while deleting the podcast",
    });
  }
};

module.exports = {
  addPodcast,
  getPodcasts,
  getPodcast,
  addRating,
  deletePodcast,
};
