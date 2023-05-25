import axios from 'axios';
// import Menu from '../../comp/Menu';
// import { useNavigate } from "react-router";
// import CountUp from 'react-countup';
// import Card from '../../comp/Card';

import React, { useEffect, useState } from 'react'
import BrandsAllData from '../../comp/BrandsAllData';
import InfluencersAllData from '../../comp/InfluencersAllData';
import { baseUrl } from '../../PrivateRoutes';


const Influ_Brand = () => {
  // const navigate = useNavigate();
  // const [menu] = useState(Menu);
  // const [bno, setBno] = useState();
  // const [ino, setIno] = useState();
  // const [binfo, setBinfo] = useState("");
  const [iinfo, setIifno] = useState("");


  useEffect(() => {
    axios.get(`${baseUrl}/api/Brands/getbrandsData`)
      .then((res) => {
        // console.log(res.data)
        console.log("Get Brands Data Response - ")
      }).catch((error) =>
        console.log("Get Brands Data Error - ", error));
  }, []);

  useEffect(() => {
    axios.get(`${baseUrl}/api/Influencer/getinfluencerData`)
      .then((res) => setIifno(res.data))
      .catch((error) =>
        console.log("the brand error - ", error));
  }, [iinfo]);



  return (
    <>
      <div className='' style={{ "minHeight": "20vh" }}>
        {/* <div>{binfo}</div> */}
        <div>{iinfo}</div>
        <div className="tab-pane  " id="activity">
          <h4 style={{
            "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "2px"
          }}>Brands and Influencers</h4>
          <hr className=" text-muted " />
          <div >
            <div className="container-fluid">
              <div className="row">
                {/* #brands */}
                <div className="col-md-6  col-sm text-center">

                  {/* _________ */}
                  {/* <div className="containerr rounded-5 mb-5 mx-auto">
                    <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                    <span className="num"><CountUp end={bno} /></span>
                    <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>BRANDS JOINED</span>
                  </div> */}
                  {/* _________ */}



                  <span className=" h3  mb-1">BRANDS</span>
                  <h5 className='h5 my-3'> Brands joined</h5>
                  {/* <Card AllData={menu} /> */}
                  <BrandsAllData />
                </div>

                <hr className=" text-muted my-5 d-md-none " />

                {/* #influencers  */}
                <div className="col-md-6 col-sm text-center ">




                  {/* _________ */}
                  {/* <div className="containerr rounded-5 mb-5 mx-auto">
                    <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                    <span className="num"><CountUp end={ino} /></span>
                    <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted" }}>  INFLUENCERS JOINED</span>
                  </div> */}
                  {/* _________ */}



                  <span className=" h3 mb-1">INFLUENCERS</span>
                  <h5 className='h5 my-3'> Influencers joined</h5>


                  {/* <Card AllData={menu} /> */}
                  <InfluencersAllData />




                </div>


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Influ_Brand