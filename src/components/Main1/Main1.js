import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import Pic from "./edited.png";

function Main1() {
  return (
    <div>
      <div className="container">
        <h1 className="main1-header">
          Hi, I'm <p className="tre">Tre!</p>
        </h1>
        <h2>Full-Stack Software Developer</h2>
        <img className="main-graphic"src={Pic} alt="pic"></img>
        <div className="link-container">
          <a className="a-tag" href="/#"><i class="fab fa-linkedin fa-2x"></i></a>
          <a className="a-tag" href="/#"><i class="fab fa-twitter fa-2x"></i></a>
          <a className="a-tag" href="/#"><i class="fab fa-github fa-2x"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Main1;
