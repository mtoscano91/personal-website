import React, { Component } from "react";

export default class ProjectDetailComponent extends Component {
  render() {
    return (
      <div className="col-md-6 col-sm-12 col-xs-12">
        <a
          href={this.props.project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <figure className="project-detail">
            <img
              src={this.props.project.imgUrl}
              alt={this.props.project.title}
              className="img-fluid"
            />
            <figcaption>
              <h5>{this.props.project.title}</h5>
              <hr />
              <p>{this.props.project.description}</p>
              <p>
                <strong>Tags:</strong>
                <br />
                {this.props.project.tags.map((tag, i) => {
                  return i === this.props.project.tags.length - 1
                    ? tag
                    : tag + ", ";
                })}
              </p>
            </figcaption>
          </figure>
        </a>
      </div>
    );
  }
}
