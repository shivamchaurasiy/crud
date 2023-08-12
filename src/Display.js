import { useState, useEffect } from "react";
import axios from "axios";
import MydataCom from "./MydataCom";

const Display = () => {
  const [data, setData] = useState([]);

  const loadData=()=>{
    axios
    .get("http://localhost:4000/student")
    .then((res)=>{
      setData(res.data)
    });
    console.log(loadData);
  }

  useEffect(()=>{
    loadData()
  }, []);

  const ltbData = data.map((key)=> < MydataCom rno={key.rollno}
  nm={key.name} ct={key.city} fs={key.fees}/>)

  return (
    <>
    <center>

      <h1>Display Student Record</h1>
      <hr/>
    </center>
      <table className="table table-striped">
        <thead>
          <tr style={{fontSize:25}}>
            <th>Roll NO.</th>
            <th>Name</th>
            <th>City</th>
            <th>Fees</th>
          </tr>
        </thead>
        <tbody>
        {ltbData}
        </tbody>
      </table>
    </>
  );
}

export default Display;