import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { students_data } from "./DataContext";

export const AddData = () => {

    const navigate = useNavigate();
    let [students, setStudents] = useContext(students_data);
    let [name, setName] = useState("")
    let [age, setAge] = useState("")
    let [course, setCourse] = useState("")
    let [batch, setBatch] = useState("")    
    let [tempObj] = useState({})

    

    const onNameChange = (event) => {
        setName(event.target.value)
 
    }

    const onAgeChange = (event) => {
        setAge(event.target.value)
    }

    const onBatchChange = (event) => {
        setBatch(event.target.value)
    }

    const onCourseChange = (event) => {
        setCourse(event.target.value)
    }

    const submit = () => {
        console.log(name,age,course,batch)
        console.log(tempObj)
        tempObj= {
            name,
            age,
            course,
            batch,
            id:String(students.length+1)
        }
        
        setStudents(tempObj)
        console.log(tempObj)
        navigate("/students")
    }

    const Back = () => {
        navigate("/students")
    }

    return(
            <div>
                <input className="box" placeholder="name" type="text" value={name} name="name" onChange={onNameChange}/>
                <input className="box" placeholder="age" type="number" name="age" value={age} onChange={onAgeChange}/>
                <input className="box" placeholder="course" type="text" name="course" value={course} onChange={onCourseChange}/>
                <input className="box" placeholder="batch" type="text" name="batch" value={batch} onChange={onBatchChange}/>
                <button className="btn1" onClick={Back}>go back</button>
                <button className="btn1" onClick={submit} type="submit">submit</button>
            </div>     
        )
};