import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "./components/header/HeaderComponent";
import ProfileComponent from "./components/profile/ProfileComponent";
import ProjectsComponent from "./components/projects/ProjectsComponent";
import ExperienceComponent from "./components/experience/ExperienceComponent";
import SkillsComponent from "./components/skills/SkillsComponent";
import LandingComponent from "./components/landing/LandingComponent";

function App() {
  return (
    <div className="App">
      <LandingComponent />
      <HeaderComponent />
      <ProfileComponent />
      <ExperienceComponent />
      <SkillsComponent />
      <ProjectsComponent />
    </div>
  );
}

export default App;
