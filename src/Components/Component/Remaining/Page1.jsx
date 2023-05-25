import React, { useEffect, useState } from "react";
import Pic3 from './img/fb.png';
import Pic4 from './img/insta.png';
import axios from "axios";
import swal from "sweetalert";
import './index.css'
import { Carousel } from "react-bootstrap";
import { Url } from "../RequireAuth"
function Page1(props) {
    const [message, setMessage] = useState([])
    if (props.data) {
        // console.log(props.data)
    }
    useEffect(() => {
        setMessage(props.data)
    }, [message, props.data])


    const at = localStorage.getItem("userName");
    const apply = (camp, hashs) => {
        axios.post(`${Url}api/Influencer/applyService`, {
            isActive: true,
            email: at,
            name: camp
        }).then((res) => {
            // console.log(res)
            if (res.data === "YOU HAVE ALREADY APPLIED FOR THIS CAMPAIGN!...") {
                swal("You have Already Applied", "", "Warning");
            } else {
                storeHashtag(hashs)
            }
        }).catch((err) => {
            console.log(err)
        })
    }
    const storeHashtag = (hashs) => {
        console.log(at, hashs)
        if (hashs) {
            axios.post(`${Url}api/Influencer/storeHashTag`, {
                Influencer_username: at,
                hastag: hashs
            }).then((res) => {
                // console.log(res)
                swal("You have applied for this Campaign", "", "success");
            }).catch((err) => {
                console.log(err)
            })
        }
    }




    return (
        <>
            {
                (Array.isArray(message)) ?
                    <Carousel slide={false} className="campaign-carousel">
                        {
                            message.map((index, value) => {
                                const data = index
                                let isoDate1 = data.to;
                                let dateObj = new Date(isoDate1)
                                let options = { year: 'numeric', month: 'long', day: 'numeric' };
                                let readable = dateObj.toLocaleDateString('en-US', options)
                                return (
                                    <Carousel.Item key={value}>
                                        <div className="mainm">
                                            <div className="lays-logo">
                                                <img src={data.logo} className="B_logo" alt="lays" />
                                                <img src={data.media} className="B_desc" alt="lays2" />
                                            </div>
                                            <h1 className=" hash">{data.hashtag}</h1>
                                            <div className="social">
                                                <img src={Pic3} className="fb" alt="fb" />
                                                <img src={Pic4} className="fb" alt="insta" />
                                                <span className="s1" >FAQ</span>
                                                <span className="s2" onClick={() => apply(data.nameOfCamp, data.hashtag)}>APPLY</span>
                                            </div>
                                            <div className="paraM">
                                                <p className="para">{data.brief}</p>
                                                <p className="para">Barter Deal valid till {readable}  </p>
                                            </div>
                                            <div className="prize">
                                                <button>PRIZE : {data.prize}</button>
                                            </div>
                                            <br />
                                        </div>
                                    </Carousel.Item>
                                )
                            })
                        }

                    </Carousel>
                    : (message === "YOU HAVEN'T CREATED CAMPAIGN!!...") ?
                        <div className="selection">
                            <p>
                                Brand hasn't posted any Campagin
                            </p>
                        </div>
                        : (message === undefined) &&
                        <div className="selection">
                            <p>
                                Please select the brand first
                            </p>
                        </div>
            }
        </>);
}
export default Page1;