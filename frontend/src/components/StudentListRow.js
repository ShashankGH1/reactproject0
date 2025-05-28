import Axios from "axios";
import {Link} from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function StudentListRow(props){
    
    const{_id,name,email,rollNo}=props.obj;
    const handleClick = () => {
        Axios.delete(`${API}/students/delete-student/${_id}`)
        .then((res) => {
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollNo}</td>
            <td>
                <button class="btn btn-success ms-3">
                    <Link class="text-decoration-none" to={"/edit-student/"+_id}>Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger mx-3">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;