import axios from 'axios';
import { useState } from 'react'
import React, { useEffect } from 'react'
import Bar3_Hashtags from '../../GraphTesting/Bar3_Hashtags';
import { baseUrl } from '../../PrivateRoutes';

import Bar2_InfluencersAffinity from '../../GraphTesting/Bar2_InfluencersAffinity';


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

const label=[];
const data=[];

const Audiance_Influencers_Affinity = () => {


  // const [pieInfo, setPieInfo] = useState()
  // const [fetched, setFetched] = useState(false)
  // const [maleCount, setMaleCount] = useState();
  // const [femaleCount, setFemaleCount] = useState();

  const [barInfo, setBarInfo] = useState()
  const [barLabel, setBarLabel] = useState([]);
  const [barDatas, setBarDatas] = useState([])


  // #influencers activity api to be integrated
  const CallApiData = () => {
    label.length=0;
    data.length=0
    axios.get(`${baseUrl}/api/Admin/influencersActivity`)
      .then((resp) => {
        // console.log(resp)
        setBarInfo(resp.data)
        // setBarLabel(resp.data.name)

        console.log("this is bar info", resp.data)
        barLabel.length = 0
        barDatas.length = 0
        for (let i = 0; i <= resp.data.length; i++) {
          barLabel.push(resp.data[i].name)
          barDatas.push(resp.data[i].count)
        }

        // console.log('data',label,data)
        // console.log(barLabel);
      })
      .catch((error) =>
        console.log("the bar graph error - ", error));
  }


  // _________2________________
  useEffect(() => {
    CallApiData()
  }, [barLabel, barDatas, setBarInfo,data,label])




  // _________3________________

  //barchart Brands Affinity
  const barData = ({

    labels: barLabel,

    datasets: [{
      label: "Influencers Affinity Count",
      data: barDatas,

      backgroundColor: [
        "rgba(75,192,192,1",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    },
    ],
  })


  return (
    <>
      <div className='card-container '>
        <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
          <div className='text-center '><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Audiance Influencers Affinity</p></div>


          <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>

            {(barLabel && barDatas)
              ?

              <Bar2_InfluencersAffinity chartdata={barData} />

              :
              <h1>Wait</h1>
            }




          </div>
        </div>
      </div>

    </>
  )
}

export default Audiance_Influencers_Affinity


