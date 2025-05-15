import React from "react";
import "./ProjectCard.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = (props) => {
  return (
    <div className="project-wrapper">
      <div className="project-content">
        <img
          src={props.project.image}
          alt={props.project.name}
          width="100%"
          height="100%"
        />
      </div>
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
      <div className="project-button-box">
        <a
          href={props.project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
          <span>
            <FaGithub />
          </span>
        </a>
        <a href={props.project.live} target="_blank" rel="noopener noreferrer">
          Visit
          <span>
            <FaExternalLinkAlt />
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
