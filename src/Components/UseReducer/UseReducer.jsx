import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    // state matlab current state reducer function ka and action matlab function ya aapko ky perform krneka h
    console.log(state, action); // 0 {type: 'INCREMENT'} Here 0 is my state and type: increment matlab vo buttoon ka action ka de rha h
    if(action.type === "INCREMENT") {
        return state + 1;
    } else if(action.type === "DECREMENT") {
        return state - 1;
    }
    
    return state;
}

const UseReducer = () => {

    // We can do this by useState also but, jaha baada projects raha or mujhe multiple state manage krna paada to vaha useReducer hooks use krna chaiye
    // useReducer is same as useState
    // useReducer(reducer, initialState) 
    // Here useReducer takes two argument reducer function and initial State 
    // reducer function is a pure function that accepts a state and action and return a new state
    // Pure means function is:
    // - The function does not produce any side effects
    // - The function always return the same output if the same argument are passed in

    // Here state is a current State 
    // here dispatch ka kaam h ki vo trigger krta h action method ko jo humne reducer ke arg me likha h 
    // agar dispatch ne trigger kiya b action ko to usko pata kaise chalta h ki trigger kiya h action ko . Vo action ko pata chalega with the help of type method

    const [state, dispatch] = useReducer(reducer, initialState)


    return(
        <>
            <p>{state}</p>
            <button onClick={() => dispatch({type: "INCREMENT"})}>Inc</button>
            <button onClick={() => dispatch({type: "DECREMENT"})}>Dec</button>
        </>
    )
}

export default UseReducer;