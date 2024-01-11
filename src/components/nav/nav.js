import React, { useState } from 'react';
import './nav.css';

export default function Nav() {

  const [ isMenuOpen, setIsMenuOpen ] = useState( false );

  const toggleMenu = () => {
      setIsMenuOpen( !isMenuOpen );
  };

  return (
    <div className="nav-container">
      <div className="nav">
        <div className="hamburger-menu" onClick={ toggleMenu }>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
        </div>
        <ul className={ isMenuOpen ? 'active' : ''}>
            <li><p><button href="#">Home</button></p></li>
            <li><p><button href="#">About Us</button></p></li>
            <li><p><button href="#">Ministries</button></p></li>
            <li><p><button href="#">Livestream</button></p></li>
            <li><p><button href="#">Resources</button></p></li>
            <li><p><button href="#">Donate</button></p></li>
            <li><p><button href="#">Contact Us</button></p></li>
        </ul>
      </div>
    </div>
  );
}
