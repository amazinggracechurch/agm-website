import React from 'react';
import './nav.css';

export default function nav() {
  return (
    <div className="nav">
        <ul>
            <li><p><button href="#">About</button></p></li>
            <li><p><button href="#">Ministries</button></p></li>
        </ul>
        <ul>
            <li><p><button href="#">Resources</button></p></li>
            <li><p><button href="#">Give</button></p></li>
        </ul>
    </div>
  );
}
