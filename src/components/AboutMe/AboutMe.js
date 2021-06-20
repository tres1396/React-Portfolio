import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import selfie from "./selfie.jpg";

function AboutMe() {
  return (
    <div className="about-panel">
      <h1 className="about-header">
        About <p className="me">Me</p>
      </h1>
      <div className="img-text-container">
        <div className="img-container">
          <img className="selfie" src={selfie} alt="selfie"></img>
        </div>
        <p className="about-me-text">
          I am currently a part of <p className="osu">The Ohio State University's</p> Full Stack coding
          bootcamp where I am learning the skills to build full stack
          applications. My background is in healthcare, but I am eager to learn,
          grow, and build my future in the tech industry, specifically in
          software development.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
