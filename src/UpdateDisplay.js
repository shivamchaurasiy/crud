import { useState, useEffect } from 'react'
import editImg from './edit-icon.png'
import { Link } from 'react-router-dom'
import axios from 'axios'

const UpdateDisplay = (props) => {
    const [data, setData] = useState([]);
    const editDisplay=(id)=>{
        let url=`http://localhost:4000/student/${id}`;
        axios.get(url)
        .then((res)=>{
            setData(res.data);
            alert(id)
        })
    }
  return (
    <>
        <tr>
            <td>{props.rno}</td>
            <td>{props.nm}</td>
            <td>{props.ct}</td>
            <td>{props.fs}</td>
            <td>
            <Link to={`/Editrec/${props.id}`}>

            <img src={editImg} width="40" height="40"/>
            </Link>
            
            </td>
        </tr>
    </>
  )
}

export default UpdateDisplay;