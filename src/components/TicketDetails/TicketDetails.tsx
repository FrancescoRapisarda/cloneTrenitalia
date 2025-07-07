import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./TicketDetails.scss";
import Navbar from "../Navbar/Navbar";

import trainTicket from '../../assets/train-ticket.png';

function TicketDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const cart = location.state?.cart || [];

 
  const totalAmount = cart.reduce((total: number, ticket: { price: number }) => total + ticket.price, 0);
 
  const formattedTotal = new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(totalAmount);

  
  const handlePurchase = () => {
    alert("Acquisto completato! Grazie per aver acquistato con noi.");
    navigate("/");
  };

  return (
    <>
      <Navbar cartCount={cart.length} />
      <div className="ticket-details">
        <h2>Dettagli del Carrello</h2>
        {cart.length > 0 ? (
          <>
            <div className="ticket-list">
              {cart.map((ticket: any, index: any) => (
                <div key={index} className="ticket-card">
                  <img className="img-train-ticket" src={trainTicket} alt="train-ticket" />
                  <p><strong>ID Treno:</strong> {ticket.id}</p>
                  <p><strong>Partenza:</strong> {ticket.departure}</p>
                  <p><strong>Destinazione:</strong> {ticket.destination}</p>
                  <p><strong>Orario di Partenza:</strong> {ticket.time}</p>
                  <p><strong>Prezzo:</strong> €{ticket.price}</p>
                  <p><strong>Tipologia:</strong> {ticket.tipology}</p>
                </div>
              ))}
            </div>
            <div className="purchase-section">
              <p ><strong className="amount-title">Totale da pagare:</strong><strong className="amount-€">{formattedTotal}</strong></p>
              <button onClick={handlePurchase} className="btn btn-success">
                ACQUISTA
              </button>
            </div>
          </>
        ) : (
          <p>Non hai ancora acquistato alcun biglietto.</p>
        )}
        <button
          className="btn-back-to-homepage mb-4"
          onClick={() => navigate("/")}
        >
          Torna alla Homepage
        </button>
      </div>
    </>
  );
}

export default TicketDetails;
