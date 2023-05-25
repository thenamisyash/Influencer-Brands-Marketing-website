import React from 'react'
import {Bar, Pie} from "react-chartjs-2";


const Testing = () => {


    const barData=({

        // labels: barLabel,
        labels: ["ramya","sneha","deeksha","ananya",   "vaishak","vinayak","libin","roshan","bruno"],
       
        datasets: [{
            label: "Audiance Interest Distribution",
            // labelColor:"white",
            // data: barDatas,
            data: [10,78,90,82     ,   75,38,93,84,93],
    
            backgroundColor: [
                // "rgba(75,192,192,1",
                "green",
                "blue",
                "yellow",
                "white"
            ],
            borderColor: "black",
            borderWidth: 2,
        },
        ],
    });


// _____________________________________________//


const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [{
      label: "Dataset #1",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 2,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 20, 81, 56, 55, 40],
    }]
  };
  
  const options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        stacked: true,
        grid: {
          display: true,
          color: "rgba(255,99,132,0.2)"
        }
      },
      x: {
        grid: {
          display: false
        }
      }
    }
  };
  
  const Charrtt=('charrtt', {
    type: 'bar',
    options: options,
    data: data
  });
  




  return (
    <>

    <h1>hello kids </h1>
    <p>
        hey hey this is goin to be fun so lets start our new work place here now and today.
    </p>


<hr/>

  
    <div>BarChart</div>
    <div style={{"width":"400px"}}>
    <canvas role="img" height="375" width="375" style={{"display": "block", "box-sizing": "border-box", "height": "400px", "width": "400px"}}>
    <Bar data={barData} style={{"zIndex":"5"}}/> 
    </canvas>
    <Bar data={barData} /> 
    </div>



<hr/>




    {/* <div>Line Chart</div>

    <div style={{"width":"320px"}}>
    <canvas role="img" height="375" width="375" style={{"display": "block", "box-sizing": "border-box", "height": "300px", "width": "300px"}}>
    <Line data={chartdata} /> 
    </div> */}




<hr/>


    <div style={{"Padding":"0px"}}>Pie Chart</div>
    <div style={{"width":"350px"}}>
    <Pie data={barData} /> 
  
    </div>


<hr/>
    <div className="chart-container">
    <canvas className='testBar' id="charrtt"></canvas>
</div>



    </>
  )
}

export default Testing




