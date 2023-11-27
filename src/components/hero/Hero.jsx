import React from "react";
import "./Hero.css";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";

const Hero = () => {
  return (
    <div className="heroWrapper">
      <div className="intro">
        <h1>Front-End React Developer &#128075;</h1>
        <p>
          Hi, I'm Rony Sinai. A passionate Front-end React Developer based in
          Tel Aviv, Israel. 📍
        </p>
        <span>
          <a className="socialIntro">
            <AiOutlineLinkedin size={32}/>
          </a>
          <a className="socialIntro">
            <FiGithub size={32}/>
          </a>
        </span>
      </div>
      <div className="introImg"></div>
    </div>
  );
};

export default Hero;
