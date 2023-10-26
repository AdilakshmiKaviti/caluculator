import React from "react"
import './App.css';
import {Button,Form,Input,message,Alert} from "antd";



function App() {
  const onFinish=(e)=>{
    console.log(e)
    setTimeout(()=>{
      message.success("Login Success")
    },2000)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Form onFinish={onFinish}>
          <Form.Item label="User Name" name="username">
            <Input placeholder='User Name' required>
            </Input>
          </Form.Item>
          <Form.Item label="Password" name="password" className="c">
            <Input.Password placeholder='Password' required></Input.Password>
            
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="button">Log In</Button>
          </Form.Item>
        </Form>
        
      </header>
    </div>
  );
}

export default App;
