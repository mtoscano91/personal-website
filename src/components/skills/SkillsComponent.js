import React, { Component } from "react";
import { skills } from "../../seeds";
import { Col, Row } from "react-bootstrap";
import SkillsDetailComponent from "./SkillsDetailComponent";

export default class SkillsComponent extends Component {
  state = {
    skills: skills,
  };
  render() {
    const softLength = this.state.skills.software.length;
    const langLength = this.state.skills.languages.length;
    return (
      <div className="background-white">
        <div className="comp-container" id="skills">
          <div className="intro">
            <h1>Skills</h1>
          </div>
          <hr />
          <h3>Technical Skills</h3>
          <Row>
            <Col md={6}>
              <ul className="skill-list">
                {this.state.skills.software
                  .slice(0, Math.round(softLength / 2))
                  .map((tech, idx) => {
                    return (
                      <li key={idx}>
                        <SkillsDetailComponent
                          skill={tech.skill}
                          stars={tech.stars}
                        />
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col md={6}>
              <ul className="skill-list">
                {this.state.skills.software
                  .slice(Math.round(softLength / 2))
                  .map((tech, idx) => {
                    return (
                      <li key={idx}>
                        <SkillsDetailComponent
                          skill={tech.skill}
                          stars={tech.stars}
                        />
                      </li>
                    );
                  })}
              </ul>
            </Col>
          </Row>
          <hr />
          <h3>Languages</h3>
          <Row>
            <Col md={6}>
              <ul className="skill-list">
                {this.state.skills.languages
                  .slice(0, Math.round(langLength / 2))
                  .map((language, idx) => {
                    return (
                      <li key={idx}>
                        <SkillsDetailComponent
                          skill={language.language}
                          stars={language.stars}
                        />
                      </li>
                    );
                  })}
              </ul>
            </Col>
            <Col md={6}>
              <ul className="skill-list">
                {this.state.skills.languages
                  .slice(Math.round(langLength / 2))
                  .map((language, idx) => {
                    return (
                      <li key={idx}>
                        <SkillsDetailComponent
                          skill={language.language}
                          stars={language.stars}
                        />
                      </li>
                    );
                  })}
              </ul>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
