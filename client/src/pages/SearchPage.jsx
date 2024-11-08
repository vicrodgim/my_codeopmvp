import React, { useState } from "react";
import { SearchPodcast } from "../components/Podcast/SearchPodcast";
import { PodcastList } from "../components/Podcast/PodcastList";
import { DisplayPodcast } from "../components/Podcast/DisplayPodcast";

export const SearchPage = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState([]);

  const handlePodcastClick = (podcast) => {
    setSelectedPodcast(podcast);
  };

  return (
    <div>
      <SearchPodcast setPodcasts={setPodcasts} />
      <PodcastList
        podcasts={podcasts}
        handlePodcastClick={handlePodcastClick}
      />
      <DisplayPodcast selectedPodcast={selectedPodcast} />
    </div>
  );
};
