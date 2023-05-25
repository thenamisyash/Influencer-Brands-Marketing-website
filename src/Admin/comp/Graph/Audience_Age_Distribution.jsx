import React from 'react'

import { useState } from 'react';
import { Bar } from "react-chartjs-2";
import UserData from '../../DashBoard/Chachacha/Comp/Data';
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, //y
    Tooltip,
    Legend,
} from 'chart.js'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, //y
    Tooltip,
    Legend
)


const Audience_Age_Distribution = () => {

  // const [userData,] = useState({
  //   labels: UserData.map((data) => data.year),
  //   datasets: [{
  //     label: "Users Gained",
  //     data: UserData.map((data) => data.userGrowth),
  //   }]
  // });

  const options = {
    // indexAxis: 'y',
 }
 const [dota,] = useState({
    //  labels: UserData.map((data) => data.id),
     labels: [("6-15"),("16-25"),("25-35"),("35-50"),("50-65")],
     datasets: [{
         // label: UserData.map((data) => data.year),
         label: "% of Interaction",
        //  data: UserData.map((data) => data.userGrowth),
         data:[
          (10),(80),(30),(40),(50),(40),(70),(80),(90)
        ],

        options: {
          scales: {
              yAxes: [{
                  barThickness: 6,  // number (pixels) or 'flex'
                  maxBarThickness: 10 // number (pixels)
              }]
          }
      } ,

         backgroundColor: UserData.map((data) => data.bgc),
         borderColor: 'black',
         borderWidth: '1',
     }]
 });


  return (
    <> <div className='card-container '>
    <div className='card p-5' style={{"backgroundColor":"transparent" , "border":"none"}}>
      <div className='text-center py-4' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{"fontSize":"1.7rem", "textUnderlineOffset":"0.2em","textDecorationThickness":"5px"}}>Adience Age Distribution</p></div>
      
      <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>
      <Bar data={dota}   options={options} />
      </div>
     
     
      </div>
      </div>
    </>
  )
}

export default Audience_Age_Distribution




// import { Bar } from 'react-chartjs-2';
// import {
//     Chart as ChartJS,
//     BarElement,
//     CategoryScale,
//     LinearScale, //y
//     Tooltip,
//     Legend,
// } from 'chart.js'

// ChartJS.register(
//     BarElement,
//     CategoryScale,
//     LinearScale, //y
//     Tooltip,
//     Legend
// )

// _________________________________________
//     const options = {
//        // indexAxis: 'y',
//     }
//     const [dota,] = useState({
//         labels: UserData.map((data) => data.id),
//         datasets: [{
//             // label: UserData.map((data) => data.year),
//             label: "Years",
//             data: UserData.map((data) => data.userGrowth),

//             backgroundColor: UserData.map((data) => data.bgc),
//             borderColor: 'black',
//             borderWidth: '1',
//         }]
//     });

//     _________________________________________

// <Bar
//                         data={dota}
//                         options={options}
                   
//  ></Bar>