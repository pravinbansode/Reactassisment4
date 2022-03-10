import React, { useContext } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link, useNavigate } from "react-router-dom";
import { students_data } from "./DataContext";




export default function BasicTable() {

  let navigate = useNavigate();

  let [students] = useContext(students_data);

  console.log(students);

  const addStudent = () => {
    navigate(`/student-desc`)
  }

  return (
      <>
      <button className="student_add_button" onClick={addStudent}>Add button</button>
    <TableContainer component={Paper} style={{margin:"100px auto",width:"90vw"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell component="th" scope="row">Name</TableCell>
            <TableCell align="right">Age</TableCell>
            <TableCell align="right">Course</TableCell>
            <TableCell align="right">Batch</TableCell>
            <TableCell align="right">Change</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {students.map((Data,index) => {
            console.log(Data)
            return (<>
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {Data.name}
              </TableCell>
              <TableCell align="right">{Data.age}</TableCell>
              <TableCell align="right">{Data.course}</TableCell>
              <TableCell align="right">{Data.batch}</TableCell>
              <TableCell align="right"><Link to={"/student-desc/"+Data.id}>edit</Link></TableCell>
            </TableRow>
            </>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}