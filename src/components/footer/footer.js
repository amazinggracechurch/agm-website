import React from 'react';
import links from '../../data/links.json';
import './footer.css';

export default function Footer() {
  return (
    <div className="footer">
      {/* <h1>Amazing Grace Ministries</h1> */}
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
      <p>715 Edgerton Street, St. Paul, MN 55431</p>
      <p>© 2022 Amazing grace Ministries | All rights reserved</p>
    </div>
  );
}
