import React, { createContext } from "react";
import ComB from "./ComB";

// Here Mere paas ComA, ComB aur ComC h jaha ComA me ComB ko import kr rha hu and ComB me COmC ko import kr rha hu . To yaha if mujhe props se data pass krna pada ComA se ComC me to uske bichme jitne b component honge sabme pass krke ComC jayga if 4 component ke baad comC aata h to 4 component ko props pass krke ComC aayega to ye jo situation h usko bolte h Props Drilling. 

// To Overcome this we use Context API   

// Yaha Kuch b data pass krna raha to create a context   -  CONTEXT
// Jo context create kiya usko pahuchne ke liye we have provider  -  PROVIDER
// Jo context provider ke through aayega usko get b krna padega so for that we have consumer   -  CONSUMER(Yaha Consumer vaala part jo h vo bahot lengthy h aur complicated b h)
// So Consumer ko reduce krke banaya h useContext

// PASSING THROUGH PROPS
// const ComA = () => {
//     return(
//         <>
//             <ComB name={"thapa technical"} />
//         </>
//     )
// }

const BioData = createContext();

const ComA = () => {
    return(
        <>
            <BioData.Provider value={"Thapa Technical"}>
                <ComB/>
            </BioData.Provider>
        </>
    )
}


export default ComA;
export {BioData};