import React from 'react'
import {Bar, Line, Pie} from "react-chartjs-2";
import {Chart as chartjs } from 'chart.js/auto';


const BarChart = ({chartdata}) => {
  return (
      <>
    <div>BarChart</div>
    <div style={{"width":"300px"}}>
    <Bar data={chartdata} /> 
    </div>
    <div>Line Chart</div>

    <div style={{"width":"320px"}}>
    {/* <canvas role="img" height="375" width="375" style={{"display": "block", "box-sizing": "border-box", "height": "300px", "width": "300px"}}> */}
    {/* <canvas role="img"  style={{"display": "block", "box-sizing": "border-box", "height": "300px", "width": "300px"}}> */}
    <Line data={chartdata} /> 
    {/* </canvas/> */}
    </div>

    <div style={{"Padding":"0px"}}>Pie Chart</div>

    <div style={{"width":"350px"}}>
    <Pie data={chartdata} /> 

    </div>

    </>
  );
}
export default BarChart;