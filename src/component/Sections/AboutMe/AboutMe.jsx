import React from "react";
import "./AboutMe.css";
import profile from "../../../assets/photo-me.jpg";
import Banner from "../../Banner/Banner";

const AboutMe = (props) => {
  return (
    <div id={props.id}>
      <Banner />
      <section className="about-me-wrapper">
        <section className="about-me-content">
          <div className="left-col">
            <img src={profile} alt="profile.jpg" width={350} height={450} />
          </div>
          <div className="right-col">
            <div className="info-card">
              <h2>About Me</h2>
              <h3> I build website either static or dynamic</h3>
              <ul>
                <li>
                  I’m someone who loves bringing websites to life especially
                  when it comes to creating clean, user-friendly designs.
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
                  Whether it's designing an interface or figuring out how to
                  make a feature tick, I’m all about building cool, functional
                  stuff for the web.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default AboutMe;
