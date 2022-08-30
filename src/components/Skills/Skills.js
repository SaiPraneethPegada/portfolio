import React from "react";
import "./Skills.css";

import bootstrap from "../../images/bootstrap.png";
import css from "../../images/css3.png";
import express from "../../images/express.png";
import github from "../../images/github.png";
import html from "../../images/html-5.png";
import js from "../../images/javascript.png";
import mongo from "../../images/mongo.png";
import mui from "../../images/material-ui.png";
import node from "../../images/nodejs.png";
import npm from "../../images/npm.png";
import react from "../../images/react.png";
// import arrow from '../../images/arrow.png';

export default function Skills() {
  const skills = [
    {
      image: html,
      name: "HTML",
    },
    {
      image: css,
      name: "CSS",
    },
    {
      image: js,
      name: "JavaScript",
    },
    {
      image: bootstrap,
      name: "Bootstrap",
    },
    {
      image: mui,
      name: "MUI",
    },
    {
      image: react,
      name: "ReactJS",
    },
    {
      image: mongo,
      name: "MongoDB",
    },
    {
      image: node,
      name: "NodeJS",
    },
    {
      image: express,
      name: "ExpressJS",
    },
    {
      image: github,
      name: "Github",
    },
    {
      image: npm,
      name: "Node Package Manager",
    },
  ];

  return (
    <div>
      <div className="skillsContent">
        {skills.map((skill, index) => (
          <picture key={index}>
            <img
              className="skillsIcons"
              src={skill.image}
              alt={skill.name}
              title={skill.name}
            />
            {/* <p className="hideName">{skill.name}</p> */}
          </picture>
        ))}
      </div>
      {/* <div style={{display: "flex", justifyContent: "center"}}><img src={arrow} alt="arrow" /></div> */}
    </div>
  );
}
