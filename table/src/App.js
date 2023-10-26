
import './App.css';
import {Table} from "antd"

function App() {
  const data=[{
    name:"name1",
    age:10,
    adress:"adress1",
    key:"1"
  },{
    name:"name2",
    age:20,
    adress:"adress2",
    key:"2"
  },{
    name:"name3",
    age:30,
    adress:"adress3",
    key:"3"
  },
]
const columns=[{
  title:"Name",
  dataIndex:"name",
  key:"key"
},
{
  title:"Age",
  dataIndex:"age",
  key:"key"
},
{
  title:"Adress",
  dataIndex:"adress",
  key:"key"
},]
  return (
    <div className="App">
      <header className="App-header">
        <Table
        dataSource={data}
        columns={columns}>

        </Table>
        
      </header>
    </div>
  );
}

export default App;
