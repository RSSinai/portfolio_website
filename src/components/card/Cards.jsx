import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="cardsWrapper">
      <h3>Portfolio</h3>
      <h4>Each project is a unique piece of development 🧩</h4>
      <div className="cardsText"></div>
      <div>
        <div className="cardList">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
