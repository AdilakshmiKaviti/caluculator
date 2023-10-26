
import './App.css';
import {useState,useEffect} from "react";
import {Table} from "antd";

function App() {
  const columns=[{
    key:"1",
    title:"ID",
    dataIndex:"id"
  },{
    key:"2",
    title:"User ID",
    dataIndex:"userid"
  },{
    key:"3",
    title:"Status",
    dataIndex:"completed",
    render:(completed)=>{
      return <p>{completed?"completed":"in progress"}</p>
    }
  },]
  const[Loading, setLoading]=useState(false)
  const [dataSource, setDataSource]=useState([])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(response=>response.json())
  }).then(data=>{setDataSource(data)}).catch(err=>{
    console.log(err)
  }).finally(()=>{
    setLoading(false)
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <Table>
          columns={columns}
          dataSource={dataSource}
          loading={Loading}
        </Table>
       
      </header>
    </div>
  );
}

export default App;
