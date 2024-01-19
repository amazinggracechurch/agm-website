import React, { useState } from 'react';
//styles
import './upcomingEvents.css';

export default function UpcomingEventsView() {

    const [ date, /* setDate */ ] = useState( {
        month: 'MON',
        day: '12',
        eventname: 'Hour of Battle',
        eventTime: '9:00am - 10:00am'
    } );
 
  return (
    <div className="upcoming-events" id="upcoming-events-section">
        <h3>Upcoming Events</h3>
        <div className="tempo">
            <div className="white-container">
                <div className="event-card">
                    <div className="date-tag">
                        <h4>{ date.month }</h4>
                        <h4>{ date.day }</h4>
                    </div>
                    <div>
                        <h4>{ date.eventname }</h4>
                        <p>{ date.eventTime }</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
