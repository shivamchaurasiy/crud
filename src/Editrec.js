import { useParams } from "react-router-dom"; 
import { useState, useEffect } from "react";
import axios from "axios";
import './css/editrec.css'

const Editrec = () => {
    const [data, setData] = useState([]);
    let {id} = useParams();
    
    const loadData=()=>{
        let url=`http://localhost:4000/student/${id}`;
        axios.get(url)
        .then((res)=>{
            setData(res.data);
        });
        console.log(data)
    }

    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setData(values=>({...values, [name]:value}));
        console.log(data); 
    }
    const editSave=()=>{
        axios
        .put(`http://localhost:4000/student/${id}`, data)
        .then((res)=>{
            setData(res.data);
            alert('data successfully updated')
        })
    }

    useEffect(()=>{
        loadData();
    }, [])
    
  return (
    <>
        <form>
        <h1>Edit Student Records</h1>
        Roll No : <input type="text" value={data.rollno} name="rollno" onChange={handleInput} className="form-control"/>
        Name : <input type="text" value={data.name}  name="name"  onChange={handleInput}  className="form-control"/>
        City : <input type="text" value={data.city}  name="city"  onChange={handleInput}  className="form-control"/>
        Fees : <input type="text" value={data.fees}  name="fees"  onChange={handleInput}  className="form-control"/>
        <input type="button" value="Data Update" onClick={editSave} className="btn btn-primary m-2"/>
        </form>
    </>
  )
}

export default Editrec;