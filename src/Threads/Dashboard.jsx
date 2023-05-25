import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BrandAmbassador from "./ComponentsThreads/BrandAmbassador";
import Campaign from "./ComponentsThreads/Campaign";
import Fans from "./ComponentsThreads/Fans";
import Pepsi from './Images/pepsi.svg';
import './Index.css';
import axios from "axios";
import { Base } from "./ComponentsThreads/Auth";
import Ranbir from "./Images/black&white.jpg"
import Lays from "./Images/Lays Logo.png"
const ThreadsDashboard = () => {
    const navigate = useNavigate();
    const [img, setImage] = useState("")
    const [link, setLink] = useState('')
    const send = () => {
        navigate("/threads/briefForm")
    }
    useEffect(() => {
        dashbords()
        linkshow()
    }, [])
    const linkshow = () => {
        let at = localStorage.getItem('email')
        axios.get(`${Base}api/Brands/brandsLinkShow/${at}`)
            .then((res) => {
                // console.log(res.data)
                setLink(res.data)
            }).catch((err) => {
                // console.log(err)
            })
    }
    const dashbords = () => {
        let at = localStorage.getItem("BrandName");
        axios.post(`${Base}api/Brands/dashboard`, {
            brandname: at,
            value: "false"
        }).then((res) => {
            // console.log(res.data)
            setImage(res.data)
        }).catch((err) => {
            // console.log(err)
        })
    }
    const sent = () => {
        if (link) {
            let website = link.website_Link
            window.open(website, "_blank")
        }
    }
    return (
        <>
            <main id="dashboard">
                <div className="main-part">
                    <div className="image">
                        {
                            img ?
                                <img src={img.backImage} alt="Brand" width="100%" />
                                :
                                <img src={Ranbir} alt="Brand" width="100%" />
                        }
                    </div>
                </div>
                <div className="section">
                    <div className="tags">
                        {
                            link ?
                                <>
                                    <a href={link.Facebook_Link}> <ion-icon className="icon" name="logo-facebook"></ion-icon></a>
                                    <a href={link.Twitter_Link}> <ion-icon className="icon" name="logo-twitter"></ion-icon></a>
                                    <a href={link.Instagram_Link}> <ion-icon className="icon" name="logo-instagram"></ion-icon></a>
                                </>
                                :
                                <>
                                    <ion-icon className="icon" name="logo-facebook"></ion-icon>
                                    <ion-icon className="icon" name="logo-twitter"></ion-icon>
                                    <ion-icon className="icon" name="logo-instagram"></ion-icon>
                                </>

                        }

                        {
                            img ?
                                <img src={img.logo} alt="pepsi" width="50px" height="30px" onClick={sent} />
                                :
                                <img src={Pepsi} alt="pepsi" width="50px" height="30px" />
                        }
                    </div>
                    <div className='imgs'>
                        {
                            img ?
                                <img src={img.logo} alt='Logo' />
                                :
                                <img src={Lays} alt='Logo' />
                        }
                    </div>
                    <div className="create">
                        <button onClick={send}>Create Campaign</button>
                        <ion-icon className="icon" name="search-outline"></ion-icon>
                    </div>
                </div>
            </main>
            <Campaign />
            <BrandAmbassador />
            <Fans />
        </>
    )
}
export default ThreadsDashboard;