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
            <div className="time">
              <h3>Date & Time: </h3>
              <span>{props.project.time}</span>
            </div>
          </div>
          <div className="button-wrapper">
            <a
              className="button-link"
              href={props.project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Github
            </a>
            <a
              className="button-link"
              target="_blank"
              href={props.project.live}
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
