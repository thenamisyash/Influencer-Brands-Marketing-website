import axios from 'axios';
// import Card from '../../comp/Card';
import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
// import Menu from '../../comp/Menu';
import { useNavigate } from "react-router";
import BrandsAllData from '../../comp/BrandsAllData';
import InfluencersAllData from '../../comp/InfluencersAllData';
import { baseUrl } from '../../PrivateRoutes';


const Activity = () => {
  const navigate = useNavigate();
  // const [menu] = useState(Menu);
  const [bno, setBno] = useState();
  const [ino, setIno] = useState();
  const [detail, setDetail] = useState([]);
  // const [hno, setHno] = useState();

  // const [Blength, setBlength] = useState();



  // useEffect(() => {
  //   axios.get(`${baseUrl}/api/Brands/getbrandsDataCount`)
  //     .then((res) => {
  //       setBno(res.data)
  //       console.log("Get Brands Data Count Response")
  //     })
  //     .catch((error) =>
  //       console.log("Get Brands Data Count Error -  ", error));
  // }, [bno]);

  // useEffect(() => {
  //   // influencer data count
  //   axios.get(`${baseUrl}/api/Influencer/getInfluencerDataCount`)
  //     .then((res) => {
  //       setIno(res.data)
  //       console.log("Get Influencer Data Count Response - ")
  //     })
  //     .catch((error) =>
  //       console.log("Get Influencer Data Count Error -", error));
  //   // brands data count
  //   // axios.get(`${baseUrl}/api/Influencer/getInfluencerDataCount`)
  //   // .then((res) => setHno(res.data))
  //   // .catch((error) =>
  //   //   console.log("the hashtag error - ", error));
  // }, [ino]);

  useEffect(() => {
    axios.get(`${baseUrl}/api/Brands/getbrandsData`)
      .then((res) => {
        setDetail(res.data)
        setBno(Object.keys(res.data).length);
        console.log("Getting Brands Data Response - ")
        // console.log("the y data - ", res.data);
      })
      .catch((error) =>
        console.log("Getting Brands Data Error - ", error));


    axios.get(`${baseUrl}/api/Influencer/getinfluencerData`)
      .then((res) => {
        setDetail(res.data)
        setIno(Object.keys(res.data).length);
        console.log("Getting Brands Data Response - ")
        // console.log("the y data - ", res.data);
      })
      .catch((error) =>
        console.log("Getting Brands Data Error - ", error));

  }, [setDetail, setBno, setIno]);


  return (
    <>

      <div className="tab-pane  " id="activity">
        <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "2px" }}>ACTIVITIES</h4>
        <hr className=" text-muted " />
        <div >

          <div className="container-fluid">
            <div className="row">
              {/* #Brands Countdown*/}
              <div className="col-md-6  col-sm text-center">
                <div className="containerr rounded-5 mb-5 mx-auto">
                  <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                  <span className="num"><CountUp end={bno} /></span>
                  <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>BRANDS JOINED</span>
                </div>

                {/* Brands all data section */}
                <section>
                  <span className=" h3  mb-1">BRANDS</span>
                  <h5 className='h5 my-3'>Top 10 Brands on Trending</h5>
                  {/* <Card AllData={menu} /> */}
                  <BrandsAllData />
                  <button onClick={() => { navigate("/AdminPanel/admin/dashboard/all") }} className="btn  btn-block btn-lg  gradient-custom-4 bg-info text-body my-2 butt" style={{ "paddingTop": "0.7rem", "backgroundColor": "green" }} type="submit"  > <span className="text-white">Show More ➡</span></button>
                </section>


              </div>

              <hr className=" text-muted my-5 d-md-none " />

              {/* #Influencers Countdown */}
              <div className="col-md-6 col-sm text-center ">
                <div className="containerr rounded-5 mb-5 mx-auto">
                  <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                  <span className="num"><CountUp end={ino} /></span>
                  <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>  INFLUENCERS JOINED</span>
                </div>



                {/* INfluencers all data section */}
                <section>
                  <span className=" h3 mb-1">INFLUENCERS</span>
                  <h5 className='h5 my-3'>Top 10 Influencers on Trending</h5>
                  {/* <Card AllData={menu} /> */}
                  <InfluencersAllData />
                  <button onClick={() => { navigate("/AdminPanel/admin/dashboard/all") }} className="btn  btn-block btn-lg  gradient-custom-4 bg-info text-body my-2 butt" style={{ "paddingTop": "0.7rem", "backgroundColor": "green" }} type="submit"  > <span className="text-white">Show More ➡</span></button>
                </section>
              </div>
            </div>

            <hr className=" text-muted my-5 " />



            {/* #hashtag */}
            {/* <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-sm text-center ">
                <div className="containerr rounded-5 mb-5 mx-auto">
                  <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                  <span className="num"><CountUp end={hno} /></span>
                  <span className="num"><CountUp end={2000} /></span>
                  <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted" }}><span>#</span> Tags Used yet</span>
                </div>
                <span className=" h3 mb-1"><span>#</span>Tags</span>
                <h5 className='h5 my-3'>Top 10 # Tags on Trending</h5>
                <Card AllData={menu} />
                <button className="btn  btn-block btn-lg  gradient-custom-4 bg-info text-body my-2 butt" style={{ "paddingTop": "0.7rem", "backgroundColor": "green" }} type="submit"  > <span className="text-white">Show More ➡</span></button>
              </div>
            </div> */}



          </div>
        </div>
      </div >
    </>
  );
}

export default Activity;
