import "./Search.css";
import axios from "axios";
import { useState } from "react";
import MyTable from './MyTable'

const Search = () => 
{
  const [rno, setRno] = useState("");
  const [data, setData] = useState([])

  const handleInput=(e)=>{
    setRno(e.target.value);
    console.log(rno)
  }

  const handleForm=()=>{
    let url = `http://localhost:4000/student/?rollno=${rno}`;
    axios
    .get(url)
    .then((res)=>{
      setData(res.data);
    });
    console.log(data);
  }


const MyData = data.map((key)=> <MyTable 
rno={key.rollno}
nm={key.name} 
ct={key.city} 
fees={key.fees}/>)

  return (
    <>

    <center>
      <label>Enter Rollno : </label>
      <input type="text" value={rno} name="rno" onChange={handleInput}/>
      <input type="button" onClick={handleForm} value="Search" className="btn btn-primary m-1"/>
    </center>

      <h1>Search Record</h1>
    <table className="table table-bordered">
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
      </tr>
      {MyData}
    </table> 

    </>
  );
}

export default Search;