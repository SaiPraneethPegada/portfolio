import React from "react";
import NavBar from "./Navbar";
import programmer from "../images/programmer.png";
import SocialIcons from "../helpers/SocialIcons";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="homeContent">
        <main style={{ fontSize: "large", padding: "10vh" }}>
          <div>
            <h3 style={{ marginBottom: 0, color: "#8ffbf7" }}>
              Hey there!, I'm-
            </h3>
            <h1 style={{ fontSize: "10vh", margin: 0 }}>Sai Praneeth.</h1>
          </div>
          <div style={{ marginBottom: "5vh" }}>
            <h3>
              I'm a Web Developer.{" "}
              <span
                style={{ color: "gray", fontSize: "3vh", lineHeight: 1.75 }}>
                A Self-taught developer with an interest in Computer Science. I
                enjoy solving complex problems. I can be relied upon to help
                your company achieve its goals by providing sustainable and
                scalable solutions.
              </span>
            </h3>
          </div>
          <SocialIcons />
        </main>
        <main className="image">
          <img
            src={programmer}
            alt="Cartoon"
            style={{
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "20%",
            }}
          />
        </main>
      </div>
    </>
  );
}
