import React, { useState, useEffect } from "react";
import axios from "axios";
import './Bounty.css';

const ShowData = () => {
    const [data, setData] = useState('');
    const getData = () => {
        let at = localStorage.getItem('Instagram-Short');
        axios.get(`https://graph.instagram.com/me/media?fields=media_url&access_token=${at}`)
            .then((res) => {
                setData(res.data.data);
            }).catch((err) => {
                console.log("err", err);
            })
    }

    useEffect(() => {
        if (localStorage.getItem('Instagram-Short')) {
            getData()
        }
    }, []);

    return (
        <>
            <div className="all-data">
                <h5>Uploaded Data</h5>
                <div className="data-show">
                    {
                        data
                            ?
                            data.map((index, value) => {
                                const insta = index.media_url;
                                if (insta.includes("jpg") || insta.includes('png')) {
                                    return (
                                        <div className="photos">
                                            <img src={insta} style={{ width: "400px", height: "300px" }} />
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <video controls="controls" preload="none" onclick="this.play()" style={{ width: "400px", height: "300px" }}>
                                            <source type="video/mp4" src={insta}></source>
                                        </video>
                                    )
                                }

                            })
                            :
                            null
                    }
                </div>
            </div>
        </>
    );
}

export default ShowData;