import React, { Component } from "react";
import { experiences } from "../../seeds";
import ExperienceDetailComponent from "./ExperienceDetailComponent";
import { Row } from "react-bootstrap";

export default class ExperienceComponent extends Component {
  state = {
    experiences: experiences,
  };
  render() {
    return (
      <div className="comp-container" id="experiences">
        <div className="intro">
          <h1>Experiences</h1>
        </div>
        <hr />
        <div>
          <h3>Education</h3>

          {this.state.experiences.education.map((education, idx) => {
            return (
              <Row key={idx}>
                <ExperienceDetailComponent experience={education} />
              </Row>
            );
          })}
        </div>
        <hr />
        <div>
          <h3>Work</h3>

          {this.state.experiences.work.map((work, idx) => {
            return (
              <Row key={idx}>
                <ExperienceDetailComponent experience={work} />
              </Row>
            );
          })}
        </div>
      </div>
    );
  }
}
