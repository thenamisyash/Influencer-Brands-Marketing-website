// import React from 'react'
// import UserData from '../../DashBoard/Chachacha/Comp/Data';
// import { useState } from 'react';
// import {
//     Chart as ChartJS,
//     BarElement,
//     CategoryScale,
//     LinearScale, //y
//     Tooltip,
//     Legend,
// } from 'chart.js'

// import { Bar } from 'react-chartjs-2';
// import { useEffect } from 'react';
// import axios from 'axios';

// ChartJS.register(
//     BarElement,
//     CategoryScale,
//     LinearScale, //y
//     Tooltip,
//     Legend
// )



import axios from 'axios';
import { useState } from 'react'
import React, { useEffect } from 'react'
import Bar3_Hashtags from '../../GraphTesting/Bar3_Hashtags';
import { baseUrl } from '../../PrivateRoutes';



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


const Audiance_Interest_Distribution = () => {
    // const config = {
    //     type: 'bar',dota,
    //     options: {
    //       indexAxis: 'y',
    //     }
    //   };

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



    // const [tag,setTag] = useState([]);
    // const [count,setCount] = useState([]);

    // useEffect(() => {
    //   axios.get("https://influencer-backend.azurewebsites.net/api/Admin/hashTagShow")
    //     .then((res) => {

    //     setTag(res.data.tag)
    //     setCount(res.data.count)
    //     console.log({"this is tag  array": tag});
    //     console.log({"this is count array": count});
    // })
    //     .catch((error) =>
    //       console.log("the brand error - ", error));
    // },[tag,count]);


    const [barInfo, setBarInfo] = useState()
    const [barLabel, setBarLabel] = useState([])
    const [barDatas, setBarDatas] = useState([])
    // _______1_______//

    const CallApiData = () => {
        axios.get(`${baseUrl}/api/Admin/hashTagShow`)
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
                console.log("the bar graph HashTag error - ", error));
    }
    // _______2_______//

    useEffect(() => {
        CallApiData()
        // }, [barLabel,barDatas,setBarInfo]);
    }, [barLabel, barDatas]);
    // _______3_______//

    const options = {
        indexAxis: 'y',
    }
    // _______4_______//

    //barchart Brands Affinity
    const barData = ({

        labels: barLabel,
        // labels: ["ramya","sneha","deeksha","ananya",   "vaishak","vinayak","libin","roshan","bruno"],

        datasets: [{
            label: "Audiance Interest Distribution",
            // labelColor:"white",
            data: barDatas,
            // data: [10,78,90,82     ,   75,38,93,84,93],

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
    // _______5_______//


    // __________________________________1________________________________________________//
    // ###1
    // const [dota,setDota] = useState({
    //     // labels: `${tag}`.map((data) => data.tag),
    //     // labels: [
    //     //     ("#Fashion"),
    //     //     ("#Live events"),
    //     //     ("#Travel"),
    //     //     ("#Hair"),
    //     //     ("#Music"),
    //     //     ("#Vehicle"),
    //     // ],
    //     datasets: [{
    //         // label: UserData.map((data) => data.year),
    //         label: "Years",
    //         // data: `${count}`.map((data) => data.count),
    //         // data: [(75),(43),(37),(12),(64),(73)],
    //         backgroundColor: UserData.map((data) => data.bgc),
    //         // backgroundColor: "aqua",
    //         borderColor: 'black',
    //         borderWidth: '1',
    //     }]
    // });

    // _____________________________________________________________________________________//


    // ____________________________________2_______________________________________________//


    // ____________________________________2_______________________________________________//

    return (
        <>
            <div className='card-container '>
                <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                    <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Audiance Interest Distribution</p></div>
                    <div className='d-flex justify-content-around text-center m-auto  w-sm-25' style={{ "maxWidth": "30rem" }}>
                     
                        {
                        barLabel && barDatas
                        ?
                        <Bar3_Hashtags chartdata={barData} options={options} />
                        
                        :
                        <h1>Wait</h1>
                        }                   
                    </div>
                </div>
            </div>
        </>
    )
}

export default Audiance_Interest_Distribution  