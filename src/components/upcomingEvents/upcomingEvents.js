import React, { useState, useEffect } from 'react';
import DatePicker from '../../utils/datePicker';
import EventCard from '../../utils/eventCard';
import './upcomingEvents.css';

export default function UpcomingEvents() {
    const [ selectedMonth, setSelectedMonth ] = useState( new Date().getMonth() );
    const [ events, setEvents ] = useState( [] );
    const [ displayedEvents, setDisplayedEvents ] = useState( [] );
    const [ weekOffset, setWeekOffset ] = useState( 0 );

    useEffect( () => {
        // Function to generate events based on the selected month
        const generateEvents = ( month ) => {
            const year = new Date().getFullYear();
            const daysInMonth = new Date( year, month + 1, 0 ).getDate();
            const newEvents = [];

            for ( let day = 1; day <= daysInMonth; day++ ) {
                const date = new Date( year, month, day );
                const dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, ..., 6 is Saturday

                // Monday
                if ( dayOfWeek === 1 ) {
                    newEvents.push( { month, year, day, time: '06:30pm - 08:30pm', title: 'Digging for hidden treasures' } );
                }

                // Wednesday
                if ( dayOfWeek === 3 ) {
                    newEvents.push( { month, year, day, time: '06:30pm - 07:30pm', title: 'Altar of fire service' } );
                }

                // Friday
                if ( dayOfWeek === 5 ) {
                    newEvents.push( { month, year, day, time: '08:30am - 09:30am', title: 'Breakfast for eagles' } );
                    if ( !( isFirstSaturday( month, year, day ) ) ) {
                        newEvents.push( { month, year, day, time: '11:00pm - 12:30am', title: 'Hour of Battle' } );
                    }
                }

                // First Saturday of the month
                if ( dayOfWeek === 6 && isFirstSaturday( month, year, day ) ) {
                    newEvents.push( { month, year, day, time: '08:00am - 10:30am', title: 'Open Heavens' } );
                }

                // Sunday
                if ( dayOfWeek === 0 ) {
                    newEvents.push( { month, year, day, time: '09:00am - 12:30am', title: 'Worship service' } );
                }
            }
            return newEvents;
        };
        // Check if it's the first Saturday of the month
        const isFirstSaturday = ( month, year, day ) => {
            const firstDayOfMonth = new Date( year, month, 1 ).getDay();
            return day === 6 - firstDayOfMonth + 1;
        };

        setEvents( generateEvents( selectedMonth ) );

        setWeekOffset( 0 );
    }, [ selectedMonth ] );

    useEffect( () => {
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth();
        const currentYear = currentDate.getFullYear();

        // Adjust start date based on the selected month
        let startDate;
        if ( selectedMonth === currentMonth ) {
            // Start from today for the current month
            startDate = currentDate;
        } else {
            // Start from the first of the month for future months
            startDate = new Date( currentYear, selectedMonth, 1 ); 
        }

        const endDate = new Date( startDate );
        endDate.setDate( endDate.getDate() + ( 7 * ( weekOffset + 1 ) ) );


        const rangeEvents = events.filter( event => {
            const eventDate = new Date( event.year, event.month, event.day );
            return eventDate >= startDate && eventDate < endDate;
        } );

        setDisplayedEvents( rangeEvents );
    }, [ events, weekOffset, selectedMonth ] );

    const handleMonthChange = ( newMonth ) => {
        setSelectedMonth( newMonth );
        setWeekOffset( 0 );
    };

    const showMoreEvents = () => {
        setWeekOffset( weekOffset + 1 );
    };
    
    return (
        <div className="upcoming-events-container">
            <div className="section-title">
                <h3>Upcoming Events</h3>
            </div>
            <DatePicker onMonthChange={ handleMonthChange } />
            { displayedEvents.map( ( event, index ) => (
                <EventCard key={ index } { ...event } />
            ) ) }
            { weekOffset < 4 && <button onClick={ showMoreEvents }> Show More </button>}
        </div>
    );
}