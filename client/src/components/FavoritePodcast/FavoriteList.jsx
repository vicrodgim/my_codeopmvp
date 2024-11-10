import React, { useState } from "react";
import "./FavoriteList.css";

export const FavoriteList = ({
  favorites,
  handleDeleteFavorites,
  handlePodcastRating,
}) => {
  return (
    <div>
      <h3>My Favorite Podcasts</h3>
      <ul>
        {favorites.map((podcast) => (
          <li key={podcast.spotify_id}>
            <h3>{podcast.title}</h3>
            <img
              src={podcast.cover_image}
              alt={podcast.title}
              style={{ width: "100px", height: "100px" }}
            />
            <p>{podcast.description}</p>
            <fieldset className="rating">
              <input
                type="radio"
                id={`star1${podcast.id}`}
                name={`rating${podcast.id}`}
                value="1"
                onChange={() => handlePodcastRating(podcast.id, 1)}
              />
              <label
                class="full"
                htmlFor={`star1${podcast.id}`}
                title="Sucks big time - 1 star"
              ></label>
              <input
                type="radio"
                id={`star2${podcast.id}`}
                name={`rating${podcast.id}`}
                value="2"
                onChange={() => handlePodcastRating(podcast.id, 2)}
              />
              <label
                class="full"
                htmlFor={`star2${podcast.id}`}
                title="Not so good - 2 stars"
              ></label>
              <input
                type="radio"
                id={`star3${podcast.id}`}
                name={`rating${podcast.id}`}
                value="3"
                onChange={() => handlePodcastRating(podcast.id, 3)}
              />
              <label
                class="full"
                htmlFor={`star3${podcast.id}`}
                title="Meh - 3 stars"
              ></label>
              <input
                type="radio"
                id={`star4${podcast.id}`}
                name={`rating${podcast.id}`}
                value="4"
                onChange={() => handlePodcastRating(podcast.id, 4)}
              />
              <label
                class="full"
                htmlFor={`star4${podcast.id}`}
                title="Pretty good - 4 stars"
              ></label>
              <input
                type="radio"
                id={`star5${podcast.id}`}
                name={`rating${podcast.id}`}
                value="5"
                onChange={() => handlePodcastRating(podcast.id, 5)}
              />
              <label
                class="full"
                htmlFor={`star5${podcast.id}`}
                title="Amazing - 5 stars"
              ></label>
            </fieldset>

            <button onClick={() => handleDeleteFavorites(podcast.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
