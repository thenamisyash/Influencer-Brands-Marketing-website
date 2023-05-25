import React, { useEffect } from 'react'
import { useState } from 'react'
import Bar1_BrandsAffinity from '../../GraphTesting/Bar1_BrandsAffinity';

import axios from 'axios';
// import { baseUrl } from '../PrivateRoutes';
import { baseUrl } from '../../PrivateRoutes';



const Audiance_Brand_Affinity = () => {


  // const [pieInfo, setPieInfo] = useState()
  // const [fetched, setFetched] = useState(false)
  // const [maleCount, setMaleCount] = useState();
  // const [femaleCount, setFemaleCount] = useState();

  const [barInfo, setBarInfo] = useState()
  const [barLabel, setBarLabel] = useState([]);
  const [barDatas, setBarDatas] = useState([])



  const CallApiData = () => {
    axios.get(`${baseUrl}/api/Admin/brandsActivity`)
      .then((resp) => {
        setBarInfo(resp.data)
        // setBarLabel(resp.data.name)

        console.log("this is bar info", resp.data)
        barLabel.length = 0
        barDatas.length = 0
        for (let i = 0; i <= resp.data.length; i++) {
          barLabel.push(resp.data[i].name)
          barDatas.push(resp.data[i].count)
        }

        // console.log(barLabel);
      })
      .catch((error) =>
        console.log("the bar  brands affinity graph error - ", error));
  }

  // 

  // __________________________//
  // const [userData ,] = useState({
  //     labels : UserData.map((data)=> data.year) , 
  //     datasets : [{
  //       label:"Users Gained",
  //       data : UserData.map((data)=> data.userGrowth),

  //     }]
  //   });
  // __________________________//


  useEffect(() => {
    CallApiData()
    // }, [barLabel,barDatas,setBarInfo]);
  }, [barLabel, barDatas]);


  //barchart Brands Affinity
  const barData = ({

    labels: barLabel,

    datasets: [{
      label: "Brands Affinity Count",
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
  });


  return (
    <>

      <div className='card-container '>
        <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
          <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Audiance Brand Affinity</p></div>
          <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>

            {
              barLabel && barDatas ?

                <Bar1_BrandsAffinity chartdata={barData} />

                :
                <h1>Wait</h1>
            }


          </div>
        </div>
      </div>
    </>
  )
}

export default Audiance_Brand_Affinity


