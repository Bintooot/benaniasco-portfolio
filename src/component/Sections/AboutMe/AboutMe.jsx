import React from "react";
import "./AboutMe.css";
import profile from "../../../assets/photo-me.jpg";
import Card from "../../Cards/Card";

const AboutMe = (props) => {
  return (
    <div className="about-me-wrapper" id={props.id}>
      <section className="about-me-info">
        <section className="img-wrapper">
          <img src={profile} alt="profile.jpg" width={400} height={500} />
        </section>
        <section className="info-card-wrapper">
          <div className="info-card">
            <h2>About Me</h2>
            <h3> I build website either static or dynamic</h3>
            <ul>
              <li>
                I’m someone who loves bringing websites to life especially when
                it comes to creating clean, user-friendly designs.
              </li>
              <li>
                I get really into the UI/UX side of things, making sure
                everything not only looks great but feels smooth to use.
              </li>
              <li>
                I enjoy solving logical problems and digging into the coding
                side to make sure everything works just right.
              </li>
              <li>
                Whether it's designing an interface or figuring out how to make
                a feature tick, I’m all about building cool, functional stuff
                for the web.
              </li>
            </ul>
          </div>
          <div className="info-card">
            <div className="button-wrapper">
              <div className="button-heading">
                <h3>Skill Set </h3>
                <ul>
                  <li>All</li>
                  <li>Frontend</li>
                  <li>Backend</li>
                  <li>Database</li>
                  <li>Tools</li>
                </ul>
              </div>

              <div className="data">
                <Card title="HTML" />
                <Card title="CSS" />
                <Card title="JavaScript" />
                <Card title="Tailwind CSS" />
                <Card title="Node.js" />
                <Card title="Express.js" />
                <Card title="React.js" />
                <Card title="Github" />
                <Card title="Git" />
                <Card title="MongoDb" />
                <Card title="Mysql" />
                <Card title="Figma" />
                <Card title="Canva" />
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
