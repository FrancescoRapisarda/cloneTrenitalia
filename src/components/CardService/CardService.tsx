import React from "react";
import { cardData } from "../../data/cardData";
import "./CardService.scss";


function CardService() {
  return (
    <div className="offerte-e-servizi">
      <h2>OFFERTE E SERVIZI</h2>
      <div className="card-grid">
        {cardData.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} />
            <div className="card-overlay">
              <p>APRI PER SAPERNE DI PIÙ</p>
            </div>
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardService;