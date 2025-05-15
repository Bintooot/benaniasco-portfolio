import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            <p>
              Made with ❤️ by <span>Ben Raymond B. Aniasco</span>
            </p>
          </div>
          <div className="separator"></div>
          <div className="footer-right">
            <h2>Contact Me</h2>
            <form action="">
              <input type="text" name="name" id="name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <textarea
                name="message"
                id="message"
                placeholder="Message"
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
