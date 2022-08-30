import React from "react";

import "./Contact.css";
import SocialIcons from "../SocialIcons";

import email from "../../images/email.png";
import phone from "../../images/phone.png";

export default function Contact() {
  const info = [
    {
      image: phone,
      title: "Phone Number",
      value: "+91 7386000126",
    },
    {
      image: email,
      title: "Email",
      value: "saipraneethpegada@gmail.com",
    },
  ];
  return (
    <>
      <div>
        <h1 className="headings">Contact Me</h1>
        <div className="contactdetails">
          {info.map((item, index) => (
            <div className="textCenter" key={index}>
              <p>
                <img src={item.image} alt={item.title} />
              </p>
              <p className="sizing">{item.title}</p>
              <p id="text-wrap">{item.value}</p>
            </div>
          ))}
        </div>
        <div className="footerContent">
          <div>
            <h1 className="textCenter">Let's work together!</h1>
            <p className="sizing">
              Currently I'm specializing in{" "}
              <span style={{ color: "#8ffbf7" }}>Back-end Development!</span>
            </p>
            <p className="sizing">
              Feel free to get in touch and talk more about your projects.
            </p>
            <p style={{ textAlign: "center" }} className="sizing">
              I can't wait to hear all about it.
            </p>
            <p style={{ textAlign: "right", fontStyle: "italic" }} className="sizing"> 
              -Praneeth.
            </p>
          </div>
          <SocialIcons />
        </div>
      </div>
      <footer className="textCenter" style={{ marginTop: "15vh" }}>
        <p>Designed and developed by Sai Praneeth.</p>
        <p>
          Built with <span className="footerTextColor">ReactJS, </span>Deployed
          in <span className="footerTextColor">Netlify.</span>
        </p>
      </footer>
    </>
  );
}
