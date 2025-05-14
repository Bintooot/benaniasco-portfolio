import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <section className="banner-wrapper">
        <div className="card-wrapper">
          <div className="card-item">
            <h2>0</h2>
            <p>Clients</p>
          </div>
          <div className="separator"></div>
          <div className="card-item">
            <h2>0</h2>
            <p>Employees</p>
          </div>
          <div className="separator"></div>
          <div className="card-item">
            <h2>0</h2>
            <p>Projects</p>
          </div>
          <div className="separator"></div>
          <div className="card-item">
            <h2>0</h2>
            <p>Years of Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
