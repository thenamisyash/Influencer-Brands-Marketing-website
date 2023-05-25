// import BarChart from './Comp/BarChart';
import BarChart from '../Chachacha/Comp/BarChart';
import { useState } from 'react';
import UserData from './Comp/Data';

const Appoo=()=> {

  const [userData ,] = useState({
    labels : UserData.map((data)=> data.year) , 
    datasets : [{
      label:"Users Gained",
      data : UserData.map((data)=> data.userGrowth),

    }]
  });


 return(
  <>
    <h1>THIS IS THE CHART PAGE</h1>
    <BarChart chartdata={userData} />
  </>
 );
}

export default Appoo;
// chart.js
// npm i react-chartjs-2