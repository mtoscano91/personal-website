import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Route, Switch } from "react-router-dom";
import HeaderComponent from "./components/header/HeaderComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import ProjectsComponent from "./components/projects/ProjectsComponent";
import ExperienceComponent from "./components/experience/ExperienceComponent";
import SkillsComponent from "./components/skills/SkillsComponent";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ProfileComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectsComponent />
      {/* <Route exact path="/" render={() => <ProfileComponent />} />
      <Route exact path="/projects" component={ProjectsComponent} />
      <Route exact path="/cv" render={() => <CVComponent />} /> */}
    </div>
  );
}

export default App;
