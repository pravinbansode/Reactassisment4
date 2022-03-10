import React from "react";
import Home from "./Home";
import Data from "./Data";
import {Contact} from "./Contact";
import {Header} from "./Header";
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { EditData } from "./EditData";
import { DataContext } from "./DataContext";
import {AddData} from "./AddData";


const App = () => {
    return (
    <DataContext>
        <div id="main_container">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home"/> }/>
                    <Route path="/home" element={< Home />}/>
                    <Route path="/students" element={<Data />}/>
                    <Route path="/student-desc" element={<AddData />} />
                    <Route path="/student-desc/:selectedid" element={<EditData />} />
                    <Route path="/contact" element={<Contact />} />
               </Routes>
            </Router>
        </div>
    </DataContext>
    );
};

export default App;