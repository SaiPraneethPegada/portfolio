import React from "react";

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
import git from "../../images/git.png";
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
      image: git,
      name: "Git",
    },
    {
      image: npm,
      name: "Node Package Manager",
    },
  ];

  return (
    <div className="skillsContent mt-5 d-flex flex-wrap justify-content-center">
      {skills.map((skill, index) => (
        <picture key={index} className="skillsPicture m-4 p-3">
          <img
            className="skillsIcons"
            loading="lazy"
            src={skill.image}
            alt={skill.name}
            title={skill.name}
          />
        </picture>
      ))}
    </div>
  );
}
