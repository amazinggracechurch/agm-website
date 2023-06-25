import React from 'react';
import './notificationBar.css';
import notification from '../../data/links.json';

export default function notificationBar() {
  
  return (
    <>
        <div className="strip">
          <div className="marquee-container">
            <p className="marquee-item">{ notification[ 0 ].url }</p>
            <p className="marquee-item">{ notification[ 5 ].value }</p>
          </div>
        </div>
    </>
  );
}
