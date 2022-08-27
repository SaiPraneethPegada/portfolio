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
    {
      link: "https://www.linkedin.com/in/sai-praneeth-pegada-psp131199/",
      name: "LinkedIn",
    },
  ];

  return (
    <div className="socialIons">
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
          rel="noopener noreferrer">
          <img src={gmail} alt="gmail" title="Gmail" />
        </a>
      </div>
    </div>
  );
}
