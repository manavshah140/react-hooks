// CleanUp Function


import React, { useEffect, useState } from "react";

const UseEffectEvent = () => {
    
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        // console.log(window.innerWidth);
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth)

        // Ye Q likhte h ki jaise hi me window ko resize kr rha hu to vo mera memory me store ho rha h each value of window to vo store na ho isliye cleanup use krte h 
        // Storing in element me event listener me resize me store ho rha h
        return () => {
            window.removeEventListener("resize", actualWidth)
        }
    });

    return (
        <>
            <p>The actual window size is:</p>
            <h1>{widthCount}</h1>
        </>
    )
}

export default UseEffectEvent;