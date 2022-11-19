import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import github_icon from "../../images/github-icon.png";
import live from "../../images/live.png";
import stack from "../../images/SOf.jpg";
import krm from "../../images/KRM.jpg";
import foodApp from "../../images/FA.jpg";
import chatApp from "../../images/chatApp.jpg";

function Projects() {
  const data = [
    {
      img: stack,
      title: "Stack Overflow Clone",
      description:
        "Clone project of famous Q/A website with features like posting a unique \n question, answering and like a question, increment of views, login/logout \n with full Authentication system.",
      tech: ["MongoDB |", "ExpressJS |", "React |", "Redux-Toolkit."],
      github:
        "https://github.com/SaiPraneethPegada/stack-overflow-clone-client",
      live: "https://stack-overflow-clone-client.netlify.app",
    },
    {
      img: foodApp,
      title: "Food Delivery",
      description:
        "Full Stack Food ordering app with integration of third-party payment processors, developed with User and \n Admin role.",
      tech: [
        "MongoDB |",
        "ExpressJS |",
        "React |",
        "Context-API |",
        "Razorpay.",
      ],
      github: "https://github.com/SaiPraneethPegada/Food-Delivery-Frontend",
      live: "https://food-delivery-fe.netlify.app",
    },
    {
      img: krm,
      title: "Kitchen Recipe Management",
      description:
        "Food Recipes posting application where an individual can post, view, favorite, comment and share recipe.",
      tech: ["MongoDB |", "ExpressJS |", "React |", "Context-API."],
      github:
        "https://github.com/SaiPraneethPegada/Kitchen-Recipe-Management-Frontend",
      live: "https://kitchen-recipe-management-fe.netlify.app",
    },
    {
      img: chatApp,
      title: "Chat App",
      description:
        "A Full stack Chat App developed with Socket.io for real time one on one communication and key features include new message notification, Profile pic upload(cloudinary.com), search users.",
      tech: [
        "MongoDB |",
        "ExpressJS |",
        "React |",
        "Context-API |",
        "Socket.io",
      ],
      github: "https://github.com/SaiPraneethPegada/Chat-App-Frontend",
      live: "https://chat-app-fe.netlify.app",
    },
  ];

  return (
    <div>
      <h2 className="text-center">Projects</h2>
      <div className="container-fluid d-flex flex-wrap justify-content-center ">
        {data.map((item) => {
          return (
            <Card
              className="text-black m-4 card_wrapper"
              style={{ width: "35rem" }}
              key={item.title}
            >
              <Card.Img
                variant="top"
                width="200px"
                height="300px"
                src={item.img}
                className="shadow"
              />
              <Card.Body>
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <Card.Title className="fw-bold mt-2">{item.title}</Card.Title>
                  <div className="d-flex ">
                    <OverlayTrigger
                      key={"bottom1"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={`tooltip-${"bottom"}`}>
                          github repo!
                        </Tooltip>
                      }
                    >
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <Button variant="light">
                          <img
                            src={github_icon}
                            alt="github_icon"
                            width={"25px"}
                            height={"25px"}
                          />
                        </Button>
                      </a>
                    </OverlayTrigger>
                    <OverlayTrigger
                      key={"bottom2"}
                      placement={"bottom"}
                      overlay={
                        <Tooltip id={`tooltip-${"bottom"}`}>
                          see it live!
                        </Tooltip>
                      }
                    >
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <Button variant="light">
                          <img
                            src={live}
                            alt="live"
                            width={"25px"}
                            height={"25px"}
                          />
                        </Button>
                      </a>
                    </OverlayTrigger>
                  </div>
                </div>
                <hr />
                <Card.Text>{item.description}</Card.Text>
                <div className="d-flex flex-wrap align-items-center">
                  Tech Stack used-
                  {item.tech.map((e) => {
                    return (
                      <Card.Text className="mx-1 fw-bolder mb-0" key={e}>
                        {e}
                      </Card.Text>
                    );
                  })}
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
