import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const handleActive = (active) => {
    setActive(active);
  };
  return (
    <header>
      <img src={logo} alt="logo.png" width={150} />
      <nav>
        <ul>
          <li>
            <a
              href="#home"
              className={active === "home" ? "active" : ""}
              defaultValue={true}
              onClick={() => handleActive("home")}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about-me"
              className={active === "about-me" ? "active" : ""}
              onClick={() => handleActive("about-me")}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={() => handleActive("skills")}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={() => handleActive("projects")}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact-me"
              className={active === "contact-me" ? "active" : ""}
              onClick={() => handleActive("contact-me")}
            >
              Contact Me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
