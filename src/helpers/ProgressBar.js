import React from "react";
import { useLocation } from "react-router-dom";

export default function ProgressBar() {
  console.log(document);
  let location = useLocation();
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    var height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    if (location.pathname === "/about") {
      document.getElementById("myBar").style.width = scrolled + "%";
    }
  }
  return (
    <div className="header">
      <div className="progress-container">
        <div className="progress-bar" id="myBar"></div>
      </div>
    </div>
  );
}
