import { useState } from "react";
import axios from "axios";

export const SearchPodcast = ({ setPodcasts }) => {
  const [topic, setTopic] = useState("");
  const [country, setCountry] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        "http://localhost:4000/api/spotify/search",
        {
          params: {
            topic: topic,
            market: country,
          },
        }
      );

      setPodcasts(response.data);

      setTopic("");
      setCountry("");
    } catch (error) {
      console.error("podcasts could not be fetched:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="Enter topic of interest"
            value={topic}
            onChange={(event) => {
              setTopic(event.target.value);
            }}
          />
        </div>

        <div>
          <input
            placeholder="Enter a country"
            value={country}
            onChange={(event) => {
              setCountry(event.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};
