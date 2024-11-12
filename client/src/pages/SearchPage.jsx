import React, { useState } from "react";
import { SearchPodcast } from "../components/Podcast/SearchPodcast";
import { PodcastList } from "../components/Podcast/PodcastList";
import { DisplayPodcast } from "../components/Podcast/DisplayPodcast";
import axios from "axios";

export const SearchPage = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const handlePodcastClick = (podcast) => {
    // console.log("selected podcast:", podcast);

    setSelectedPodcast(podcast);
  };

  //adds podcasts to database

  const addFavorites = async (podcast) => {
    try {
      const response = await axios.post("http://localhost:4000/api/favorites", {
        spotify_id: podcast.id,
        title: podcast.name,
        description: podcast.description,
        cover_image: podcast.images?.[0].url,
      });

      return response.data;
    } catch (error) {
      console.error("Could not add to favorites:", error);
      if (error.response) {
        console.error(error);
      }
      throw error;
    }
  };

  const handleAddFavorites = async (podcast) => {
    try {
      await addFavorites(podcast);
      alert("Podcast has been added to favorites!");
    } catch (error) {
      alert("Could not add to favorites. Please try again");
    }
  };

  return (
    <div>
      <SearchPodcast setPodcasts={setPodcasts} />
      <PodcastList
        podcasts={podcasts}
        handlePodcastClick={handlePodcastClick}
      />
      {selectedPodcast && (
        <DisplayPodcast
          selectedPodcast={selectedPodcast}
          handleAddFavorites={handleAddFavorites}
        />
      )}
    </div>
  );
};
