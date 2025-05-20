import React, { useState } from "react";
import logo from "../../assets/logo.png";
import "./Navbar.css";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Email, GitHub, Facebook, LinkedIn } from "@mui/icons-material";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const activeHandler = (active) => {
    setActive(active);
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-wrapper">
          <div className="header-title-wrapper">
            <img src={logo} alt="logo.png" width={80} height={80} />
            <h3 className="header-title">
              Ben <span>Aniasco</span>
            </h3>
          </div>
          <span
            className="sidebar-btn"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <MenuOutlinedIcon
              style={{ fontSize: "30px" }}
              className="hamburger-icon"
            />
          </span>
        </div>
      </header>
      <section
        className={`sidebar-container ${isSidebarOpen ? "show" : "hide"}`}
      >
        <div className="sidebar-wrapper">
          <div className="sidebar-close-btn">
            <div className="header-title-wrapper">
              <img src={logo} alt="logo.png" width={80} height={80} />
              <h3 className="header-title">
                Ben <span>Aniasco</span>
              </h3>
            </div>
            <CloseOutlinedIcon
              className="sidebar-close-btn-icon"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              style={{ fontSize: "35px" }}
            />
          </div>
          <ul>
            <li>
              <a
                href="#home"
                className={`sidebar-link ${isSidebarOpen ? "hide" : "show"} ${
                  active === "home" ? "active" : ""
                }`}
                onClick={() => activeHandler("home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                className={`sidebar-link ${isSidebarOpen ? "hide" : "show"} ${
                  active === "about-me" ? "active" : ""
                }`}
                onClick={() => activeHandler("about-me")}
              >
                About Me
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={`sidebar-link ${isSidebarOpen ? "hide" : "show"} ${
                  active === "skills" ? "active" : ""
                }`}
                onClick={() => activeHandler("skills")}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={`sidebar-link ${isSidebarOpen ? "hide" : "show"} ${
                  active === "projects" ? "active" : ""
                }`}
                onClick={() => activeHandler("projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact-me"
                className={`sidebar-link ${isSidebarOpen ? "hide" : "show"} ${
                  active === "contact-me" ? "active" : ""
                }`}
                onClick={() => activeHandler("contact-me")}
              >
                Contact Me
              </a>
            </li>
          </ul>
          <div className="social-links-wrapper">
            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=100008601462000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email className="social-icon" />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=100008601462000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub className="social-icon" />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=100008601462000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className="social-icon" />
            </a>
            <a
              className="social-link"
              href="https://www.facebook.com/profile.php?id=100008601462000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="social-icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
