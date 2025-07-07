import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { trainData } from "../../data/mockData";
import "./SearchResultsPage.scss";
import Navbar from "../Navbar/Navbar";

import noTransport from "../../assets/no-transport.png";
import buyTicket from "../../assets/online-shopping.png";

function SearchResultsPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const departure = params.get("departure")?.toLowerCase() || "";
  const destination = params.get("destination")?.toLowerCase() || "";

  const [cart, setCart] = useState<any[]>([]);

  const results = trainData.filter(
    (train) => train.departure.toLowerCase() === departure && train.destination.toLowerCase() === destination
  );
  
  
  const handleAddToCart = (train: any) => {
    setCart((prevCart) => [...prevCart, train]);
  };

    const goToCart = () => {
    navigate("/ticket-details", { state: { cart } });
  };


  return (
    <>
    <Navbar cartCount={cart.length} />
    <div className="search-results">
      {results.length > 0 ? (
        <div className="results-container">
          <h2>Risultati per {departure.toUpperCase()} → {destination.toUpperCase()}</h2>
          <div className="cards-container">
            {results.map((train) => (
              <div key={train.id} className="train-card">
                <div className="train-info">
                  <img src={train.img} alt="ID-Train" className="train-image" />
                  <h3>ID Treno: {train.id}</h3>
                  <p><strong>Partenza:</strong> {train.departure}</p>
                  <p><strong>Destinazione:</strong> {train.destination}</p>
                  <p><strong>Orario:</strong> {train.time}</p>
                  <p><strong>Durata:</strong> {train.routeTime}</p>
                  <p><strong>Prezzo:</strong> €{train.price}</p>
                  <p><strong>Tipologia:</strong> {train.tipology}</p>
                  <img src={buyTicket} className="buy-ticket" alt="buy-ticket" onClick={() => handleAddToCart(train)} />
                  <span className="title-buy-ticket">ACQUISTA IL BIGLIETTO</span>
                  <div className="details">
                    <button className="button-details">Vedi Dettagli</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="btn-custom">
            <button onClick={goToCart} className="btn-green">
              Vai al Carrello ({cart.length})
            </button>
            <button onClick={() => navigate(-1)} className="btn-back">
              Torna alla Homepage
            </button>
          </div>
          
        </div>
      ) : (
        <div className="no-results">
          <img className="img-no-transport" src={noTransport} alt="no-transport" />
          <h2>Questa tratta non è stata ancora implementata nel nostro sistema</h2>
          <p>Cerca un'altra tratta.</p>
          <button onClick={() => navigate("/")} className="btn-home">
            Torna alla homepage
          </button>
        </div>
        )}
    </div>
  </>
  );
}

export default SearchResultsPage;
