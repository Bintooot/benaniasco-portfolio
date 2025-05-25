import React from "react";
import "./AboutMe.css";
import profile from "../../../assets/photo-me.jpg";
import { educData } from "../../../utils/EducationalData.js";
import Banner from "../../Banner/Banner";
import SchoolCard from "../../SchoolCard/SchoolCard.jsx";

const AboutMe = (props) => {
  return (
    <div id={props.id}>
      <Banner className="banner-wrapper" />
      <section className="about-me-wrapper">
        <section className="about-me-content">
          <div className="left-col">
            <img src={profile} alt="profile.jpg" width={350} height={450} />
          </div>
          <div className="right-col">
            <div className="info-card">
              <h2>About Me</h2>
              <p>
                I’m a web developer with a strong focus on front-end development
                and a solid working knowledge of back-end technologies. I create
                responsive, user-friendly websites using{" "}
                <span> HTML, CSS, JavaScript </span>, and frameworks like{" "}
                <span>React</span>. I also have experience with basic
                server-side development using <span>Node.js</span>, along with
                both <span> SQL and NoSQL databases</span>. I'm passionate about
                building clean, functional web experiences and am committed to
                continuous learning and growth in the field.
              </p>
            </div>
          </div>
        </section>
      </section>
      <section className="educ-background-wrapper">
        <h2>Educational Background</h2>
        <div className="educ-background-content">
          {educData &&
            educData.map((items) => {
              return (
                <SchoolCard
                  key={items.id}
                  schoolname={items.schoolName}
                  year={items.year}
                  logo={items.schoolLogo}
                  relevantCourses={items.relevantCourses}
                  capstoneProject={items.capstoneProject}
                  degree={items.degree}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
