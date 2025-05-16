import React from "react";
import "./Projects.css";
import ProjectCard from "../../ProjectCard/ProjectCard";
import { projectData } from "../../../utils/ProjectData";

const Projects = (props) => {
  return (
    <div className="projects-wrapper" id={props.id}>
      <h2>Projects</h2>
      <div className="projects-container">
        {projectData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
