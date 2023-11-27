import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="aboutWrapper">
      <div className="aboutImg">
        <div className="imgTag">
        <img src="../../../public/hat.jpeg" className="circleTag"></img>
          <img src="../../../public/rotate.svg" className="imageTag" />
          
        </div>
      </div>
      <div className="aboutText">
        <h3>ABOUT ME</h3>
        <h4>A dedicated Front-end Developer based in Tel Aviv, Israel 📍</h4>
        <p className="aboutTextP">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          inventore et facere quod, accusamus ipsa explicabo dolorem eveniet
          dicta veritatis veniam consequuntur unde omnis ullam quam? Magni quas
          nesciunt reprehenderit!
        </p>
      </div>
    </div>
  );
};

export default About;
