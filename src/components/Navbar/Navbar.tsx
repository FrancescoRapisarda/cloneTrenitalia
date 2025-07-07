import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from '../../assets/logo-trenitalia.svg';
import shoppingCart from '../../assets/online-shopping.png';  


function Navbar({ cartCount }: { cartCount: number }) {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={logo} alt="Trenitalia" />
        </Link>
        <Link to="/ticket-details" className="ms-auto m-3 cart-icon">
          <img src={shoppingCart} alt="Cart" height="30" />
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
