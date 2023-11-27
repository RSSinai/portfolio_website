import React from "react";
import "./Cards.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const Cards = () => {
  return (
    <div id="cardsWrapper">
      <div className="container">
        <div className="cardsText">
          <h3>Portfolio</h3>
          <h4>Each project is a unique piece of development 🧩</h4>
        </div>
        <div className="cards-container">
          <div className="cardList">
            <div className="card">
              <div className="image"></div>
              <div className="info">
                <h3 className="cardInfoTitle">Minecraft 2D</h3>
                <p className="cardInfo">
                  Explore a pixelated universe in Minecraft 2D, crafting,
                  building, and surviving. Unleash your creativity with
                  simplified graphics, quests, and multiplayer adventures.
                </p>
                <div>
                  <button className="cardBtn">
                    Live Demo  <FaExternalLinkAlt />
                  </button>
                  <button className="cardBtn">
                    Source code  <FaGithub />

                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image"></div>
              <div className="info">
                <h3 className="cardInfoTitle">Minecraft 2D</h3>
                <p className="cardInfo">
                  Explore a pixelated universe in Minecraft 2D, crafting,
                  building, and surviving. Unleash your creativity with
                  simplified graphics, quests, and multiplayer adventures.
                </p>
                <div>
                  <button className="cardBtn">
                    Live Demo  <FaExternalLinkAlt />
                  </button>
                  <button className="cardBtn">
                    Source code  <FaGithub />

                  </button>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="image"></div>
              <div className="info">
                <h3 className="cardInfoTitle">Minecraft 2D</h3>
                <p className="cardInfo">
                  Explore a pixelated universe in Minecraft 2D, crafting,
                  building, and surviving. Unleash your creativity with
                  simplified graphics, quests, and multiplayer adventures.
                </p>
                <div>
                  <button className="cardBtn">
                    Live Demo  <FaExternalLinkAlt />
                  </button>
                  <button className="cardBtn">
                    Source code  <FaGithub />

                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
