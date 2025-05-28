import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from 'axios';

function CreateStudent(){
    const[arr,setArr]=useState([]);
    const getState=(out)=>{
        setArr(out);
    }
    const handleSubmit=()=>{
        const data = {name:arr[0],email:arr[1],rollNo:arr[2]};
        Axios.post("http://localhost:4000/students/create-student",data)
        .then((res)=>{
            if(res.status===200)
                alert("Record added successfully")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue="" emailValue="" rollNoValue="">Create Student</StudentForm>
        </form>
    )
}
export default CreateStudent;