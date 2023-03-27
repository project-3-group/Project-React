import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from './logo.svg';
import { useAuthCtx, useUser } from "../../contexts/authCtx";

function NavBar() {
  const user = useUser();
  const { logout } = useAuthCtx();

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link to="/" className="navbar-brand">
          {/* <img
            // src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> */}
          GeoGenius
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/game" className="nav-link">Game</Link>
            <Link to="/about" className="nav-link">About Us</Link>
          </Nav>
          {user === null ? (
            <Nav className="gap-1">
              <Link
                to="/signup"
                className="btn btn-outline-secondary"
                role="button"
              >
                SignUp
              </Link>
              <Link to="/login" className="btn btn-primary" role="button">
                Login
              </Link>
            </Nav>
          ) : (
            <Nav className="gap-1">
              <Link to="/addFact" className="nav-link">
                Add Fact
              </Link>
              <button className="btn btn-outline-secondary" onClick={logout}>
                Logout
              </button>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
