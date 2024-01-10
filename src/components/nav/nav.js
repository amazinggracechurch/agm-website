import React from 'react';
import './nav.css';

export default function nav() {
  return (
    <div className="nav">
        <ul>
            <li><p><button href="#">Home</button></p></li>
            <li><p><button href="#">About Us</button></p></li>
            <li><p><button href="#">Ministries</button></p></li>
            <li><p><button href="#">Livestream</button></p></li>
            <li><p><button href="#">Resources</button></p></li>
            <li><p><button href="#">Donate</button></p></li>
            <li><p><button href="#">Contact Us</button></p></li>
        </ul>
    </div>
  );
}
