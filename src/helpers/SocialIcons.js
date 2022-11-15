import React from "react";
import gmail from "../images/gmail.png";
import { SocialIcon } from "react-social-icons";
import { Button } from "react-bootstrap";

export default function SocialIcons() {
  const shaping = {
    height: 40,
    width: 40,
  };

  const urls = [
    { link: "https://github.com/SaiPraneethPegada", name: "Github" },
  ];

  return (
    <div className="mt-3 d-flex flex-row flex-wrap align-items-center">
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

      <Button variant="light" className="ms-2 h-50 rounded-5 ">
        <a
          href="https://drive.google.com/file/d/1Mwx_gys01OTFEJ2yDJvYFtgxUI9Qt0-m/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          className="text-black text-decoration-none"
        >
          Resume
        </a>
      </Button>
    </div>
  );
}
