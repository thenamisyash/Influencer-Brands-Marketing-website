import React from 'react'
import { Pie } from 'react-chartjs-2';



const Pie_gender = ({chartdata}) => {
  return (
    <>
      <Pie data={chartdata}/>
    </>
  )
}

export default Pie_gender