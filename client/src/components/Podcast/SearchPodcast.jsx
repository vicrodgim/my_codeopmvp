import { useState } from "react";
import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./SearchPodcast.css";

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
      console.error("Podcasts could not be fetched:", error);
    }
  };

  return (
    <div>
      <Container className="large-margin">
        <Form onSubmit={handleSubmit}>
          <Row className="mb-1 justify-content-center">
            <Col md={5}>
              <FloatingLabel
                controlId="formTopic"
                label="Topic of Interest"
                className="mb-2"
              >
                <Form.Control
                  type="text"
                  placeholder="topic of interest"
                  value={topic}
                  onChange={(event) => {
                    setTopic(event.target.value);
                  }}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="mb-1 justify-content-center">
            <Col md={5}>
              <FloatingLabel
                controlId="formCountry"
                label="Country"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Enter a country"
                  value={country}
                  onChange={(event) => {
                    setCountry(event.target.value);
                  }}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col md="auto">
              <Button variant="outline-light" size="lg" type="submit">
                Search
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};
