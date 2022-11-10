import React from "react";
import gmail from "../images/gmail.png";
import { SocialIcon } from "react-social-icons";

export default function SocialIcons() {
  const shaping = {
    height: 40,
    width: 40,
  };

  const urls = [
    { link: "https://github.com/SaiPraneethPegada", name: "Github" },
  ];

  return (
    <div className="mt-3 d-flex flex-row flex-wrap">
      {urls.map((url, index) => (
        <div className="ions" key={index}>
          <SocialIcon
            url={url.link}
            target="_blank"
            bgColor="white"
            style={shaping}
            title={url.name}
          />
        </div>
      ))}

      <div className="ions">
        <a
          href="mailto:saipraneethpegada@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmail} alt="gmail" title="Gmail" />
        </a>
      </div>
    </div>
  );
}
