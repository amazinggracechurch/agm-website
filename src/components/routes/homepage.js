import React from 'react';
import Footer from '../footer/footer';
import block from '../../data/church.json';
import give from '../../data/give.json';
import mission from '../../data/mission.json';
import './homepage.css';
import house from '../../assets/asset-4.jpg';
import YouTubeLivestreams from '../stream/recentSermons';
import Nav from '../nav/nav';

export default function HomePage( props ) {

    const parts = block.nameUppercase.split( ' GRACE ' );

    function redirectToGiveUrl() {
        window.open( give.url, '_blank' );
    }

    return (
        <>
            <section>
                <div className="center-element">
                    <Nav />
                </div>
                <div className="main-img">
                    <div className="tint">
                        <h1 style={ { textAlign: 'center' } }>
                            { parts.map( ( part, index ) => (
                                <h1 key={ index }>
                                    { part }
                                    { index !== parts.length - 1 && ' GRACE ' }
                                </h1>
                            ) ) }
                        </h1>
                        <h3>{ block.locationUppercase }</h3>
                    </div>
                </div>
            </section>

            <div className="half-section">
                <div className="blue-card">
                    { mission.map( ( { title, message }, index ) => (
                        <div className="grid" key={ index }>
                            <h3>{ title }</h3>
                            <p>{ message }</p>
                        </div>
                    ) ) }
                </div>
            </div>
            
            <div className="sermon-section">
                <YouTubeLivestreams apiKey={ process.env.REACT_APP_API_KEY } channelId={ process.env.REACT_APP_CHANNEL_ID }/>
            </div>
            <div className="giving-section">
                <div className="image-container">
                    <img src={ house } alt="house"/>
                    <div className="overlay">
                        <div className="give">
                            <p>{ give.message }</p>
                            <button onClick={ redirectToGiveUrl } class="main-button">Give</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
} 