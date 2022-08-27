import React from "react";
import Education from "../helpers/Education";
import ProgressBar from "../helpers/ProgressBar";
import arrow from "../images/arrow.png";
import psp from "../images/psp.png";
import upArrow from "../images/upArrow.png";

export default function About() {
  return (
    <div>
      <ProgressBar />
      <div className="profilePicContent" id="mainSection">
        <div>
          <img
            src={psp}
            alt="me"
            style={{ width: "280px", height: "330px", borderRadius: "20px" }}
          />
        </div>
        <div>
          <h1 className="headings">About Me</h1>
          <p className="aboutDescription">
            I'm a <span style={{ color: "#8ffbf7" }}>Junior Web-Developer</span>
            , career pivoting from Aviation Industry. My previous career as a
            Reliability Engineer allowed me to be collaborative and creative,
            which is something I now enjoy bringing to my code. I am empathetic,
            approachable and an active listener, traits that allow me to create
            great projects and build relationships along the way.
          </p>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="#section1">
          <img src={arrow} alt="arrow" title="Scroll Down" />
        </a>
      </div>
      <div>
        <Education />
      </div>
      <div className="upArrow">
        <p style={{ marginBottom: 0 }}>
          <a href="#mainSection">
            <img src={upArrow} alt="upArrow" />
          </a>
        </p>
        <p style={{ marginTop: 0, paddingRight: "35px" }}>Top</p>
      </div>
    </div>
  );
}
