import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="aboutWrapper">
      <div className="aboutImg">
        <div className="imgTag">
          <img src="https://i.ibb.co/pw5wz46/hat.jpg" className="circleTag"></img>
          <img src="https://i.ibb.co/d2qZxBx/rotate.png" className="imageTag" />
        </div>
      </div>
      <div className="aboutText">
        <h3>ABOUT ME</h3>
        <h4>A dedicated Front-end Developer based in Tel Aviv, Israel 📍</h4>
        <p className="aboutTextP">
          I'm an applied mathematics student residing in Tel-Aviv, but my heart
          belongs to Haifa, where I was raised. With 2 years in web development,
          my expertise lies in front-end development with React, driven by my
          early years in QA roles. Passionate
          about Greek 🇬🇷 Food, Music, and Philosophy, I unwind through boat
          cruising at the Sailor Jaffa club, horseback riding, and collecting
          local art.
        </p>
      </div>
    </div>
  );
};

export default About;
