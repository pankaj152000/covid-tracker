import React from "react";
import "./reports.scss";
import Data from "../../components/report-component/report-component";

class reports extends React.Component{
  constructor(){
    super()
    this.state={
         data:[]
    }
  }
  componentDidMount(){
    fetch("https://covid-193.p.rapidapi.com/statistics", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "18fcc2be05msh21e7634735c5f37p19284ejsnf104d8139402"
      }
    })
.then(response =>response.json())
.then((result)=>this.setState({data:result.response}));
}
const 
  render(){
    console.log(this.state.data);
    return(
       <div className="reports">
       <table className="table">
       <tr>
       <th>CONTINENT</th>
       <th>COUNTRY</th>
       <th>POPULATION</th>
       <th>ACTIVE CASES</th>
       <th>RECOVERED</th>
       <th>TOTAL DEATHS</th>
       <th>TOTAL TESTS</th>

       </tr>
       </table>
        {
          this.state.data.map(({population,cases,country,continent,deaths,tests})=>
          <Data population={population} cases={cases} deaths={deaths} tests={tests} continent={continent} country={country}></Data>)
        }
       
       </div>
    );
  };

};
export default reports;