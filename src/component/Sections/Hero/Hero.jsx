import React from "react";
import "./Hero.css";
import Button from "../../Button/Button";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import GithubOutlinedIcon from "@mui/icons-material/GitHub";
import LinkedInOutlinedIcon from "@mui/icons-material/LinkedIn";
import EmailOutlinedIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";

const Hero = (props) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="hero-wrapper" id={props.id}>
        <motion.section
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
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
                      onClick={handleDownload}
                      text="Download CV"
                      icon={<FileDownloadOutlinedIcon />}
                    />
                  </div>
                  <div className="separator"></div>
                  <div className="social-links-wrapper">
                    <a
                      className="social-link"
                      href="https://github.com/Bintooot"
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
                      href="https://www.linkedin.com/in/ben-raymond-aniasco-381523334/"
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
                      href="mailto:aniascoben@gmail.com"
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
