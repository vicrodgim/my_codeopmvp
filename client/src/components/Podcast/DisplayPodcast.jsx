export const DisplayPodcast = ({ selectedPodcast, handleAddFavorites }) => {
  return (
    <div>
      <h2>{selectedPodcast.name}</h2>
      <img
        src={selectedPodcast.images?.[0].url}
        alt={selectedPodcast.name}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{selectedPodcast.description}</h3>
      <button onClick={() => handleAddFavorites(selectedPodcast)}>
        Add to Favorites
      </button>
    </div>
  );
};
