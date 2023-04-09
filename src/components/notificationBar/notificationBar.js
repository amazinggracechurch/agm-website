import React from 'react';
import './notificationBar.css';
import email from '../../data/links.json';

export default function notificationBar() {
  return (
    <>
        <div className="strip">
            <p>{ email[ 0 ].url }</p>
        </div>
    </>
  );
}
