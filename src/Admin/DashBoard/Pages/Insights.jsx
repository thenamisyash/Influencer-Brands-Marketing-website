import axios from 'axios';
// ________________________________________________________________________________________________________________________________________________________________________

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Bar } from 'react-chartjs-2';
import { baseUrl } from '../../PrivateRoutes';
import Pie_Gender_Main from '../../GraphTesting/Pie_Gender_Main';


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

const label = [];
const data = [];



const Insight = () => {
    // const [menu] = useState(Menu);
    const navigate = useNavigate();
    const go = () => {
        navigate("/admin/dashboard/");
    }




    // __________GRAPH1-(Audiance_Interest_Distribution )__________________________________

    const [barInfo, setBarInfo] = useState()
    const [barLabel, setBarLabel] = useState([]);
    const [barDatas, setBarDatas] = useState([])


    //3. horizonatal bar setting
    const options = {
        indexAxis: 'y',
    }

    //4. bar graph settings chartjs
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


    // 1.Api  calling 
    const CallApiData = () => {
        axios.get(`${baseUrl}/api/Admin/hashTagShow`)
            .then((response1) => {
                setBarInfo(response1.data)
                // setBarLabel(resp.data.name)
                // console.log("this is bar info", resp.data)
                barLabel.length = 0
                barDatas.length = 0
                for (let i = 0; i <= response1.data.length; i++) {
                    barLabel.push(response1.data[i].name)
                    barDatas.push(response1.data[i].count)
                }

                // CallApiData1();


                // console.log(barLabel);
            })
            .catch((error) => { console.log("the bar graph HashTagShow error - ", error) });
    }


    //2.Use Effect
    useEffect(() => {

        const timer = setTimeout(() => {
            CallApiData()

        }, 1000);
        const timer2 = setTimeout(() => {
            CallApiData1()

        }, 2000);
        const timer3 = setTimeout(() => {
            CallApiData2()
        }, 3000);

        // const timer4 = setTimeout(() => {
        //     CallApiData2()
        // }, 4000);

        return () => clearTimeout(timer, timer2, timer3);
    }, [
    ]);



    // ____________________________________________________________________________________




    // __________GRAPH2-(Audiance_Influencers_Affinity )__________________________________

    const [barInfo1, setBarInfo1] = useState()
    const [barLabel1, setBarLabel1] = useState([]);
    const [barDatas1, setBarDatas1] = useState([])

    //1.Api calling
    const CallApiData1 = () => {
        label.length = 0;
        data.length = 0
        axios.get(`${baseUrl}/api/Admin/influencersActivity`)
            .then((response2) => {
                // console.log(response2)
                setBarInfo1(response2.data)
                // setBarLabel(response2.data.name)
                // console.log("this is bar info", response2.data)

                barLabel1.length = 0
                barDatas1.length = 0
                {
                    for (let i = 0; (i <= response2.data.length); i++) {
                        barLabel1.push(response2.data[i].name)
                        barDatas1.push(response2.data[i].count)
                    }

                } 

                // console.log('data',label,data)
                // console.log(barLabel);
            })
            .catch((error) =>
                console.log("the influencers activity graph error - ", error));
    }

    // 2.useeffect 
    // useEffect(() => {
    //     CallApiData1()
    // }, [barLabel1, barDatas1, setBarInfo1, data, label])

    // 3.bar chartjs graph setting 
    const barData1 = ({

        labels: barLabel1,

        datasets: [{
            label: "Influencers Affinity Count",
            data: barDatas1,

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


    // ____________________________________________________________________________________


    // __________GRAPH3-(Audiance_Brand_Affinity )__________________________________

    const [barInfo3, setBarInfo3] = useState()
    const [barLabel3, setBarLabel3] = useState([]);
    const [barDatas3, setBarDatas3] = useState([])
    //1.api calling
    const CallApiData2 = () => {
        axios.get(`${baseUrl}/api/Admin/brandsActivity`)
            .then((response3) => {
                setBarInfo3(response3.data)
                // setBarLabel(response3.data.name)
                // console.log("this is bar info", response3.data)
                // console.log(barLabel);

                barLabel3.length = 0
                barDatas3.length = 0
                for (let i = 0; i <= response3.data.length; i++) {
                    barLabel3.push(response3.data[i].name)
                    barDatas3.push(response3.data[i].count)
                }

            })
            .catch((error) =>
                console.log("the bar  brands affinity graph error - ", error));
    }

    //   2.useEffect 
    // useEffect(() => {
    //     CallApiData2()
    //     // }, [barLabel,barDatas,setBarInfo]);
    // }, [barLabel3, barDatas3]);

    // 3.bar chartjs graph setting 
    const barData2 = ({

        labels: barLabel3,

        datasets: [{
            label: "Brands Affinity Count",
            data: barDatas3,

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
    // ____________________________________________________________________________________




    return (
        <>

            <div className="tab-pane " id="acc_setting">
                <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>Insights</h4>
                <hr className=" text-muted " />



                <div className='ard' style={{ "minheight": "100vh" }}>
                    <div className="container-fluid">
                        <div className="row">


                            {/* _______________________________gender____________________________________________________________________________ */}
                            <div className="col-md-12  col-sm text-center ">

                                <div className='col-md-12  d-flex justify-content-space-between'>
                                    <div className='col-md-12 d-flex justify-content-around'>

                                        <div className='card-container '>
                                            <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                                                <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Gender Distribution</p></div>
                                              
                                                <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>

                                                    <Pie_Gender_Main />


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ______________________________AudianceInterestDistribution_____________________________________________________________________________ */}
                            <hr className='muted p-2' />

                            <div className="col-md-12  col-sm text-center ">
                                {/* <div className='col-md-12 d-flex justify-content-around'>  <Audiance_Interest_Distribution /> </div> */}
                                <div className='col-md-12 d-flex justify-content-around'>

                                    {/* ______________                            */}
                                    <div className='card-container '>
                                        <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                                            <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Audiance Interest Distribution</p></div>
                                         
                                            <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>


                                                <Bar data={barData} options={options} />


                                            </div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                            {/* _______________________________InfluencersAffinity____________________________________________________________________________ */}
                            <hr className='muted p-2' />

                            <div className="col-md-12  col-sm text-center ">
                                {/* <div className='col-md-12 d-flex justify-content-around'>    <Audiance_Influencers_Affinity chartdata={barData1} /></div> */}
                                <div className='col-md-12 d-flex justify-content-around'>

                                    {/* ________________________________                 */}
                                    <div className='card-container '>
                                        <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                                            <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Influencers Affinity</p></div>
                                            
                                            <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem" }}>
                                                <Bar data={barData1} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ________________________________brandAffinity___________________________________________________________________________ */}
                            <hr className='muted p-2' />

                            <div className="col-md-12  col-sm text-center ">
                                {/* <div className='col-md-12 d-flex justify-content-around'><Audiance_Brand_Affinity /></div> */}
                                <div className='col-md-12 d-flex justify-content-around'>

                                    <div className='card-container '>
                                        <div className='card py-5' style={{ "backgroundColor": "transparent", "border": "none" }}>
                                            <div className='text-center ' style={{ "Padding": "", }}><p className=' text-decoration-underline' style={{ "fontSize": "1.7rem", "textUnderlineOffset": "0.2em", "textDecorationThickness": "5px" }}>Brands Affinity</p></div>
                                          
                                            <div className='d-flex justify-content-around text-center m-auto w-sm-25' style={{ "maxWidth": "25rem"}}>
                                                <Bar data={barData2} />
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Insight;

// import { useNavigate } from 'react-router';

// import Audiance_Brand_Affinity from '../../comp/Graph/Audiance_Brand_Affinity';
// import Audiance_Interest_Distribution from '../../comp/Graph/Audiance_Interest_Distribution ';
// import Pie_Gender_Main from '../../GraphTesting/Pie_Gender_Main';
// import Audiance_Influencers_Affinity from '../../comp/Graph/Audiance_Influencers_Affinity';


// const Insight = () => {
//     // const [menu] = useState(Menu);
//     const navigate = useNavigate();
//     const go = () => {
//         navigate("/AdminPanel/admin/dashboard/");
//     }

// // __________GRAPH1-(Audiance_Interest_Distribution )__________________________________














//     return (
//         <>

//             <div className="tab-pane " id="acc_setting">
//                 <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>Insights</h4>
//                 <hr className=" text-muted " />



//                 <div className='ard' style={{ "minheight": "100vh" }}>
//                     <div className="container-fluid">
//                         <div className="row">
                          

//                             {/* _______________________________gender____________________________________________________________________________ */}
//                             <div className="col-md-12  col-sm text-center ">

//                                 <div className='col-md-12  d-flex justify-content-space-between'>
//                                     <div className='col-md-12 d-flex justify-content-around'><Pie_Gender_Main /></div>
//                                 </div>
//                             </div>

//                             {/* ______________________________AudianceInterestDistribution_____________________________________________________________________________ */}
//                             <hr className='muted p-2' />

//                             <div className="col-md-12  col-sm text-center ">
//                                 <div className='col-md-12 d-flex justify-content-around'>  <Audiance_Interest_Distribution /> </div>
//                             </div>

//                             {/* _______________________________InfluencersAffinity____________________________________________________________________________ */}
//                             <hr className='muted p-2' />               

//                             <div className="col-md-12  col-sm text-center ">
//                                 <div className='col-md-12 d-flex justify-content-around'><Audiance_Influencers_Affinity /></div>
//                             </div>
                            
//                             {/* ________________________________brandAffinity___________________________________________________________________________ */}
//                             <hr className='muted p-2' />

//                             <div className="col-md-12  col-sm text-center ">
//                                 <div className='col-md-12 d-flex justify-content-around'><Audiance_Brand_Affinity /></div>
//                             </div>


//                         </div>

//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Insight;


