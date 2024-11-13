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
          style={{
            width: "160px",
            height: "160px",
            objecFit: "cover",
            marginBottom: "30px",
            marginTtop: "30px",
          }}
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
