import React, { useState } from "react";

// 1: Always write it inside the component or function (make sure that u are using functional component)
// 2: Component name must be PascalCase (first letter should be uppercase)
// 3: we can directly import or we can directly write it using React.hookname.
// 4: Don't call Hooks inside loops, conditions, or nested functions.

const RulesHooks = () => {

    if (true) {
        const [myName, setMyName] = useState("Manav");
    }

    const [myName, setMyName] = useState("Manav");
                // OR 
    const [myName1, setMyName1 ] = React.useState("ms");

    return(
        <>
            <h1>{myName}</h1>
        </>
    )
}

export default RulesHooks;