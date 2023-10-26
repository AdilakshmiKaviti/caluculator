
import './App.css';
import {Select} from "antd"

function App() {
  const fruits=["Apple","Banana","Mango","Orange"]
  return (
    <div className="App">
      <header className="App-header">
        <p>Which is your favorite fruite?</p>
        <Select mode="multiple" 
        maxTagCount={2}
        allowClear
        placeholder="select your fruite" style={{width:"50%"}}>
          {fruits.map((fruite,index)=>{
            return <Select.Option key={index} value={fruite}></Select.Option>
          })}

        </Select>
        
      </header>
    </div>
  );
}

export default App;
