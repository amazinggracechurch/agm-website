import React from "react";
import block from "../../data/church.json";

export default function HomePage( props ) {
    return(
        <>
            <section>
                <h1>{ block.nameUppercase }</h1>
            </section>
        </>
    )
}; 