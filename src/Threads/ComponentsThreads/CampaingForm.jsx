import React, { useEffect, useState } from "react";
import '../Index.css'
import axios from "axios";
import { Base } from "./Auth";
import { useNavigate } from "react-router-dom";
export const ListOfCampagin = () => {
    const [data, setData] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        let at = localStorage.getItem("BrandName");
        axios.post(`${Base}api/Campaign/getFormDetails/Brand`, {
            brand: at
        }).then((res) => {
            // console.log(res.data)
            if (res.data === "YOU HAVEN'T CREATED CAMPAIGN!!...") {
                console.log("nodata")
            } else {
                setData(res.data)
            }
        }).catch((err) => {
            console.log(err)
        })
    }, [])

    const campName = (name) => {
        navigate('/threads/approve', { state: { id: name } })
    }


    return (
        <>
            <section id="listofCampaign">
                <div className="container-fluid">
                    <div className="list-campaign">
                        <h2>Campagin's List</h2>
                    </div>
                    <div className="row">
                        {
                            data ?
                                data.map((index, value) => {
                                    let camp = index;
                                    return (
                                        <div className="col-md-4 display" key={value} onClick={() => campName(camp.nameOfCamp)}>
                                            <div className="imageOfCamp">
                                                <img src={camp.media} alt="imgofCamp" width="300px" height="200px" />
                                            </div>
                                            <div className="campDetail">
                                                <p>{camp.nameOfCamp}</p>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                <div className="nocampaign">
                                    <p>No Campagin is Running</p>
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}