import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
// import logo from './logo.svg';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          {/* <img
            // src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="Logo"
          /> */}
          GeoGenius
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/game">Game</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar;