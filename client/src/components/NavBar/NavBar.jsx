import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export const NavBar = ({ onLogout }) => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        data-bs-theme="light"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            InTheLoop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Search
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
              Favorites
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Button
              as={Link}
              to="/login"
              variant="outline-secondary"
              className="rounded-pill"
              onClick={onLogout}
            >
              Log out
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
