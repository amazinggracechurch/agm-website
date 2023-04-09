import React from "react";
import block from "../../data/church.json";

export default function HomePage( props ) {
    return(
        <>
            <section>
                <div className="main-img">
                    <h1>{ block.nameUppercase }</h1>
                </div>
            </section>
            <div className="half-section">
                <div className="blue-card">
                    
                </div>
            </div>
        </>
    )
}; 