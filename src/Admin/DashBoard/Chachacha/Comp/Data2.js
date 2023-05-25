import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Data2 = () => {

    const [tag,setTag] = useState([]);
    const [count,setCount] = useState([]);

    useEffect(() => {
      axios.get("https://influencer-backend.azurewebsites.net/api/Admin/hashTagShow")
        .then((res) => {
      
        setTag(res.data.tag)
        setCount(res.data.count)
        console.log({"this is tag  array": tag});
        console.log({"this is count array": count});
    })
        .catch((error) =>
          console.log("the brand error - ", error));
    },[tag,count]);




  return (

    
   <>
<h1>yolo</h1>
   </>
  )
}

export default Data2