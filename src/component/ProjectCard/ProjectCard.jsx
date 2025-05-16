import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="project-card-wrapper">
      <div className="project-content">
        <div className="image-wrapper">
          <img
            src={props.project.image}
            alt={props.project.name}
            width="100%"
            height="100%"
          />
        </div>
        <div className="project-info-wrapper">
          <div className="project-info">
            <h2>{props.project.name}</h2>
            <p>{props.project.description}</p>
            <div className="tech-stack">
              <h3>Tech Stack: </h3>
              <div className="tech-stack-list">
                {props.project.techStack.map((tech) => (
                  <span className="tech-stack-item">{tech}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="button-wrapper">
            <button className="button-link">
              <FaGithub />
              Github
            </button>
            <button className="button-link">
              <FaExternalLinkAlt />
              Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
