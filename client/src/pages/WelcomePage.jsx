import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./WelcomePage.css";

export const WelcomePage = ({ isLoggedIn, logout }) => {
  const navigate = useNavigate();

  return (
    <div className="background-homepage">
      <div className="homepage">
        <div className="homepage-box">
          <h1>InTheLoop</h1>
          <p>
            In the Loop is your go-to podcast app for staying informed. Explore
            trending news and discussions by topics and countries, and easily
            track the podcasts that matter to you—all in one place.
          </p>
          <div className="hmpg-nav-buttons">
            {!isLoggedIn ? (
              <Button
                variant="outline-secondary"
                className="rounded-pill welcome-btn"
                onClick={() => navigate("/login")}
              >
                LOG IN
              </Button>
            ) : (
              <Button
                variant="outline-secondary"
                className="rounded-pill welcome-btn"
                onClick={() => navigate("/")}
              >
                HOMEPAGE
              </Button>
            )}

            {!isLoggedIn ? (
              <Button
                variant="outline-secondary"
                className="rounded-pill welcome-btn"
                onClick={() => navigate("/register")}
              >
                REGISTER
              </Button>
            ) : (
              <Button
                variant="outline-secondary"
                className="rounded-pill welcome-btn"
                onClick={() => {
                  logout(), navigate("/welcome");
                }}
              >
                LOG OUT
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
