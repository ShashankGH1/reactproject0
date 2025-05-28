import { useEffect, useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";
import { useParams } from "react-router-dom";
const API = process.env.REACT_APP_API_URL;

function EditStudent(){
    const [initialValue,setInitialValue]=useState({name:"",email:"",rollNo:""});
    const [newData,setNewData]=useState([]);
    const {id}=useParams();
    useEffect(()=>{
        Axios.get(`${API}/students/update-student/${id}`)
        .then((res) => {
            if(res.status === 200){
                const {name,email,rollNo}=res.data;
                setInitialValue({name,email,rollNo});
            }
            else    
                Promise.reject();
        })
        .catch((err)=>alert(err));
    },[id]);
    const getState=(childData)=>{
        setNewData(childData);
    }
    const handleSubmit=()=>{
        const data={name:newData[0],email:newData[1],rollNo:newData[2]}
        Axios.put(`${API}/students/update-student/${id}`, data)
        .then((res)=>{
            if(res.status===200)
                alert("Record updated")
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }
    return(
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState} nameValue={initialValue.name} emailValue={initialValue.email} rollNoValue={initialValue.rollNo}>
                Update Student
            </StudentForm>
        </form>
    )
}
export default EditStudent;