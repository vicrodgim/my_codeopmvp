import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { FavoriteList } from "../components/FavoritePodcast/FavoriteList";

export const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/favorites");

        const { podcasts } = response.data;

        setFavorites(podcasts);
      } catch (error) {
        console.error("Could not fetch favorites:", error);
        setError("Failed to load favorites. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);

  const postRating = async (id, rating) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/favorites/${id}/rating`,
        { rating }
      );
      return response.data;
    } catch (error) {
      console.error("Could not post rating:", error);
    }
  };

  const handlePodcastRating = async (id, rating) => {
    try {
      const updatedPodcast = await postRating(id, rating);
      //update  favorites podcast with  rating
      setFavorites((oldFavorites) =>
        oldFavorites.map((podcast) =>
          podcast.id === id ? { ...podcast, rating } : podcast
        )
      );
      toast.success("Rating has been updated!", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Could not update podcast rating:", error);
      toast.error("Could not updated rating. Please try again.", {
        autoClose: 2000,
      });
    }
  };

  const deleteFavorites = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/favorites/${id}`
      );

      return response.data;
    } catch (error) {
      console.error("Could not delete podcast:", error);
    }
  };

  const handleDeleteFavorites = async (id) => {
    try {
      await deleteFavorites(id);
      setFavorites((oldFavorites) =>
        oldFavorites.filter((podcast) => podcast.id !== id)
      );
      toast.success("Podcast was removed from favorites!", {
        autoClose: 2000,
      });
    } catch (error) {
      console.error("Could not delete podcast:", error);
      toast.error("Could not delete podcast. Please try again.", {
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      {favorites.length > 0 ? (
        <FavoriteList
          favorites={favorites}
          handleDeleteFavorites={handleDeleteFavorites}
          handlePodcastRating={handlePodcastRating}
        />
      ) : (
        <p>No favorited added</p>
      )}
      <ToastContainer />
    </div>
  );
};
