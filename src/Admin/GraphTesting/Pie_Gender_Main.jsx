import React, { useEffect } from 'react'
import { useState } from 'react'
import Pie_gender from './Pie_gender';

import axios from 'axios';
import { baseUrl } from '../PrivateRoutes';


const Pie_Gender_Main = () => {
    const [maleCount, setMaleCount] = useState();
    const [femaleCount, setFemaleCount] = useState();
    const [otherCount , setOtherCount] = useState();

    function CallData() {
        axios.get(`${baseUrl}/api/Admin/genderShow`)
            .then((resp) => {
                //    setPieInfo(resp.data)
                setMaleCount(resp.data.malecount)
                setFemaleCount(resp.data.femalecount)
                setOtherCount(resp.data.otherCount)
                // CallApiData()

            })
            .catch((error) =>
                console.log("the gender show  error - ", error));
    }

    // const CallApiData=()=>{
    //     axios.get(`${baseUrl}/api/Admin/brandsActivity`)
    //         .then((resp) => {
    //             setBarInfo(resp.data)
    //             // setBarLabel(resp.data.name)

    //             console.log("this is bar info", resp.data)
    //             barLabel.length=0
    //             barDatas.length=0
    //             for(let i=0;i<=resp.data.length;i++)
    //             {
    //                 barLabel.push(resp.data[i].name)
    //                 barDatas.push(resp.data[i].count)
    //             }

    //             // console.log(barLabel);
    //         })
    //         .catch((error) =>
    //             console.log("the bar graph error - ", error));
    // }


    useEffect(() => {
        CallData()
    }, [maleCount, femaleCount,otherCount]);




    // piechart_GENDER DISTRIBUTION 
    const PieData = ({
        labels: ['Male', 'Female','Others'],
        datasets: [{
            label: "User Gained",
            // data:UserData.map((data)=>data.year),
            data: [(maleCount), (femaleCount),(otherCount)],
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



    //barchart Brands Affinity
    // const barData = ({
    //     // labels: UserData.map((data) => data.gender),
    //     // labels: barLabel.map((data) => data),



    //     labels: barLabel,

    //     datasets: [{
    //         label: "Brands Affinity Count",
    //         // data: UserData.map((data) => data.userGrowth),

    //         data: barDatas,

    //         backgroundColor: [
    //             "rgba(75,192,192,1",
    //             "#ecf0f1",
    //             "#50AF95",
    //             "#f3ba2f",
    //             "#2a71d0",
    //         ],
    //         borderColor: "black",
    //         borderWidth: 2,
    //     },
    //     ],
    // });




    return (
        <>
            <div className='card-container '>
                <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                    {/* <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Gender Distribution</p></div> */}
                    <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>
                        <Pie_gender chartdata={PieData} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pie_Gender_Main



// hashtag - ${baseUrl}/api/Admin/hashTagShow

// gender -  ${baseUrl}/api/Admin/genderShow

// brands affinity - ${baseUrl}/api/Admin/brandsActivity


//     return (
//         <>
//             <div style={{ "width": "700" }}>
//                 {
//                     maleCount && femaleCount
//                         ?
//                         <Pie_gender chartdata={PieData} />
//                         :
//                         <p>hello</p>
