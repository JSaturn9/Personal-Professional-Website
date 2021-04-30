import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';

const NavBar = () => (
<Container>
  <Navbar expand="lg" variant="light" bg="light">
    <Navbar.Brand href="#">Pierogi Jo</Navbar.Brand>
        <Nav className="landing-page">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About Me</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
  </Navbar>
</Container>
);

export default NavBar;