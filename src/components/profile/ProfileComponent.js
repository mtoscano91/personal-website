import React, { Component } from "react";

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
          <div className="profile-container row">
            <div className="col-md-4">
              <h3 className="color-darker-green">About Me</h3>
              <p>
                I am a Web Developer with a complementary Business background
                looking for roles in Product & Tech. On the one hand, I am a
                highly logical and analytical person and I find complex problems
                to be challenging. On the other one, I am a people's person: I
                love working in teams!
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img src="./Profile pic.jpeg" alt="Manuel Toscano" />
            </div>
            <div className="col-md-4">
              <h3 className="color-darker-green">Details</h3>
              <h5>Name:</h5>
              <p>Manuel Toscano</p>
              <h5>Age:</h5>
              <p>29 years</p>
              <h5>Location</h5>
              <p>Berlin, Germany</p>
              <div className="logo-container">
                <a href="https://github.com/mtoscano91">
                  <img
                    src="./github_PNG83.png"
                    alt="Github Profile"
                    className="logo"
                  />
                </a>
                <a href="https://www.linkedin.com/in/manuel-toscano-tech/">
                  <img
                    src="./linkedinLogo.png"
                    alt="LinkedIn Profile"
                    className="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
