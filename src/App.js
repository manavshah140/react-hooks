import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import UseState from "./Components/UseState/UseState"
// import RulesHooks from "./Components/RulesHooks";
import UseStateArray from './Components/UseState/UseStateArray';
import UseStateObject from './Components/UseState/UseStateObject';
import UseEffectClick from './Components/UseEffect/UseEffectClick';
import UseEffectEvent from './Components/UseEffect/UseEffectEvent';
import Uncontrolled from './Components/Forms/Uncontrolled';
import UseReducer from './Components/UseReducer/UseReducer';
import ComA from './Components/UseContext/ComA';

const App = () => {
    return(
      <>
        {/* <UseState /> */}
        {/* <RulesHooks /> */}
        {/* <UseStateArray /> */}
        {/* <UseStateObject /> */}
        {/* <UseEffectClick /> */}
        {/* <UseEffectEvent /> */}
        {/* <Uncontrolled /> */}
        {/* <UseReducer /> */}
        <ComA />
      </>
    )
}

export default App;
