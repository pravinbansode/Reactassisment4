import React, {Component} from "react";
import "./Styel.css";
import { Link } from "react-router-dom";

export class Header extends Component{

    constructor(props){
        super(props);
        this.state = {};
    };

    render(){
        return (
            <div className="header">
                <Link to="/home" className="header1">Home</Link>
                <Link to="/students" className="header1">Students</Link>
                <Link to="/contact" className="header1">Contact US</Link>
            </div>
        );
    };

};