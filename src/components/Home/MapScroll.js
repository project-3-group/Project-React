import React, { useState, useEffect } from 'react';
import './MapScroll.css'
import {BiWorld} from 'react-icons/bi'
function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 700) {
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
        document.getElementById('MapId')?.scrollIntoView({ behavior: 'smooth' });
    
  };

  return (
    <button className={`scroll-buttonn ${showButton ? 'scroll-button--show' : ''}`} onClick={handleClick}>
      <BiWorld></BiWorld>
      
    </button>
  );
}

export default ScrollButton;