import React from 'react'
import UserData from '../../DashBoard/Chachacha/Comp/Data';
import { useState } from 'react';

import { Line } from 'react-chartjs-2';
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

const Followers_Timeline = () => {


  const options = {
    // indexAxis: 'y',
  }

  const [dota,] = useState({
    labels: UserData.map((data) => data.id),
    datasets: [{
      // label: UserData.map((data) => data.year),
      label: "Years",
      data: UserData.map((data) => data.userGrowth),
      backgroundColor: UserData.map((data) => data.bgc),
      borderColor: 'black',
      borderWidth: '1',
    }]
  });


  return (
    <>
      <div className='card-container '>
        <div className='card p-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
          <div className='text-center py-4' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Followers Timeline</p></div>
          <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "35rem" }}><Line data={dota} options={options} /></div>
        </div>
      </div>
    </>
  )
}

export default Followers_Timeline