import React from "react";

export const PodcastList = ({ podcasts, handlePodcastClick }) => {
  return (
    <div>
      <ul>
        {podcasts.map((podcast) => (
          <li
            key={podcast.id}
            onClick={() => {
              handlePodcastClick(podcast);
            }}
          >
            <h3>{podcast.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
