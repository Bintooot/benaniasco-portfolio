import React from "react";
import "./SchoolCard.css";

const SchoolCard = (props) => {
  return (
    <>
      <div className="education-card">
        <div className="logo">
          <img src={props.logo} alt="logo.png" width={250} height={250} />
        </div>
        <div className="info">
          <div class="info-item">
            <h3>{props.degree}</h3>
            <p>{props.schoolname}</p>
            <span>{props.year}</span>
            <ul>
              <li>
                <strong> Relevant Courses:</strong> {props.relevantCourses}
              </li>
              <li>
                <strong>Capstone Project:</strong> {props.capstoneProject}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolCard;
