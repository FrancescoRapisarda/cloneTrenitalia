import React from "react";
import Navbar from "../Navbar/Navbar";
import Carousel from "../Carousel/Carousel";
import TrainSearchBar from "../TrainSearchBar/TrainSearchBar";
import "./HomePage.scss";
import CardService from "../CardService/CardService";

function HomePage() {  
  return (
    <>
      <Navbar cartCount={0} />
      <Carousel />
      <TrainSearchBar />
      <CardService />
    </>
  );
};

export default HomePage;
