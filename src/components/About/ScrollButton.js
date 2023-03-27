import React, { useState, useEffect } from 'react';
import './ScrollButoon.css'

function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: showButton ? 0 : document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <button className={`scroll-button ${showButton ? 'scroll-button--show' : ''}`} onClick={handleClick}>
      <span className={`arrow arrow-${showButton ? 'up' : 'down'}`}></span>
    </button>
  );
}

export default ScrollButton;