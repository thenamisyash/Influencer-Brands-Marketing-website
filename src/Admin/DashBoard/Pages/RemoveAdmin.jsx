import React from 'react'
import CountUp from 'react-countup';
import axios from 'axios';
import { useEffect, useState } from 'react';

import AdminAllData from '../../comp/AdminAllData';

import { baseUrl } from '../../PrivateRoutes'; 









const RemoveAdmin = () => {

    const [bno, setBno] = useState();





    useEffect(() => {
        axios.get(`${baseUrl}/api/Admin/getAdminData`)
            .then((res) => {
                setBno((Object.keys(res.data).length-1));
                console.log("Getting Brands Data Response - ")
                // console.log("the y data - ", res.data);
            })
            .catch((error) =>
                console.log("Getting Brands Data Error - ", error));
            }, [bno]);


    return (
        <>
            <div className="tab-pane  " id="removeAdmin">
                <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "2px" }}>Remove Admin</h4>
                <hr className=" text-muted " />
                <div >
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6  col-sm text-center">
                                <div className="containerr rounded-5 mb-5 mx-auto">
                                    <i className="fa-sharp fa-solid fa-face-sunglasses"></i>
                                    <span className="num"><CountUp end={bno} /></span>
                                    <span className="text h3" style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>ADMIN JOINED</span>
                                </div>
                                <span className=" h3  mb-1">BRANDS</span>
                                <h5 className='h5 my-3'>Top 10 Brands on Trending</h5>
                                <AdminAllData />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemoveAdmin