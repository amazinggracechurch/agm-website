import React from 'react';
import Footer from '../footer/footer';
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
                        <h3>{ declaration[ 0 ].title }</h3>
                        <p>{ declaration[ 0 ].message }</p>
                    </div>
                    <div className="grid">
                        <h3>{ declaration[ 1 ].title }</h3>
                        <p>{ declaration[ 1 ].message }</p>
                    </div>
                </div>
            </div>
            <section className="centered-section">
                <p>watch our services online</p>
                <h3>Recent Sermons</h3>
            </section>
            <Footer />
        </>
    );
} 