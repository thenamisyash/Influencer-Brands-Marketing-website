import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Base } from './Auth';
import { useNavigate } from 'react-router-dom';
const Campaign = () => {
    const [data, setData] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        let at = localStorage.getItem("BrandName");
        axios.post(`${Base}api/Campaign/getFormDetails/Brand`, {
            brand: at
        }).then((res) => {
            // console.log(res.data)
            if (res.data === "YOU HAVEN'T CREATED CAMPAIGN!!...") {
                console.log("no data")
            } else {
                setData(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <>
            <section id='brand-ambassador'>
                <div className='campaign'>
                    <h3>Campaign</h3>
                </div>
                <div className='brands'>
                    {
                        data ?
                            data.map((index, value) => {
                                let camp = index
                                return (
                                    <div className='items ' key={value}>
                                        <img src={camp.media} alt="peoples" />
                                        <p>{camp.nameOfCamp}</p>
                                    </div>
                                )
                            })
                            :
                            <p>No Campaigns Is running</p>
                    }
                </div>
                <div className='explore'>
                    <button className='view' onClick={() => navigate("/threads/campaignList")}>View More</button>
                </div>
            </section>
        </>
    );
}

export default Campaign;