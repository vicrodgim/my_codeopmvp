import React, { useState, useRef, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import { BannerSearchPage } from "../components/Podcast/BannerSearchPage";
import { SearchPodcast } from "../components/Podcast/SearchPodcast";
import { PodcastList } from "../components/Podcast/PodcastList";
import { DisplayPodcast } from "../components/Podcast/DisplayPodcast";
import "react-toastify/dist/ReactToastify.css";
import "./SearchPage.css";

export const SearchPage = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);
  const [loading, setLoading] = useState(false);

  const displayRef = useRef(null);

  useEffect(() => {
    if (selectedPodcast && displayRef.current) {
      displayRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedPodcast]);

  const handlePodcastClick = (podcast) => {
    setSelectedPodcast(podcast);
  };

  const addFavorites = async (podcast) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.post(
        "http://localhost:4000/api/favorites",
        {
          spotify_id: podcast.id,
          title: podcast.name,
          description: podcast.description,
          cover_image: podcast.images?.[0].url,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Could not add to favorites:", error);
      if (error.response) {
        console.error(error.response.data);
      }
      throw error;
    }
  };

  const handleAddFavorites = async (podcast) => {
    setLoading(true);
    try {
      await addFavorites(podcast);
      toast.success("Podcast has been added to favorites!", {
        autoClose: 3000,
      });
    } catch (error) {
      toast.error("Could not add to favorites. Please try again", {
        autoClose: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-page-background">
      <BannerSearchPage />
      <SearchPodcast setPodcasts={setPodcasts} />
      <PodcastList
        podcasts={podcasts}
        handlePodcastClick={handlePodcastClick}
      />
      <div ref={displayRef}>
        {selectedPodcast && (
          <DisplayPodcast
            selectedPodcast={selectedPodcast}
            handleAddFavorites={handleAddFavorites}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
