import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Hero = (props) => {
  return (
    <>
      <div className="hero-wrapper" id={props.id}>
        <div className="hero-content">
          <h1> Transforming Ideas into Clean, Efficient Code </h1>
          <div className="separator-wrapper">
            <div className="separator" id="separator-1"></div>
            <div className="separator" id="separator-2"></div>
            <div className="separator" id="separator-3"></div>
          </div>
          <div className="hero-text">
            <h2>
              → Hello, I'm <span className="name">Ben Raymond Aniasco</span>
            </h2>
            <p>Web Developer | Problem Solver | Creative Thinker</p>
            <section className="button-box">
              <Button text="Download CV" icon={<FileDownloadOutlinedIcon />} />
              <Button text="Contact Me" icon={<EmailOutlinedIcon />} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
