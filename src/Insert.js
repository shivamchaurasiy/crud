
import { useState, useEffect } from "react";
import "./Insert.css";
import axios from "axios";
const Insert = () => {

  const [input, setInput] = useState({});
  
  const handleInput=(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setInput(values=>({...values, [name]:value}))
  }
  const handleSubmit=(e)=>{
    axios.post("http://localhost:4000/student", input)
    .then((res)=>{
      document.getElementById('rollno').value="";
      document.getElementById('name').value="";
      document.getElementById('city').value="";
      document.getElementById('fees').value="";
      alert("Record Successfully inserted!!")
      document.getElementById('msg').innerHTML='<h3>Data successfully save!!!</h3>'
      // console.log(input);
    });
  }


  return (
    <>
        <div class="container">
        <h1>Insert Student Record</h1>
        <hr/>

        <label>Roll No. :</label>
          <input type="text" name='rollno' value={input.rollno} id="rollno" onChange={handleInput} class='form-control' />
          <label>Name</label>
          <input type="text" name='name' value={input.name} id="name" onChange={handleInput} class='form-control' />
          <label>City:</label>
          <input type="text" name='city' value={input.city} id="city" onChange={handleInput} class='form-control' />
          <label>Fees:</label>
          <input type="text" name='fees' value={input.fees} id="fees" onChange={handleInput} class='form-control' />
          <input type="button" value="Submit" onClick={handleSubmit} class="btn btn-primary m-2" />

          <div id="msg"></div>
        </div> 
    </>
  );
}
export default Insert;