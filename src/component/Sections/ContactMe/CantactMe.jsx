import React from "react";
import "./ContactMe.css";
import logo from "../../../assets/logo.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactMe = (props) => {
  return (
    <div className="contact-me-wrapper" id={props.id}>
      <div className="contact-info">
        <div className="contact-info-text">
          <h2>Get in touch</h2>
          <p className="contact-tagline">
            Have a project or idea? Let’s build something amazing together.
          </p>
          <div className="social-wrapper">
            <div className="logo">
              <img src={logo} alt="logo" width={300} height={250} />
            </div>
            <ul className="social-links">
              <li className="social-items">
                <a href="">
                  <span>
                    <LinkedInIcon />
                  </span>
                  LinkedIn
                </a>
              </li>
              <li className="social-items">
                <a href="">
                  <span>
                    <EmailIcon />
                  </span>
                  Email
                </a>
              </li>
              <li className="social-items">
                <a href="">
                  <span>
                    <PhoneIcon />
                  </span>
                  Phone
                </a>
              </li>
              <li className="social-items">
                <a href="">
                  <span>
                    <InstagramIcon />
                  </span>
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
