import Axios from "axios";
import { useEffect, useState } from "react";
import StudentListRow from "./StudentListRow";

function StudentList(){
    const[arr,setArr]=useState([]);
    useEffect(()=>{
        Axios.get("http://localhost:4000/students/")
        .then((res)=>{
            if(res.status===200)
                setArr(res.data);
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[]);
    const ListItems=()=>{
        return arr.map((val,ind)=>{
            return <StudentListRow obj={val}></StudentListRow>
        })
    }
    return(
        <table class="table table-success table-bordered table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll Number</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {ListItems()}
            </tbody>
        </table>
    )
}
export default StudentList;