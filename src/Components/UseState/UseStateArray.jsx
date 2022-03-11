import React, { useState } from "react";

const UseStateArray = () => {

    const bioData = [
        {
            id:0, name:"manav",age:22
        },
        {
            id:1, name:"shah",age:12
        }
    ]

    const [myArray, setMyArray] = useState(bioData);

    const clearArray = () => {
        setMyArray([]);
    } 

    return(
        <>
            {/* <h1>Hi</h1> */}
            {
                myArray.map((val, index) => {
                    return(
                        <>
                            <h1 key={val.id}>id: {val.id} Name: {val.name} age: {val.age}</h1>
                        </>
                    )
                })
            }
            <button onClick={clearArray}>clear</button>
        </>
    )
}

export default UseStateArray;