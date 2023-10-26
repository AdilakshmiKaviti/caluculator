import React from "react";
import "./App.css";
import Keypad from "./Keypad";
import {useState} from "react";
function App(){
  let [input,setInput]=useState("")
  function handleClick(value){
    setInput(input+value)

  }
  function caluculate(value){
    let outputVal=eval(input)
    setInput(outputVal)

  }
  function handleClear(){
    setInput("")

  }
  return(
    <div className="container">
      <h1>Caluculator</h1>
       <div className="caluculator">
       <input type="text" value={input} className="output" readOnly></input>
       <Keypad handleClick={handleClick} caluculate={caluculate} handleClear={handleClear}></Keypad>

       </div>
    </div>
  )
}
export default App;