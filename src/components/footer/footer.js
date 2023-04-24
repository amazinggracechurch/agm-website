import React from 'react';
import links from '../../data/links.json';
import './footer.css';

export default function footer() {
  return (
    <>
      <div className="half-section">
          <div className="base">
            <div className="grid">
              <a href="aggospel.net">{ links[ 0 ].url }</a>
            </div>
            <div className="grid">
                <h3>Additional Links</h3>
                { links.map( ( { url, type } ) => (
                  <a href={ url } key={ type }>
                    { type }
                  </a>
                ) ) }
            </div>
          </div>
        </div>
    </>
  );
}
