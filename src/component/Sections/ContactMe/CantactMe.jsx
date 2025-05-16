import React from "react";
import "./ContactMe.css";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const CantactMe = (props) => {
  return (
    <>
      <section className="contact-me-wrapper" id={props.id}>
        <div className="tagline-wrapper">
          <h1>Let's talk about your next project.</h1>
        </div>
        <div className="contact-info">
          <div className="left-col">
            <h2>Contact Me</h2>
            <p>
              If you have any questions or would like to get in touch, please
              don't hesitate to contact me.
            </p>
          </div>
          <div className="right-col">
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <a href="mailto:aniascoben@gmail.com">
                  <span>
                    <EmailOutlinedIcon style={{ fontSize: "2rem" }} />
                  </span>{" "}
                  anaiscoben@gmail.com
                </a>
              </li>
              <li className="contact-info-item">
                <a href="tel:+63993673625">
                  <span>
                    <PhoneOutlinedIcon style={{ fontSize: "2rem" }} />
                  </span>{" "}
                  +63993673625
                </a>
              </li>
              <li className="contact-info-item">
                <a href="https://www.linkedin.com/in/ben-raymond-aniasco-381523334/">
                  <span>
                    <LinkedInIcon style={{ fontSize: "2rem" }} />
                  </span>{" "}
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2025 Ben Raymond Anaisco. All rights reserved.</p>
      </footer>
    </>
  );
};

export default CantactMe;
