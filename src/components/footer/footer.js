import React from 'react';
import links from '../../data/links.json';

export default function footer() {
  return (
    <>
        <div className="half-section">
            <div className="base">
              <a href="aggospel.net">{ links[ 0 ].url }</a>
            </div>
        </div>
    </>
  );
}
