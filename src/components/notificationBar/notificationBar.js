import React from 'react';
import './notificationBar.css';
import notification from '../../data/links.json';

export default function notificationBar() {
  return (
    <>
      <div className="strip">
        <div className="marquee-container">
          { notification.map( ( item, index ) => (
            <p key={ index } className="marquee-item">
              {item.type === 'announcement' ? item.value : item.email }
            </p>
          ) ) }
          { notification.map( ( item, index ) => (
            <p key={ index } className="marquee-item">
              {item.type === 'announcement' ? item.value : item.email }
            </p>
          ) ) }
          { notification.map( ( item, index ) => (
            <p key={ index } className="marquee-item">
              { item.type === 'announcement' ? item.value : item.email }
            </p>
          ) ) }
        </div>
      </div>
    </>
  );
}
