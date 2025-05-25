import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GithubOutlinedIcon from "@mui/icons-material/GitHub";
import LinkedInOutlinedIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/Email";

import { motion } from "framer-motion";
import { Translate } from "@mui/icons-material";

const Hero = (props) => {
  return (
    <>
      <div className="hero-wrapper" id={props.id}>
        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: -50 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="hero-content">
            <h1>Transforming Ideas into Clean, Efficient Code</h1>
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
                <div className="button-box-wrapper">
                  <div className="download-cv-wrapper">
                    <Button
                      text="Download CV"
                      icon={<FileDownloadOutlinedIcon />}
                    />
                  </div>
                  <div className="separator"></div>
                  <div className="social-links-wrapper">
                    <a
                      className="social-link"
                      href="https://github.com/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub Profile"
                    >
                      <span>
                        <GithubOutlinedIcon />
                      </span>
                    </a>
                    <a
                      className="social-link"
                      href="https://www.linkedin.com/in/yourusername"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                    >
                      <span>
                        <LinkedInOutlinedIcon />
                      </span>
                    </a>
                    <a
                      className="social-link"
                      href="mailto:your.email@example.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Email"
                    >
                      <span>
                        <EmailOutlinedIcon />
                      </span>
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default Hero;
