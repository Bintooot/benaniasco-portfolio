import React, { useState } from "react";
import "./Skills.css";
import Card from "../../Cards/Card";
import {
  all_skills,
  frontend_skills,
  backend_skills,
  database_skills,
  tools_skills,
} from "../../../utils/Skills";
import Banner from "../../Banner/Banner";

const Skills = (props) => {
  const [data, setData] = useState(all_skills);
  const [active, setActive] = useState("All");

  const handleActive = (skill) => {
    setActive(skill);
    if (skill === "All") {
      setData(all_skills);
    } else if (skill === "Frontend") {
      setData(frontend_skills);
    } else if (skill === "Backend") {
      setData(backend_skills);
    } else if (skill === "Database") {
      setData(database_skills);
    } else if (skill === "Tools") {
      setData(tools_skills);
    }
  };

  return (
    <div className="skills-wrapper" id={props.id}>
      <h2>Skills</h2>
      <div className="button-links">
        <ul>
          <li
            onClick={() => {
              handleActive("All");
            }}
            className={active === "All" ? "active" : ""}
          >
            All
          </li>
          <li
            onClick={() => {
              handleActive("Frontend");
            }}
            className={active === "Frontend" ? "active" : ""}
          >
            Frontend
          </li>
          <li
            onClick={() => {
              handleActive("Backend");
            }}
            className={active === "Backend" ? "active" : ""}
          >
            Backend
          </li>
          <li
            onClick={() => {
              handleActive("Database");
            }}
            className={active === "Database" ? "active" : ""}
          >
            Database
          </li>
          <li
            onClick={() => {
              handleActive("Tools");
            }}
            className={active === "Tools" ? "active" : ""}
          >
            Tools
          </li>
        </ul>
      </div>
      <div className="data">
        {data &&
          data.map((item) => (
            <Card key={item.name} title={item.name} icon={item.icon} />
          ))}
      </div>
    </div>
  );
};

export default Skills;
