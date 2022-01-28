import React from "react";
import "./report-component.scss";


const DATA=({population,cases,country,continent,deaths,tests})=>{
    return(
        <div className="table">
        <table className="table">
        <tr>
        <td>{continent}</td>
        <td>{country}</td>
        <td>{population}</td>
        <td>{cases.active}</td>
        <td>{cases.recovered}</td>
        <td>{deaths.total}</td>
        <td>{tests.total}</td>
        </tr>
        </table>
        </div>
    );
}
export default DATA;