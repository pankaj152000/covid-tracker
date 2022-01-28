import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
const header=()=>{
  return(
    <div className="header">
     <Link to="/" className="logo"><b>COVID</b></Link>
    <div className="options">
    <Link to="/reports" className="option">REPORTS</Link>
    <Link to="/news" className="option">NEWS</Link>
    <Link to="/guidelines" className="option">GUIDELINES</Link>
    <Link to="/about" className="option">ABOUT</Link>
    </div>
    
    </div>
  );
};
export default header;