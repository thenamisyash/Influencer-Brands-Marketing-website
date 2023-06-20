import React from 'react'
import axios from 'axios';

import { useState } from "react";
import { useEffect } from 'react';
import pic2 from "../img/prof.jpg";
import { createContext } from 'react';
import SupAdminDelModal from './SupAdminDelModal';
import { baseUrl } from '../PrivateRoutes';

// import { Link } from 'react-router-dom';

const IdPass = createContext();
const NamePass = createContext();


const AdminAllData = () => {
    const [detail, setDetail] = useState([]);
    const [insta, setInsta] = useState();
    const [passid, setPassid] = useState();
    const [passname,setPassName] = useState()
    const [id, setId] = useState([]);
    const [name,setName] = useState([])
    const linkk = "https://www.instagram.com/puma/";


    useEffect(() => {
        axios.get(`${baseUrl}/api/Admin/getAdminData`)
            // .then((res) => setDetail(res.data))
            .then((res) => {
                setDetail(res.data);
                setId(res.data._id);
                setName(res.data.admin_name);
                setInsta(res.data.Brands_name);
                // console.log("the adminALLdata  - ", res.data);


            })
            .catch((error) =>
                console.log("the y error - ", error));
    }, [detail,id,insta]);



    return (
        <>
            {

                detail.map((data) => {
                    const Passit = (_idd,naym) => {
                         setPassid(_idd);
                         setPassName(naym);
                        {/* console.log("huwaa hiuwaa this is the ID that i want to pass  from admin - ", _idd); */}
                        {/* console.log("this is the passid - ", passid); */}
                    }
                    return (
                        <>
                            <section className="main-card--container ">
                                <div className='card-container my-2 kard'   >
                                    <div className='card' >

                                        {/* <div className=" d-flex justify-content-end ">
                                            <span className='card-number card-circle subtle mx-2 my-2'>id</span>
                                        </div> */}

                                        <div className='card-body'>
                                            <div style={{ "minHeight": "5rem", "maxHeight": "10rem" }}> <img src={pic2} alt='images' className='card-media my-4  pikz' style={{ "minWidth": "5rem", "maxWidth": "10rem", "borderRadius": "50%" }} />
                                            </div>
                                            <h2 className='card-title display-6 py-3'>{data.admin_name }</h2>
                                            <p>email : {data.email}</p>
                                        </div>
                                        <span className=" mx-2 my-2" onClick={() => Passit(data._id ,data.admin_name)}>
                                            <button className="btn  btn-block btn-lg   gradient-custom-4 bg-danger text-body my-2 butt" style={{ "paddingTop": "0.7rem", "backgroundColor": "green" }}   > <span className="text-white">
                                                <IdPass.Provider value={passid}>
                                                <NamePass.Provider value={passname}>
                                                    <SupAdminDelModal />
                                                </NamePass.Provider>
                                                </IdPass.Provider>
                                            </span></button>
                                        </span>
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

export default AdminAllData
export { IdPass , NamePass }