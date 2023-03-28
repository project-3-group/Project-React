import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthCtx, useUser } from "../../contexts/authCtx";
import logo from '../../assest/internet.png'
import './Navbar.css'
// import logo from './logo.svg';


function NavBar() {
  const user = useUser();
  const { logout } = useAuthCtx();

  return (
    <Navbar expand="lg" className='main-navbar navbar-dark'>
      <Container>
        <Link to="/" className='navbar-brand'>
          <img
            src={logo}
            className="d-inline-block align-top p-1 logo"
            alt="Logo"
          />

          GeoGenius
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link active underline-animation">Home</Link>
            <Link to="/game" className="nav-link active underline-animation">Game</Link>
            <Link to="/about" className="nav-link active underline-animation">About Us</Link>
          </Nav>
          {user === null ? (
            <Nav className="gap-1">
              <Link
                to="/signup"
                className="btn btn-outline-secondary button"
                role="button"
              >
                SignUp
              </Link>
              <Link to="/login" className="btn btn-primary button" role="button">
                Login
              </Link>
            </Nav>
          ) : (
            <Nav className="gap-1">
              <Link to="/addFact" className="nav-link active underline-animation">
                Add Fact
              </Link>
              <button className="btn btn-outline-secondary button" onClick={logout}>
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
