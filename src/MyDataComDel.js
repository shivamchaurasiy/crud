import axios from "axios"

import { useNavigate } from "react-router-dom";

const MydataComDel = (props) => {
    
    const navigate = useNavigate();
    const recDelete = (id) => {
        const Id = id;
        axios.delete(`http://localhost:4000/student/${Id}`)
            .then(response => {
                alert('Are you sure want to delete')
                
                navigate('/display');
            })
            .catch(error => {
                console.error(error);
            });
    }
    return (
        <>

            <tr style={{ fontSize: 22 }}>
                <td>{props.rno}</td>
                <td>{props.nm}</td>
                <td>{props.ct}</td>
                <td>{props.fs}</td>
                <td>
                <a href="#" onClick={() => { recDelete(props.myid) }}>
                    <img src={props.myimg} width="35" height="35" />
                </a>
                </td>
            </tr>
        </>
    )
}

export default MydataComDel