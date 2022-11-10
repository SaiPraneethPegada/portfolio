import React from "react";

import cap from "../../images/cap.png";
import exp from "../../images/exp.png";
import school from "../../images/school.png";
import onlineClass from "../../images/training.png";

export default function Education() {
  const titles = [
    {
      refer: "#section1",
      name: "-Education",
    },
    {
      refer: "#section2",
      name: "-Training & Certification",
    },
    {
      refer: "#section3",
      name: "-Experience",
    },
  ];

  const schools = [
    {
      image: cap,
      name: "Telangana State Aviation Academy",
      degree: "Aircraft Maintenance Engineering(BSc.)",
      place: "Hyderabad, Telangana.",
      year: "2017 - 2021(March)",
    },
    {
      image: school,
      name: "Narayana Junior College",
      degree: "Intermediate, M.P.C",
      place: "Hyderabad, Telangana.",
      year: "2015 - 2017",
    },
    {
      image: school,
      name: "Krishnaveni High School",
      degree: "SSC",
      place: "Mancherial, Telangana.",
      year: "2015 (completion)",
    },
  ];

  const training = [
    {
      image: onlineClass,
      course: "Full Stack Developer | MERN Stack",
      institute: "Guvi Geek Network Private Ltd.",
      certificate: "https://www.guvi.in/certificate?id=13R96108O1L471j6fb",
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
    <div className="d-flex flex-row justify-content-evenly flex-wrap">
      <div className="eduTitles mt-5 pt-5">
        {titles.map((title, index) => (
          <div className="mb-2" key={index}>
            <a className="text-decoration-none" href={title.refer}>
              {title.name}
            </a>
          </div>
        ))}
      </div>
      <div className="mt-5 d-flex flex-column flex-wrap align-content-around">
        <div className="main m-3" id="section1">
          <p style={{ visibility: "hidden" }}>.</p>
          <br />
          <h1 className="headings">Education</h1>
          {schools.map((school, index) => (
            <div key={index}>
              <div className="eduIconAndTitle mt-5 d-flex align-items-center">
                <div className="mx-2 pe-3">
                  <img src={school.image} alt="icons" />
                </div>
                <div>
                  <h2 className="degree">{school.degree}</h2>
                </div>
              </div>
              <div className="mx-5 px-4">
                <h5>
                  {school.name}, {school.place}
                </h5>
                <p>{school.course}</p>
                <p className="sizing"></p>
                <p className="sizing">{school.year}</p>
              </div>
              <hr className="w=100" />
            </div>
          ))}
        </div>

        <div className="main m-3" id="section2">
          <p style={{ visibility: "hidden" }}>.</p>
          <br />
          <h1 className="headings">Training & Certification</h1>
          {training.map((school, index) => (
            <div key={index}>
              <div className="eduIconAndTitle mt-5 d-flex align-items-center">
                <div className="mx-2 pe-3">
                  <img src={school.image} alt="icons" />
                </div>
                <div>
                  <h3 className="degree">{school.course}</h3>
                </div>
              </div>
              <div className="mx-5 px-4">
                <p className="sizing">{school.institute}</p>
                <a
                  href="https://www.guvi.in/certificate?id=13R96108O1L471j6fb"
                  target={"_blank"}
                  rel={"noreferrer"}
                  className="text-decoration-none"
                >
                  Certificate
                </a>
              </div>
              <hr className="w=100" />
            </div>
          ))}
        </div>

        <div className="main m-3" id="section3">
          <h1 className="headings my-5">Experience</h1>
          {workPlace.map((work, index) => (
            <div key={index}>
              <div className="mt-5 d-flex align-items-center">
                <div className="mx-2 pe-3">
                  <img src={work.image} alt="icon" />
                </div>
                <div>
                  <h2 className="degree">{work.role}</h2>
                </div>
              </div>
              <div className="mx-5 px-4">
                <h5>
                  {work.company}, {work.place}
                </h5>
                <p className="sizing"></p>
                <p className="sizing">{work.year}</p>
              </div>
              <hr className="w-100" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
