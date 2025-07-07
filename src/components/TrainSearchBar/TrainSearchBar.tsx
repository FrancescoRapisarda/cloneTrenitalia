import React, { useState } from "react";
import "./TrainSearchBar.scss";
import { useNavigate } from "react-router-dom";

function TrainSearchBar() {
  const [departure, setDeparture] = useState("");
  const [destination, setDestination] = useState("");

  const navigate = useNavigate();
  
  const handleSearch = () => {
    navigate(`/search-results?departure=${departure}&destination=${destination}`);
  };


  return (
      <div className="train-search-bar">
        <input
          type="text"
          placeholder="Partenza"
          value={departure}
          onChange={(e) => setDeparture(e.target.value)}
        />
        <input
          type="text"
          placeholder="Destinazione"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
        <button onClick={handleSearch}>Cerca</button>
      </div>
  );
};

export default TrainSearchBar;
