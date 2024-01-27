import React from 'react';
import Nav from '../../nav/nav';
import Footer from '../../footer/footer';
import './about.css';
import data from '../../../data/about.json';

export default function About() {
    return (
        <>
            <Nav />
            <div className="main-img half-section page-header-container">
                <h1>About</h1>
            </div>
            <div className="about-section">
                <div className="text-section">
                    <h2>{ data.title }</h2>
                    <p>{ data.message }</p>
                </div>
            </div>
            <Footer />
        </>
    );
}