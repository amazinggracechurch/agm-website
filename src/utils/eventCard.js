import React from 'react';
import './eventCard.css';

export default function EventCard( props ) {
    const {
        month,
        // eslint-disable-next-line
        year,
        day,
        time,
        // eslint-disable-next-line
        location,
        title, 
        //...
    } = props;

    const monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December' ];
    const monthName = monthNames[ month ];

    return (
        <>
            <div className="event-card-container">
            <div className="event-card">
                <div className="event-date">
                    <h3>{ day }</h3>
                    <h3>{ monthName.substring( 0, 3 ) }</h3> {/* Display first 3 letters of month */}
                </div>

                <div className="event-details">
                    <p>{ title }</p>
                    <p>{ time }</p>
                </div>
            </div>
        </div>
        </>
    );
}