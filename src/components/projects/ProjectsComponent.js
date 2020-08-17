import React, { Component } from "react";
import ProjectDetailComponent from "./ProjectDetailComponent";
import { projects } from "../../seeds";

export default class ProjectsComponent extends Component {
  render() {
    return (
      <div className="comp-container" id="projects">
        <div className="intro">
          <h1>Projects</h1>
        </div>
        <hr />
        <div className="row">
          {projects.map((project, i) => {
            return <ProjectDetailComponent project={project} key={i} />;
          })}
        </div>
      </div>
    );
  }
}
