import { useState, useEffect } from "react";
import axios from "axios";
import UpdateDisplay from "./UpdateDisplay";

const Update = () =>{
  const [data, setData] = useState([]);

  const loadData=()=>{
    axios.get("http://localhost:4000/student")
    .then((res)=>{
      setData(res.data);
    });
    console.log(data);
  }

  useEffect(()=>{
    loadData();
  }, [])

  const myData = data.map((key)=><UpdateDisplay

    rno = {key.rollno}
    nm = {key.name}
    ct = {key.city}
    fs = {key.fees}
    id = {key.id}


  />)
  return (
    <>
      <h1>Update</h1>
      <table className="table table-bordered">
      <thead>
        <tr>
          <th>Roll No.</th>
          <th>Name</th>
          <th>City</th>
          <th>Fees</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>

      {myData}
      </tbody>
      </table>
    </>
  );
}

export default Update;