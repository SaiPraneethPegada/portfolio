import React from "react";
import Education from "./Education";
import ProgressBar from "../../helpers/ProgressBar";
import arrow from "../../images/arrow.png";
import psp from "../../images/psp.png";
import upArrow from "../../images/upArrow.png";

export default function About() {
    return (
        <div>
            <ProgressBar />
            <div
                className="profilePicContent d-flex justify-content-center align-items-center flex-wrap m-5"
                id="mainSection">
                <picture className="p-5 profilepic">
                    <img
                        src={psp}
                        alt="me"
                        className=" rounded-4"
                        style={{
                            width: "280px",
                            height: "330px",
                        }}
                    />
                </picture>
                <div className="mx-5">
                    <h1 className="headings text-center my-4">About Me</h1>
                    <p
                        className="aboutDescription lh-lg"
                        style={{ textAlign: "justify" }}>
                        I'm a{" "}
                        <span style={{ color: "#8ffbf7" }}>
                            Junior Web-Developer
                        </span>
                        , career pivoting from Aviation Industry. My previous
                        career as a Reliability Engineer allowed me to be
                        collaborative and creative, which is something I now
                        enjoy bringing to my code. I am empathetic, approachable
                        and an active listener, traits that allow me to create
                        great projects and build relationships along the way.
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
    );
}
