import React from "react";
import "./Footer.css";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";
import Mail from "@iconscout/react-unicons/icons/uil-envelope";

const Footer = () => {
  return (
    <div className="footer">
      <div className="waves">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
      </div>

      <div className="f-heading">Quick links:</div>

      <ul className="f-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>

      <div className="f-icons">
        <a href="">
          <Linkedin color="var(--beige)" size="3rem" />
        </a>
        <a href="">
          <Github color="var(--beige)" size="3rem" />
        </a>
        <a href="">
          <Mail color="var(--beige)" size="3rem" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
