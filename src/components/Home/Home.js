import React from "react";
import SocialIcons from "../../helpers/SocialIcons";
import landing from "../../images/landing.png";

export default function Home() {
  return (
    <div className="homeContent d-flex align-items-center my-5 p-5">
      <main className="m-3">
        <div>
          <h3 style={{ color: "#8ffbf7" }}>Hey there!, I'm-</h3>
          <h1 className="" style={{ fontSize: "10vh" }}>
            Sai Praneeth.
          </h1>
        </div>
        <div className="mb-5">
          <h3>
            I'm a MERN Stack Developer.{" "}
            <span
              style={{
                color: "gray",
                fontSize: "3vh",
                lineHeight: 1.75,
              }}
            >
              A dedicated developer with an interest in latest technologies and
              tools. I enjoy solving complex problems. I can be relied upon to
              help company achieve its goals by providing sustainable and
              scalable solutions.
            </span>
          </h3>
        </div>
        <SocialIcons />
      </main>
      <main className="image">
        <img
          src={landing}
          alt="Cartoon"
          style={{
            borderRadius: "20%",
            width: "500px",
          }}
        />
      </main>
    </div>
  );
}
