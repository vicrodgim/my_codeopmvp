import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./DisplayPodcast.css";

export const DisplayPodcast = ({ selectedPodcast, handleAddFavorites }) => {
  return (
    <Card className="text-center mb-4 custom-card">
      <Card.Body>
        <Card.Img
          variant="top"
          src={selectedPodcast.images?.[0].url}
          alt={selectedPodcast.name}
          className="card-img"
        />
        <Card.Title className="card-title">{selectedPodcast.name}</Card.Title>
        <Card.Text className="card-text">
          {selectedPodcast.description}
        </Card.Text>
        <Button
          variant="dark"
          onClick={() => handleAddFavorites(selectedPodcast)}
        >
          Add to Favorites
        </Button>
      </Card.Body>
    </Card>
  );
};
