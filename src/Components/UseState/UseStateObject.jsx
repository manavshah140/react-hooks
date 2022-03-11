import React, { useState } from "react";

const UseStateObject = () => {
    
    const [myObject, setMyObject] = useState({
        myName: "Vinod", myAge: 22, Degree: "BE"
    }); 
    
    function changeObject() {
        setMyObject({...myObject, myName: "Manav", myAge: 30, Degree: "BTech"})
    }

    return(
        <>
            <h1>Name: {myObject.myName} & Age:{myObject.myAge} & Degree: {myObject.Degree}</h1>
            <button onClick={changeObject}>update</button>
        </>
    )
}

export default UseStateObject;