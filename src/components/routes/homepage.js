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
                    <h3>WELCOME</h3>
                    <h1>{ block.nameUppercase }</h1>
                    <h3>{ block.location }</h3>
                </div>
            </section>
            <div className="half-section">
                <div className="blue-card">
                    { declaration.map( ( { title, message }, index ) => (
                        <div className="grid" key={ index }>
                            <h3>{ title }</h3>
                            <p>{ message }</p>
                        </div>
                    ) ) }
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