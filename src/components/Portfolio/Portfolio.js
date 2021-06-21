import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import JobJump from "./jobjumpscreenshot.png";
import TeamGen from "./teamgenpic.png"
import ReadMe from "./appimage.png"

function Portfolio() {
  return (
    <div className="portfolio-panel">
      <h1 className="portfolio-header">Portfolio</h1>
      <div className="panel-1">
        <div className="orange-panel"></div>
        <div className="glass-panel">
          <img className="job-jump-screenshot" src={JobJump} alt="job jump screenshot"></img>
          <div className="job-jump-text-container">
            <p className="job-jump-text">Covid Tracking App <br></br><a className="job-jump-link" href="/#">See it here</a></p>
          </div>
        </div>
      </div>
      <div className="panel-2">
        <div className="purple-panel"></div>
        <div className="glass-panel2">
            <img className="teamgen-screenshot" src={TeamGen} alt="./#"></img>
            <p className="teamgen-text">Team Profile Generator App<br></br><a className="teamgen-link" href="/#">See it here</a></p>
        </div>
      </div>
      <div className="panel-3">
          <div className="pink-panel"></div>
          <div className="glass-panel3">
          <img className="readme-screenshot" src={ReadMe} alt="./#"></img>
          <p className="teamgen-text">ReadMe Generator App<br></br><a className="readme-link" href="/#">See it here</a></p>
          </div>

      </div>
    </div>
  );
}

export default Portfolio;
