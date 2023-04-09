import React from 'react';
import block from '../../data/church.json';
import declaration from '../../data/declaration.json';
import './homepage.css';

export default function HomePage( props ) {
    return (
        <>
            <section>
                <div className="main-img">
                    <h1>{ block.nameUppercase }</h1>
                </div>
            </section>
            <div className="half-section">
                <div className="blue-card">
                    <div className="grid">
                        <h3>{ declaration.map( declaration => declaration.title )}</h3>
                    </div>
                    <div className="grid">
                        <h3>{ declaration.map( declaration => declaration.title )}</h3>
                    </div>
                </div>
            </div>
        </>
    );
} 