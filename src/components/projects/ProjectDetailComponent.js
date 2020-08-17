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
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-box-arrow-up-right"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M1.5 13A1.5 1.5 0 0 0 3 14.5h8a1.5 1.5 0 0 0 1.5-1.5V9a.5.5 0 0 0-1 0v4a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 0 0-1H3A1.5 1.5 0 0 0 1.5 5v8zm7-11a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.5H9a.5.5 0 0 1-.5-.5z"
              />
              <path
                fill-rule="evenodd"
                d="M14.354 1.646a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.708-.708l8-8a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </figure>
        </a>
      </div>
    );
  }
}
