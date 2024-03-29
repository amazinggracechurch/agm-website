import React, { useRef } from 'react';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import UpcomingEvents from '../upcomingEvents/upcomingEvents';
import YouTubeLivestreams from '../stream/recentSermons';
import block from '../../data/church.json';
import give from '../../data/give.json';
import mission from '../../data/mission.json';
import house from '../../assets/asset-4.jpg';
// styles
import './homepage.css';

export default function HomePage( props ) {

    const upcomingEventsRef = useRef( null );
    const latestSermonSection = useRef( null );

    const scrollToSection = ( ref ) => {
        if ( ref.current ) {
            ref.current.scrollIntoView( { behavior: 'smooth' } );
        }
    };

    const parts = block.nameUppercase.split( ' GRACE ' );

    const redirectToGiveUrl = () => {
        window.open( give.url, '_blank' );
    };

    return (
        <>
            <Nav />
            <section>
                <div className="main-img">
                    <div className="tint">
                        <span>
                            <h1 style={ { textAlign: 'center' } }>
                                { parts.map( ( part, index ) => (
                                    <h1 key={ index }>
                                        { part }
                                        { index !== parts.length - 1 && ' GRACE ' }
                                    </h1>
                                ) ) }
                            </h1>
                            <h3>{ block.locationUppercase }</h3>
                        </span>
                        <div className="button-stack">
                            <button className="main-btn-filled" onClick={ () => scrollToSection( latestSermonSection ) }>Latest Sermon</button>
                            <button className="main-btn-outline" onClick={ () => scrollToSection( upcomingEventsRef ) }>Upcoming events</button>
                        </div>
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


            <div className="sermon-section" ref={ latestSermonSection }>
                <YouTubeLivestreams apiKey={ process.env.REACT_APP_API_KEY } channelId={ process.env.REACT_APP_CHANNEL_ID }/>
            </div>

            <div ref={ upcomingEventsRef }>
                <UpcomingEvents />
            </div>
            
            <div className="giving-section" style={ { backgroundImage: `url( ${ house } )` } }>
                <div className="darken">
                    <p>{ give.message }</p>
                    <button onClick={ redirectToGiveUrl } className="main-btn-outline">Give</button>
                </div>
            </div>
            <Footer />
        </>
    );
} 