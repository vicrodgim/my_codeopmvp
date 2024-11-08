export const DisplayPodcast = ({ selectedPodcast }) => {
  const handleClick = async () => {
    try {
      const { data } = await axios.post("");
    } catch (error) {}
  };

  return (
    <div>
      <h2>{selectedPodcast.name}</h2>
      <img
        src={selectedPodcast.images?.[0].url}
        alt={selectedPodcast.name}
        style={{ width: "200px", height: "200px" }}
      />
      <h3>{selectedPodcast.description}</h3>
      <button onClick={handleClick}>Add to Favorites</button>
    </div>
  );
};
