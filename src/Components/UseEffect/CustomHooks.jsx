
// What is UseEffect: 
// The Effect hook let you perform the side effects in function components ()
// Here what is side effects . 
// Side Effects are basically anything that affects something outside the scope of the current function that's being executed. In Dashboard it includes: (Matlab current function or component ke bahar ka kaam kuch b raha to usko side effect kehlata h)
//  - API requests to our backend service
// - Calls to our authentication Service
// - Error tracking Calls to Sentry 
// and first time jab hum page ko load krte h to vo b automatically call hota h

import React, { useEffect, useState } from "react";
import UseTitleCount from "./UseTitleCount";

const CustomHooks = () => {

    const [count, setCount] = useState(0);

    const IncrCount = () => {
        setCount(count + 1);
    }

    // CUSTOM HOOK
    UseTitleCount(count);


    useEffect(() => {
        console.log("Inside second");
    }, []); //     // yaha [] matlab ye useEffect h ye sirf refresh krnepe hi call hoyega uske baad on any event ye call nhi hoyega  {first time call hoga uske baad koi b event pe call nhi hoga} 

    console.log("hello outside"); // Here ye pehle call hoga baadme useeffect kyuki useEffect is side effect matlab sab kuch call honeke baad useEeffct call hota h

    return (
        <>
                    <h1>{count}</h1>
        <button onClick={IncrCount}>click me</button>
        </>
    )
}

export default CustomHooks;