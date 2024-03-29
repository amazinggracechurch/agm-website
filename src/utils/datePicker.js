import React, { useState } from 'react';
import './datePicker.css';

const months = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

export default function DatePicker( { onMonthChange } ) {
    const currentMonthIndex = new Date().getMonth();
    const [ monthIndex, setMonthIndex ] = useState( currentMonthIndex );

    const prevMonth = () => {
        setMonthIndex( ( prevIndex ) => {
            const newIndex = prevIndex === 0 ? 11 : prevIndex - 1;
            onMonthChange( newIndex );
            return newIndex;
        } );
    };

    const nextMonth = () => {
        setMonthIndex( ( prevIndex ) => {
            const newIndex = prevIndex === 11 ? 0 : prevIndex + 1;
            onMonthChange( newIndex );
            return newIndex;
        } );
    };

    return (
        <div className="date-picker-container">
            <div className="date-picker">
                <div className="date-selector" onClick={ prevMonth }><p>{ '<' }</p></div>
                <div><p>{ months[ monthIndex ] }</p></div>
                <div className="date-selector" onClick={ nextMonth }><p>{ '>' }</p></div>
            </div>
        </div>
    );
}
