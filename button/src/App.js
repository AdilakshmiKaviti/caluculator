//import 'antd/dist/antd.css';
import './App.css';
import {Button} from "antd";
import {useState} from "react";
import {PoweroffOutlined} from "@ant-design/icons"
import {Input} from "antd"
import {UserOutlined} from "@ant-design/icons"

function App() {
  const[loading,setLoading]=useState(false)
  const onButtonClick=(e)=>{
    console.log("Button Clicked")
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary" block
        loading={loading}
        className="my-button"
        icon={<PoweroffOutlined/>}
        onClick={onButtonClick}>Start</Button>
        <Input.Search
        Placeholder="Name"
        maxLength={10}
        allowClear
        prefix={<UserOutlined/>}
        className="c"
      />
        
      </header>
      
    </div>
  );
}

export default App;
