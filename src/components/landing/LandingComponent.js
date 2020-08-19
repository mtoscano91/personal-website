import React, { Component } from "react";
import landingImg from "../../Landing2.jpeg";

export default class LandingComponent extends Component {
  render() {
    return (
      <div
        id="top"
        className="landing"
        style={{
          height: 618 + "px",
          backgroundImage: landingImg,
        }}
      >
        <div className="container">
          <h1>Manuel Toscano</h1>
          <p className="lead">Personal Website</p>
        </div>

        <div className="overlay"></div>

        <a href="#profile" className="scroll-down">
          <span className="glyphicon glyphicon-chevron-down"></span>
        </a>
      </div>
    );
  }
}
