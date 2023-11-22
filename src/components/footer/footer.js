import React from 'react';
import links from '../../data/links.json';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <h3>Amazing Grace Ministries</h3>
      <p>the headquarters of God in Minnesota</p>
      <div className="footer-links">
        { links.map( ( { url, type } ) => (
          <a href={ url } key={ type }>{ type }</a>
        ) ) }
      </div>
      <div className="social-links">
      </div>
      <hr className="footer-divider" />
      <div className="newsletter">
        <input type="email" placeholder="Subscribe To Our Newsletter" />
        <button> → </button>
      </div>
      <p>Amazing grace Ministries | Copyright © 2022 All rights reserved</p>
    </div>
  );
}
