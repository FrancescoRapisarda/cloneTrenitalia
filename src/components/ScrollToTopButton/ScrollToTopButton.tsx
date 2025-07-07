import React, { useEffect, useState } from "react";
import "./ScrollToTopButton.scss";

import upArrow from '../../assets/up-arrow.png';

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollTop / (docHeight - windowHeight) > 0.80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
            <img src={upArrow} alt="scroll-to-top" className="scroll-to-top" onClick={scrollToTop}  />
      )}
    </div>
  );
};

export default ScrollToTopButton;
