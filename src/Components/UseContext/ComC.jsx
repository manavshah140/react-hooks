import React, { useContext } from "react";
import { BioData } from "./ComA";

// PASSING THROUGH PROPS
// const ComC = ({name}) => {
//     return(
//         <>
//             <h1>ComC {name}</h1>
//         </>
//     )
// }

const ComC = () => {
    const context = useContext(BioData);
    return(
        <>
            <h1>ComC {context}</h1>
        </>
    )
}


export default ComC;
