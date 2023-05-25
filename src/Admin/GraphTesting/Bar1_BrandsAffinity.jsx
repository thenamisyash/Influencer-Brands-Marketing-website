import React from 'react'
import {Bar } from 'react-chartjs-2';



const Bar1_BrandsAffinity = ({chartdata}) => {
  return (
    <>
      <Bar data={chartdata}/>
    </>
  )
}

export default Bar1_BrandsAffinity