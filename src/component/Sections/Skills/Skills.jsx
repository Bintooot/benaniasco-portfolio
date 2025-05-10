import React from "react";
import "./Skills.css";
import Card from "../../Cards/Card";
import html from "../../../assets/HTML5.png";
import css from "../../../assets/CSS3.png";
import js from "../../../assets/JavaScript.png";
import react from "../../../assets/React.png";
import node from "../../../assets/Node.js.png";
import Firebase from "../../../assets/Firebase.png";
import mongo from "../../../assets/MongoDB.png";
import Figma from "../../../assets/Figma.png";
import TailwindCss from "../../../assets/TailwindCss.png";

const Skills = (props) => {
  return (
    <div className="skills-wrapper" id={props.id}>
      <h2>Skills & Tools</h2>
      <section className="skills-content-wrapper">
        <Card icon={html} alt="html" title="HTML" />
        <Card icon={css} alt="css" title="CSS" />
        <Card icon={js} alt="js" title="JavaScript" />
        <Card icon={react} alt="react" title="React" />
        <Card icon={node} alt="node" title="Node.js" />
        <Card icon={Firebase} alt="firebase" title="Firebase" />
        <Card icon={mongo} alt="mongo" title="MongoDB" />
        <Card icon={Figma} alt="figma" title="Figma" />
        <Card icon={TailwindCss} alt="tailwind" title="Tailwind" />
      </section>
    </div>
  );
};

export default Skills;
