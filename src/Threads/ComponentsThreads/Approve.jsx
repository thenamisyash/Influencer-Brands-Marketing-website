import React, { useEffect, useState } from "react";
import Yash from "../../Components/imgs/thenameisyash.jpg";
import "../Index.css";
import { Base } from "./Auth";
import axios from "axios";
import swal from "sweetalert";
import { useLocation } from "react-router-dom";

export const Approve = () => {
    const [user, setUser] = useState();
    const searchparams = useLocation();
    const [complete, setComplete] = useState()
    useEffect(() => {
        axios.get(`${Base}api/Brands/applyShow/${searchparams.state.id}`)
            .then((res) => {
                // console.log(res.data)    
                setUser(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [])

    const approveId = (email, campName, userName) => {
        axios.post(`${Base}api/Brands/approveService`, {
            isActive: "yes",
            email: email,
            name: campName
        }).then((res) => {
            // console.log(res.data)
            interraction(userName, campName)
        }).catch((err) => {
            console.log(err)
        })
    }

    const disApprove = (email, campName) => {
        axios.post(`${Base}api/Brands/approveService`, {
            isActive: "no",
            email: email,
            name: campName
        }).then((res) => {
            swal("Disapproved", "", "success");
        }).catch((err) => {
            console.log(err)
        })
    }

    const interraction = (name, campnames) => {
        let brand = localStorage.getItem("BrandName");
        axios.post(`${Base}api/Campaign/Intection`, {
            brandname: brand,
            influencername: name,
            type: "unsponcerd",
            name: campnames
        }).then((res) => {
            swal("Approve", "", "success")
        }).catch((err) => {
            console.log(err)
        })
    }

    const check = () => {
        axios.get(`${Base}api/Brands/approveShow/${searchparams.state.id}`)
            .then((res) => {
                // console.log(res.data)
                setComplete(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }

    const completeCampaign = (name) => {
        let campName = searchparams.state.id
        axios.post(`${Base}api/Campaign/completeInterection`, {
            influencer: name,
            camp : campName
        }).then((res) => {
            // console.log(res.data)
            swal("Complete" , "" , "success")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <section id="approve-page">
                <div className="container">
                    <div className="row whole">
                        <div className="approve-head">
                            <h2>Approve Form </h2>
                        </div>
                        {
                            (user) ?
                                user.map((index, value) => {
                                    const Influencer = index;
                                    return (
                                        <div className="col-md-6 detail" key={value}>
                                            <div className="approve-img">
                                                <img src={Yash} alt="imgsss" />
                                            </div>
                                            <div className="approve-detail">
                                                <span>Influencer Name :  {Influencer.instaUsername}</span>
                                                <span>Followers-Count:   {Influencer.followers}</span>
                                                <span>Following-Count: {Influencer.following}</span>
                                                <span>Username: {Influencer.name}</span>
                                            </div>
                                            <div className="approve-btns">
                                                <button id="approve" onClick={() => approveId(Influencer.email, Influencer.Campname
                                                    , Influencer.name)}>Approve</button>
                                                <button id="disapprove" onClick={() => disApprove(Influencer.email, Influencer.Campname)}>Disapprove</button>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                </div>
            </section>
            <br /><br />
            <section id="completed-camps">
                <div className="container">
                    <div className="row completer">
                        <div className="complete-head">
                            <h2>Complete Campaign</h2>
                        </div>
                        <div className='button-complete d-flex justify-content-center'>
                            <div className='explore'>
                                <button className='view' onClick={check}>View Complete Campagin</button>
                            </div>
                        </div>
                        {
                            (complete) ?
                                complete.map((index, value) => {
                                    let done = index;
                                    return (
                                        <div className="col-md-6 complete-form" key={value}>
                                            <div className="complete-img">
                                                <img src={Yash} alt="Completed" />
                                            </div>
                                            <div className="complete-details">
                                                <span>Influencer Name :  {done.instaUsername}</span>
                                                <span>Followers-Count :  {done.followers}</span>
                                                <span>Following-Count :  {done.following}</span>
                                                <span>Username :  {done.name}</span>
                                            </div>
                                            <div className="complete-button">
                                                <button onClick={() => completeCampaign(done.name)}>Complete </button>
                                            </div>
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
