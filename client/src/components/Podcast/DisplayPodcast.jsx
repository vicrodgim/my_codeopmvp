import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const DisplayPodcast = ({ selectedPodcast, handleAddFavorites }) => {
  return (
    <Card className="text-center mb-4" style={{ width: "60%", margin: "auto" }}>
      <Card.Body>
        <Card.Img
          variant="top"
          src={selectedPodcast.images?.[0].url}
          alt={selectedPodcast.name}
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
            marginBottom: "20px",
          }}
        />
        <Card.Title>{selectedPodcast.name}</Card.Title>
        <Card.Text>{selectedPodcast.description}</Card.Text>
        <Button
          variant="success"
          onClick={() => handleAddFavorites(selectedPodcast)}
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};
