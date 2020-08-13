import React, { Component } from "react";
import { Col } from "react-bootstrap";

export default class ExperienceDetailComponent extends Component {
  render() {
    return (
      <>
        <Col md={4}>
          <h5>{this.props.experience.place}</h5>
          <p>
            {this.props.experience.dateStart} - {this.props.experience.dateEnd}
          </p>
        </Col>
        <Col md={8}>
          <h6>{this.props.experience.title}</h6>
          <span className="hidden-md">
            {this.props.experience.description}
            <br />
          </span>
          <p className="color-green">
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-geo-alt"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
            </svg>
            {this.props.experience.location}
          </p>
        </Col>
      </>
    );
  }
}
