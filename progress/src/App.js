
import './App.css';
import {Progress} from "antd"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Progress percent={50} type="circle" strokeColor={"green"} strokeWidth={"30"} status="success"/>


        <Progress percent={33} type="line" strokeColor={"green"} strokeWidth={"20"}/>
        <Progress percent={50} type="circle" strokeColor={"blue"} strokeWidth={"30"} status="exception"/>


        <Progress percent={33} type="line" strokeColor={"white"} strokeWidth={"20"}/>
        
        
      </header>
    </div>
  );
}

export default App;
