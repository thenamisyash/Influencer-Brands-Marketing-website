import axios from 'axios';
import { useEffect } from 'react';
import pic2 from "../img/prof.jpg";
import { createContext } from 'react';
import React, { useState } from 'react'
import AdminDelModal from "./AdminDelModal";
import { baseUrl } from '../PrivateRoutes';

const EmailPass = createContext();
const IdPass = createContext();


const InfluencersAllData = () => {
  const [detail, setDetail] = useState([]);
  const [id, setId] = useState([]);
  const [acc, setAcc] = useState();




  const [passemail, setPassEmail] = useState();
  const [passid, setPassid] = useState();

  useEffect(() => {

    axios.get(`${baseUrl}/api/Influencer/getinfluencerData`)
      .then((res) => {
        setDetail(res.data)
        setAcc(res.data.email);
        setId(res.data._id);
      }).catch((error) =>
        console.log("the y error - ", error));
  }, [detail, acc, id]);

  return (
    <>
      {
        detail.map((data) => {
          const Instah = (email) => {
            console.log(email);
            axios.get(`${baseUrl}/api/Influencer/influencerLinkShow/${email}`)
              .then((resp) => {
                console.log("hehe the resp is - ", resp);
                setAcc(resp.data.Instagram_Link);
                console.log("hehe the resp insta link is - ", resp.data.Instagram_Link);
                window.location.replace(resp.data.Instagram_Link);
              }).catch((error) =>
                console.log("instah error -", error));
          }

          
          const Passit = (email, _id) => {
            setPassEmail(email);
            setPassid(_id);
          }
          return (
            <>
              <section className="main-card--container ">
                <div className='card-container my-2 kard'   >
                  <div className='card' >
                    <div className=" d-flex justify-content-end ">
                      {/* <span className='card-number card-circle subtle mx-2 my-2'>id</span> */}
                      <span className="card-circle  card-number mx-2 my-2" onClick={() => Passit(data.email, data._id)}>

                        <EmailPass.Provider value={passemail}>
                          <IdPass.Provider value={passid}>
                            <AdminDelModal />
                          </IdPass.Provider>
                        </EmailPass.Provider>

                      </span>
                    </div>
                    <div className='card-body'>
                      <div style={{ "minHeight": "5rem", "maxHeight": "10rem" }}> <img src={pic2} alt='images' className='card-media  pikz' style={{ "minWidth": "5rem", "maxWidth": "10rem", "borderRadius": "50%" }} />
                      </div>
                      <p className='card-title    display-6 py-3'>{data.Influencer_username}</p>
                      <p>Instagram followers : {data.followers_count} </p>
                    </div>
                    <div className="d-flex justify-content-around mb-3">
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title={data.Instagram_link} onClick={Instah} style={{ "border": "none", "backgroundColor": "transparent" }}>   <i className="fa-solid fa-user fa-shake fa-lg"></i>  </button></span>
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title={acc} style={{ "border": "none", "backgroundColor": "transparent" }} onClick={() => Instah(data.email)} > <i className="fa-brands fa-instagram fa-shake fa-lg"></i> </button></span>
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title={data.phone} style={{ "border": "none", "backgroundColor": "transparent" }}><a href={`tel: ${data.phone}`}>  <i className="fa-solid fa-phone fa-shake"></i>  </a></button></span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
        })
      }

    </>
  )
}

export default InfluencersAllData
export { EmailPass, IdPass }