import React from 'react'
import {Bar } from 'react-chartjs-2';



const Bar3_Hashtags = ({chartdata,options}) => {
    // const options = {
    //     indexAxis: 'y',
    // }
  return (
    <>
   

      <Bar data={chartdata} options={options}/>
   
    </>
  )
}

export default Bar3_Hashtags