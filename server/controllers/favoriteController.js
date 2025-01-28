const pool = require("../config/db");

const addPodcast = async (req, res) => {
  const { spotify_id, title, description, cover_image } = req.body;
  const user_id = req.user_id;
  console.log("User ID:", req.user_id);

  try {
    const [podcast] = await pool.query(
      "INSERT INTO favorites(spotify_id, title, description, cover_image, user_id) VALUES (?,?,?,?,?)",
      [spotify_id, title, description, cover_image, user_id]
    );

    return res.status(201).json({
      podcast: {
        spotify_id,
        title,
        description,
        cover_image,
        user_id,
      },
    });
  } catch (error) {
    console.error("ERROR ADDING PODCAST:", error);
    return res.status(500).json({
      error: "An error occurred while adding a podcast",
      datils: error.message,
    });
  }
};

const getPodcasts = async (req, res) => {
  const user_id = req.user_id;
  try {
    const [podcasts] = await pool.query(
      "SELECT * FROM favorites WHERE user_id = ?",
      [user_id]
    );
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
  const user_id = req.user_id;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM favorites WHERE id=? AND user_id=?",
      [id, user_id]
    );

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
  const user_id = req.user_id;
  if (!rating) {
    return res.status(400).json({
      error: "Rating is required to update the podcast",
    });
  }

  try {
    const [result] = await pool.query(
      "UPDATE favorites SET rating = ? WHERE id =? AND user_id=?",
      [rating, id, user_id]
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
  const user_id = req.user_id;

  try {
    const [result] = await pool.query(
      "DELETE FROM favorites WHERE id=? AND user_id=?",
      [id, user_id]
    );
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
