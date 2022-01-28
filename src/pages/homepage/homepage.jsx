import React from "react";
import "./homepage.scss";
import covid from "./covid.png";


const homePage=()=>{
   return(
    <div className="homepage">
    
    <h1>COVID TRACKER</h1>
    <img src={covid} alt="covid" className="photo"></img>
    </div>
   );
};
export default homePage;