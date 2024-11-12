import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const PodcastList = ({ podcasts, handlePodcastClick }) => {
  return (
    <Container className="mt10">
      <Row className="mb4">
        {podcasts.map((podcast) => {
          return (
            <Col
              key={podcast.id}
              xs={12}
              md={2}
              className="text-center mb-4"
              onClick={() => handlePodcastClick(podcast)}
            >
              <img
                src={podcast.images?.[0]?.url}
                alt={podcast.name}
                className="podcast-image"
                style={{
                  width: "80%",
                  cursor: "pointer",
                  borderRadius: "10px",
                }}
              />
              <h5 className="mt-4">{podcast.name}</h5>
            </Col>
          );
        })}
        ;
      </Row>
    </Container>
  );
};
