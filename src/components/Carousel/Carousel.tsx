import React from "react";
import "./Carousel.scss";

import primeira from '../../assets/carousel-img/primeira.webp';
import segunda from '../../assets/carousel-img/segunda.webp';
import terzeria from '../../assets/carousel-img/terzeria.webp';


function Carousel() {
  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={primeira} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={segunda} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={terzeria} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
