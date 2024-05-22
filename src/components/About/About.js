import React from "react";

import Education from "./Education";
import arrow from "../../images/arrow.png";
import psp from "../../images/psp3.jpg";
import upArrow from "../../images/upArrow.png";
// import ProgressBar from "../../helpers/ProgressBar";

export default function About() {
  return (
    <div>
      {/* <ProgressBar /> */}
      <div>
        <div
          className="profilePicContent d-flex justify-content-center align-items-center flex-wrap m-5"
          id="mainSection"
        >
          <picture className="p-5 profilepic">
            <img
              src={psp}
              alt="me"
              loading="lazy"
              className="rounded"
              style={{
                width: "auto",
                height: "25rem",
              }}
            />
          </picture>
          <div className="mx-5">
            <h1 className="headings text-center my-4">About Me</h1>
            <p
              className="aboutDescription lh-lg"
              style={{ textAlign: "justify" }}
            >
              I'm a{" "}
              <span style={{ color: "#8ffbf7" }}>Software Engineer</span>{' '}
              with 3 years of experience, driven by a passion for learning new technologies and tools.
              Proficient in JavaScript, with a strong foundation in web development libraries such as ReactJS.
              Adaptable to changing project requirements and excels in dynamic work settings.
              Demonstrated ability to quickly grasp and apply new tools and technologies to achieve project objectives effectively.
              Additionally, my experience at a startup company has equipped me with the agility to
              learn new things rapidly and adapt to different work settings, enhancing my versatility in approaching projects.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <a href="#section1">
            <img src={arrow} alt="arrow" title="Scroll Down" />
          </a>
        </div>
        <div className="">
          <Education />
        </div>
        <div className="upArrow d-flex flex-column flex-wrap align-items-end">
          <div>
            <a href="#mainSection">
              <img src={upArrow} alt="upArrow" />
            </a>
          </div>
          <div className="mt-0 px-3">Top</div>
        </div>
      </div>
    </div>
  );
}
