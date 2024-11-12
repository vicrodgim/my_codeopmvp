import React, { useState } from "react";
import "./FavoriteList.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const FavoriteList = ({
  favorites,
  handleDeleteFavorites,
  handlePodcastRating,
}) => {
  return (
    <Container className="my-5">
      {/* <h3 className="fav-podcasts">My favorite podcasts</h3> */}
      <Row>
        {favorites.map((podcast) => (
          <Col
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={podcast.spotify_id}
            className="mb-4"
          >
            <Card className="h-100 text-center d-flex flex-column">
              <Card.Img
                variant="top"
                src={podcast.cover_image}
                alt={podcast.title}
                className="style-image"
                style={{ width: "150px", objectFit: "cover" }}
              />
              <div className="rating-container">
                <fieldset className="rating">
                  <input
                    type="radio"
                    id={`star1${podcast.id}`}
                    name={`rating${podcast.id}`}
                    value="1"
                    checked={podcast.rating === 1}
                    onChange={() => handlePodcastRating(podcast.id, 1)}
                    disabled={podcast.rating > 0}
                  />
                  <label
                    className="full"
                    htmlFor={`star1${podcast.id}`}
                    title="Sucks big time - 1 star"
                  ></label>
                  <input
                    type="radio"
                    id={`star2${podcast.id}`}
                    name={`rating${podcast.id}`}
                    value="2"
                    checked={podcast.rating === 2}
                    onChange={() => handlePodcastRating(podcast.id, 2)}
                    disabled={podcast.rating > 0}
                  />
                  <label
                    className="full"
                    htmlFor={`star2${podcast.id}`}
                    title="Not so good - 2 stars"
                  ></label>
                  <input
                    type="radio"
                    id={`star3${podcast.id}`}
                    name={`rating${podcast.id}`}
                    value="3"
                    checked={podcast.rating === 3}
                    onChange={() => handlePodcastRating(podcast.id, 3)}
                    disabled={podcast.rating > 0}
                  />
                  <label
                    className="full"
                    htmlFor={`star3${podcast.id}`}
                    title="Meh - 3 stars"
                  ></label>
                  <input
                    type="radio"
                    id={`star4${podcast.id}`}
                    name={`rating${podcast.id}`}
                    value="4"
                    checked={podcast.rating === 4}
                    onChange={() => handlePodcastRating(podcast.id, 4)}
                    disabled={podcast.rating > 0}
                  />
                  <label
                    className="full"
                    htmlFor={`star4${podcast.id}`}
                    title="Pretty good - 4 stars"
                  ></label>
                  <input
                    type="radio"
                    id={`star5${podcast.id}`}
                    name={`rating${podcast.id}`}
                    value="5"
                    checked={podcast.rating === 5}
                    onChange={() => handlePodcastRating(podcast.id, 5)}
                    disabled={podcast.rating > 0}
                  />
                  <label
                    className="full"
                    htmlFor={`star5${podcast.id}`}
                    title="Amazing - 5 stars"
                  ></label>
                </fieldset>
              </div>
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title>{podcast.title}</Card.Title>
                <Card.Text
                  className="podcast-description"
                  style={{
                    fontSize: "0.9rem",
                    color: "#555",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  {podcast.description}
                </Card.Text>

                <Button
                  variant="danger"
                  className="mt-3"
                  onClick={() => handleDeleteFavorites(podcast.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
//           <li key={podcast.spotify_id}>
//             <h3>{podcast.title}</h3>
//             <img
//               src={podcast.cover_image}
//               alt={podcast.title}
//               style={{ width: "100px", height: "100px" }}
//             />
//             <p>{podcast.description}</p>
//             <fieldset className="rating">
//               <input
//                 type="radio"
//                 id={`star1${podcast.id}`}
//                 name={`rating${podcast.id}`}
//                 value="1"
//                 checked={podcast.rating === 1}
//                 onChange={() => handlePodcastRating(podcast.id, 1)}
//                 disabled={podcast.rating > 0}
//               />
//               <label
//                 className="full"
//                 htmlFor={`star1${podcast.id}`}
//                 title="Sucks big time - 1 star"
//               ></label>
//               <input
//                 type="radio"
//                 id={`star2${podcast.id}`}
//                 name={`rating${podcast.id}`}
//                 value="2"
//                 checked={podcast.rating === 2}
//                 onChange={() => handlePodcastRating(podcast.id, 2)}
//                 disabled={podcast.rating > 0}
//               />
//               <label
//                 className="full"
//                 htmlFor={`star2${podcast.id}`}
//                 title="Not so good - 2 stars"
//               ></label>
//               <input
//                 type="radio"
//                 id={`star3${podcast.id}`}
//                 name={`rating${podcast.id}`}
//                 value="3"
//                 checked={podcast.rating === 3}
//                 onChange={() => handlePodcastRating(podcast.id, 3)}
//                 disabled={podcast.rating > 0}
//               />
//               <label
//                 className="full"
//                 htmlFor={`star3${podcast.id}`}
//                 title="Meh - 3 stars"
//               ></label>
//               <input
//                 type="radio"
//                 id={`star4${podcast.id}`}
//                 name={`rating${podcast.id}`}
//                 value="4"
//                 checked={podcast.rating === 4}
//                 onChange={() => handlePodcastRating(podcast.id, 4)}
//                 disabled={podcast.rating > 0}
//               />
//               <label
//                 className="full"
//                 htmlFor={`star4${podcast.id}`}
//                 title="Pretty good - 4 stars"
//               ></label>
//               <input
//                 type="radio"
//                 id={`star5${podcast.id}`}
//                 name={`rating${podcast.id}`}
//                 value="5"
//                 checked={podcast.rating === 5}
//                 onChange={() => handlePodcastRating(podcast.id, 5)}
//                 disabled={podcast.rating > 0}
//               />
//               <label
//                 className="full"
//                 htmlFor={`star5${podcast.id}`}
//                 title="Amazing - 5 stars"
//               ></label>
//             </fieldset>

//             <button onClick={() => handleDeleteFavorites(podcast.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </Container>
//   );
// };
