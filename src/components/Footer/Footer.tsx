import React from "react";

import logoFacebook from '../../assets/social/facebook.png';
import logoInstagram from '../../assets/social/instagram.png';
import logoYoutube from '../../assets/social/youtube.png';
import logoTikTok from '../../assets/social/tiktok.png';

import "./Footer.scss";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";

function Footer() {
  return (
    <footer className="footer">
      <div className="container py-4">
        <div className="row">
          
          <div className="col-md-8">
            <p className="contacts-footer">Sede legale: Via A. Manzoni, 19</p>
            <p className="contacts-footer">20159 Milano - ITALIA</p>
            <p className="contacts-footer">Partita IVA: 05526340962</p>
          </div>

          <div className="col-md-4 text-md-end">
            <p className="contacts-footer">Tel. +39 095 4735654</p>
            <p className="contacts-footer">Email: <a href="mailto:info@subito.it">info@trenitalia.it</a></p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col text-center">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img className="logo-footer" src={logoFacebook} alt="Facebook" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img className="logo-footer" src={logoInstagram} alt="Instagram" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img className="logo-footer" src={logoYoutube} alt="Youtube" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img className="logo-footer" src={logoTikTok} alt="" />
            </a>
          </div>
        </div>
        
        <div className="row mt-3">
          <div className="col text-center">
            <p className="copyright-footer">
              Copyright © 2024 Trenitalia.it S.r.l. |{" "}
              <strong><a href="#">Realizzato da Francesco Rapisarda</a></strong> |{" "}
              <strong><a href="#">Privacy Policy</a></strong> |{" "}
              <strong><a href="#">Cookie Policy</a></strong>
            </p>
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
