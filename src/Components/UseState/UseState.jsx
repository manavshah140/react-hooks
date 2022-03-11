
import { useState } from 'react';

const UseState = () => {

//   console.log(useState('thapa technical')); // ye initioal value pe useSTate dega as initial value matlab sabse pehla first value and we can give anything to the initial value
  // let myVal = useState('thapa')[0];
  // console.log(myVal); // Gives Thapa

    // var val = "thapa technical";
          // [initial val, function]
    const [myName, setMyName] = useState('thapa technical');
    
    function changeName() {
        // val = "vinod thapa";
        // setMyName('vinod thapa')
        let val = myName;

        if(val === "thapa technical") {
            setMyName('vinod thapa')
        } else {
            setMyName('thapa technical')
        }
    }

    return(
      <>
          <h1>{myName}</h1>
          <button onClick={changeName}>click me</button>
      </>
    )
}

export default UseState;
