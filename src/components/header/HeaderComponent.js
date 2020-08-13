import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

export default class HeaderComponent extends Component {
  render() {
    return (
      <div id="header">
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="#profile">
            <img
              src="./52037.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Manu logo"
            />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#experiences">Experiences</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form> */}
        </Navbar>
      </div>
    );
  }
}
