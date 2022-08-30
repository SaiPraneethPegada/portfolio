import React from "react";

import cap from "../../images/cap.png";
import exp from "../../images/exp.png";
import school from "../../images/school.png";

import "./About.css";

export default function Education() {
  const schools = [
    {
      image: cap,
      name: "Telangana State Aviation Academy",
      degree: "Bachelor of Science",
      course: "Aircraft Maintenance Engineering.",
      place: "Hyderabad, Telangana.",
      year: "2017- 2021(March)",
    },
    {
      image: school,
      name: "Narayana Junior College",
      degree: "Intermediate",
      place: "Hyderabad, Telangana.",
      year: "(2015- 2017)",
    },
    {
      image: school,
      name: "Krishnaveni High School",
      degree: "SSC",
      place: "Mancherial, Telangana.",
      year: "(2012-2015)",
    },
  ];

  const titles = [
    {
      refer: "#section1",
      name: "-Education",
    },
    {
      refer: "#section2",
      name: "-Experience",
    },
  ];

  const workPlace = [
    {
      image: exp,
      role: "Reliablity Engineer",
      company: "Cyient Limited",
      place: "Bangalore, Karnataka.",
      year: "2021(June)-2022(Aug).",
    },
  ];

  return (
    <div className="eduAndExp">
      <div className="eduTitles">
        {titles.map((title, index) => (
          <p key={index}>
            <a href={title.refer}>{title.name}</a>
          </p>
        ))}
      </div>
      <div className="educationContent">
        <div className="main" id="section1">
          <p style={{ visibility: "hidden" }}>.</p>
          <br />
          <h1 className="headings">Education</h1>
          {schools.map((school, index) => (
            <div key={index}>
              <div className="eduIconAndTitle">
                <div>
                  <img src={school.image} alt="icons" />
                </div>
                <div>
                  <h2>{school.name}</h2>
                </div>
              </div>
              <h3 className="degree">{school.degree}</h3>
              <p style={{ fontSize: "1.4em" }}>{school.course}</p>
              <p className="sizing">{school.place}</p>
              <p className="sizing">{school.year}</p>
              <hr />
            </div>
          ))}
        </div>

        <div className="main" id="section2">
          <h1 className="headings" style={{ marginTop: "15vh" }}>
            Experience
          </h1>
          {workPlace.map((work, index) => (
            <div key={index}>
              <div className="eduIconAndTitle">
                <div>
                  <img src={work.image} alt="icon" />
                </div>
                <div>
                  <h2>{work.role}</h2>
                </div>
              </div>
              <p className="degree">{work.company}</p>
              <p className="sizing">{work.place}</p>
              <p className="sizing">{work.year}</p>
              <hr />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
