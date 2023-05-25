import React, { useEffect } from 'react'
import { useState } from 'react';


import UserData from '../../DashBoard/Chachacha/Comp/Data';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend,
} from 'chart.js'
import axios from 'axios';

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, //y
  Tooltip,
  Legend
)



const Audience_Gender_Distribution = () => {

  // const [userData ,] = useState({
  //   labels : UserData.map((data)=> data.year) , 
  //   datasets : [{
  //     label:"Users Gained",
  //     data : UserData.map((data)=> data.userGrowth),

  //   }]
  // });

  // const data ={
  //     labels: ['Mon', 'Tues', 'Wed', 'Fri'],
  //     datasets: [
  //         {
  //         label: '389',
  //         data:[2],
  //         backgroundColor:'aqua',
  //         borderColor:'black',
  //         borderWidth:'1',
  //     },{
  //         label: '549',
  //         data:[7],
  //         backgroundColor:'yellow',
  //         borderColor:'black',
  //         borderWidth:'1',
  //     }


  // ]
  // }


  const [iinfo, setIifno] = useState();
  const [bcount, setBcount] = useState();
  const [gcount, setGcount] = useState();

  useEffect(() => {
    axios.get("https://influencer-backend.azurewebsites.net/api/Admin/genderShow")
      .then((res) => {
        setIifno(res.data)
        setBcount(res.data.malecount)
        setGcount(res.data.femalecount)
        // console.log({"this is boys count": bcount});
        // console.log({"this is girls count": gcount});
      })
      .catch((error) =>
        console.log("the brand error - ", error));
        
  }, [bcount, gcount, iinfo]);






  const options = {
    // indexAxis: 'y',
  }
  //  const [dota,setDota] = useState({
  //     //  labels: UserData.map((data) => data.gender),

  //     labels: [("Male"),("Female")],
  //      datasets: [{
  //          // label: UserData.map((data) => data.year),
  //          label: "Percentage - ",
  //         //  data: UserData.map((data) => data.userGrowth),
  //          data: [
  //          (`${bcount}`),(`${gcount}`)
  //         //  (30),(70)
  //          ],

  //         //  backgroundColor: UserData.map((data) => data.bgc),
  //          borderColor: 'black',
  //          borderWidth: '1',
  //      }]
  //  });



  const [dota, setDota] = useState({
    //  labels: UserData.map((data) => data.gender),

    labels: [("Male"), ("Female")],
    datasets: [{
      // label: UserData.map((data) => data.year),
      label: "Percentage - ",
      //  data: UserData.map((data) => data.userGrowth),
      data: [(bcount), (gcount)],


      //  backgroundColor: UserData.map((data) => data.bgc),
      borderColor: 'black',
      borderWidth: '1',
    }]
  });




  return (
    <>
      <div className='card-container '>
        <div className='card p-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
          <div className='text-center'><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Audience Gender Distribution</p>  </div>

          <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>
            {/* {console.log("data",dota)} */}

            {
            bcount && gcount
            ?
            <Pie data={dota} options={options} />
            :
           <h1>Wait</h1>
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default Audience_Gender_Distribution




