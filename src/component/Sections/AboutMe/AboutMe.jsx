import React from "react";
import "./AboutMe.css";
import profile from "../../../assets/photo-me.jpg";

const AboutMe = (props) => {
  return (
    <div className="about-me-wrapper" id={props.id}>
      <h2>About Me</h2>
      <section className="about-me-content-wrapper">
        <div className="about-me-image">
          <img src={profile} alt="profile.jpg" width={400} height={520} />
        </div>
        <div className="about-me-info">
          <h3> I build website either static or dynamic</h3>
          <ul>
            <li>
              I’m someone who loves bringing websites to life especially when it
              comes to creating clean, user-friendly designs.
            </li>
            <li>
              I get really into the UI/UX side of things, making sure everything
              not only looks great but feels smooth to use.
            </li>
            <li>
              I enjoy solving logical problems and digging into the coding side
              to make sure everything works just right.
            </li>
            <li>
              Whether it's designing an interface or figuring out how to make a
              feature tick, I’m all about building cool, functional stuff for
              the web.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
