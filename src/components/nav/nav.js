import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
            <li><p><Link className="nav-ref" to={ '/home' }>Home</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/' }>About Us</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/' }>Ministries</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/live-stream' }>Livestream</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/' }>Resources</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/' }>Giving</Link></p></li>
            <li><p><Link className="nav-ref" to={ '/' }>Contact Us</Link></p></li>
        </ul>
      </div>
    </div>
  );
}
