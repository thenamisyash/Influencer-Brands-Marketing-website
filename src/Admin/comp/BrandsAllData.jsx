import React from 'react'
import axios from 'axios';

import { useState } from "react";
import { useEffect } from 'react';
import pic2 from "../img/prof.jpg";
import { createContext } from 'react';
import { Link } from 'react-router-dom';
import AdminDelModal2 from './AdminDelModal2';
import { baseUrl } from '../PrivateRoutes';


const IdPass = createContext();


const BrandsAllData = () => {
  const [detail, setDetail] = useState([]);
  const [insta, setInsta] = useState();
  const [passid, setPassid] = useState();
  const [id, setId] = useState([]);
  const linkk = "https://www.instagram.com/puma/";


  useEffect(() => {
    axios.get(`${baseUrl}/api/Brands/getbrandsData`)
      // .then((res) => setDetail(res.data))
      .then((res) => {
        setDetail(res.data);
        setId(res.data._id);
        setInsta(res.data.Brands_name);
        // console.log("the y data - ", res.data);
      })
      .catch((error) =>
        console.log("the y error - ", error));
  }, [detail, id, insta]);



  return (
    <>
      {

        detail.map((data) => {
          const Passit = (_idd) => {
            setPassid(_idd);
            console.log("huhu this is the ID that i want to pass - ", _idd);
            console.log("this is the passid - ", passid);
          }

          return (
            <>
              <section className="main-card--container ">
                <div className='card-container my-2 kard'   >
                  <div className='card' >
                    <div className=" d-flex justify-content-end ">
                      {/* <span className='card-number card-circle subtle mx-2 my-2'>id</span> */}
                      <span className="card-circle  card-number mx-2 my-2" onClick={() => Passit(data._id)}>
                        <IdPass.Provider value={passid}>
                          <AdminDelModal2 />
                        </IdPass.Provider>
                      </span>
                    </div>
                    <div className='card-body'>
                      <div style={{ "minHeight": "5rem", "maxHeight": "10rem" }}> <img src={pic2} alt='images' className='card-media  pikz' style={{ "minWidth": "5rem", "maxWidth": "10rem", "borderRadius": "50%" }} />
                      </div>
                      <h2 className='card-title display-6 py-3'>{data.Brands_name}</h2>
                      <p>email : {data.email}</p>
                    </div>
                    <div className="d-flex justify-content-around mb-3">
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title='Direct to Id Page ' style={{ "border": "none", "backgroundColor": "transparent" }}>  <Link to={data.Instagram_link} target='_blank'><i class="fa-solid fa-user fa-shake fa-lg"></i></Link></button></span>
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title='Direct to Insta Page ' style={{ "border": "none", "backgroundColor": "transparent" }}> <Link to={linkk} target='_blank'><i class="fa-brands fa-instagram fa-shake fa-lg"></i></Link>  </button></span>
                      <span className='card-tag card-circle subtle'><button data-toggle="tooltip" data-placement="right" title={data.phone} style={{ "border": "none", "backgroundColor": "transparent" }}>  <a href={`tel: ${data.phone}`}>    <i class="fa-solid fa-phone fa-shake"></i>    </a> </button></span>
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

export default BrandsAllData
export { IdPass }