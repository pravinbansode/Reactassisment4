import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { students_data } from "./DataContext";

export const EditData = () => {

    const navigate = useNavigate();
    let [students] = useContext(students_data);
    const {selectedid} = useParams();
    let [name, setName] = useState(students[selectedid-1].name)
    let [age, setAge] = useState(students[selectedid-1].age)
    let [course, setCourse] = useState(students[selectedid-1].course)
    let [batch, setBatch] = useState(students[selectedid-1].batch)    
    let [tempObj] = useState(students[selectedid-1])

    


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
            id:String(selectedid)
        }
        console.log("temp obj"+tempObj.name)
        console.log(students.splice((selectedid-1),1,tempObj))
        navigate("/students")
    }

    const Back = () => {
      
        navigate("/students")
    }

    return(
        students.map((student,index) => { 
            if(student.id===selectedid)
                return (
                    <div key={index}>
                        <input className="box" placeholder="name" type="text" value={name} name="name" onChange={onNameChange}/>
                        <input className="box" placeholder="age" type="number" name="age" value={age} onChange={onAgeChange}/>
                        <input className="box" placeholder="course" type="text" name="course" value={course} onChange={onCourseChange}/>
                        <input className="box" placeholder="batch" type="text" name="batch" value={batch} onChange={onBatchChange}/>
                        <button className="btn1"  onClick={Back}>go back</button>
                        <button className="btn1" onClick={submit} type="submit">submit</button>
                    </div>
                )
            return null;
        })
    )
}