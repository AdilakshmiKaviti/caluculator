
import './App.css';
import React,{useEffect} from "react";

function App() {
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json())
    .then(json=>console.log(json))
  },[])
  return(
    <div>hello world</div>
  )
}

export default App;
