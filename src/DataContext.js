import React, { createContext, useState } from "react";

export const students_data = createContext();

export const DataContext = (props) => {

    let [students, setStudents] = useState([
        { id:"1",  name:"Dany",  age:"18",  course:"MERN",  batch:"October" },
        { id:"2",  name:"Sam",   age:"22",  course:"MERN",  batcch:"September" },
        { id:"3",  name:"Jhon",  age:"19",  course:"MERN",  batch:"October" },
        { id:"4",  name:"Muene", age:"24",  course:"MERN",  batch:"November" },
        { id:"5",  name:"Smith", age:"23",  course:"MERN",  batch:"October" }
    ]); 


    const addStudentToArray = (obj) =>{
        setStudents([...students,obj])
    }


    return(
        <>
        <students_data.Provider value={[students, addStudentToArray]}>
            {props.children}
        </students_data.Provider>
        </>
    )
}