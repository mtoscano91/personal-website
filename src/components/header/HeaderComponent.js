import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div id="header">
        <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
          <Navbar.Brand href="#profile">
            <img
              src="./Manu Logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Manu logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#experiences">Experiences</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
