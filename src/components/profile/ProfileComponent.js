import React, { Component } from "react";
import { Image, Container } from "react-bootstrap";

export default class ProfileComponent extends Component {
  render() {
    return (
      <div className="background-white">
        <div id="profile" className="comp-container">
          <div className="intro">
            <h1>Profile</h1>
            <p>Industrial Engineer & Junior Full Stack Web Developer</p>
          </div>
          <hr />
          <Container className="profile-container">
            <div className="profile-subcontainer">
              <h3 className="color-darker-green">About Me</h3>
              <p>
                I am a Web Developer (MERN and MEAN stack) with a complementary
                Business background.
              </p>
              <p>
                On the one hand, I am a highly logical and analytical person and
                I find complex problems to be challenging.
              </p>
              <p>
                On the other one, I am a people's person: I love working in
                teams!
              </p>
            </div>
            <div className="profile-container">
              <Image src="./52037.jpg" roundedCircle />
            </div>
            <div className="profile-subcontainer">
              <h3 className="color-darker-green">Details</h3>
              <p>Name:</p>
              <p>Manuel Toscano</p>
              <p>Age:</p>
              <p>29 years</p>
            </div>
          </Container>
        </div>
      </div>
    );
  }
}
