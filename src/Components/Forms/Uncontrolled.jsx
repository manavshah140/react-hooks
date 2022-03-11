import React, { useRef, useState } from "react";

const Uncontrolled = () => {

    // same like useState but no re render
    const luckyname = useRef(null);
    const [show, setShow] = useState(false);

    const submitForm = (e) => {
        e.preventDefault();
        const name = luckyname.current.value;
        name === "" ? alert("Plz fill the data") : setShow(true);
    }


    return(
        <>
            <form action="" onSubmit={submitForm}>
                <div>
                    <label htmlFor="luckyname">enter your luckyname</label>
                    <input type="text" id="luckyname" ref={luckyname}/>
                </div>
                <br></br>
                <button>Submit</button>
            </form>
            <p>{show ? `your lucky name is ${luckyname.current.value}` : ""}</p>
        </>
    )
}

export default Uncontrolled;