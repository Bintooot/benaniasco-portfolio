import React from "react";
import "./Banner.css";
import { data } from "../../utils/Data";

const Banner = () => {
  return (
    <>
      <section className="banner-wrapper">
        <div className="card-wrapper">
          <div className="card-item">
            <h2>{data.projects}</h2>
            <p>Projects</p>
          </div>
          <div className="separator"></div>
          <div className="card-item">
            <h2>{data.experience}</h2>
            <p>Experience</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
