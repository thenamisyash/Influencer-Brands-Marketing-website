import React, { useState, useEffect } from "react";
import axios from "axios";
import './Bounty.css';
const ShowData = () => {
    const [data, setData] = useState('');
    useEffect(() => {
        if (localStorage.getItem('Instagram-Short')) {
            getData()
        }
    }, []);
    const getData = () => {
        let at = localStorage.getItem('Instagram-Short');
        axios.get(`https://graph.instagram.com/me/media?fields=media_url&access_token=${at}`)
            .then((res) => {
                setData(res.data.data);
            }).catch((err) => {
                console.log("err", err);
            })
    }
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
                                return (
                                    <div className="photos">
                                        <iframe
                                            title="My iframe"
                                            src={insta}
                                            width="400"
                                            key={value}
                                            height="300"
                                            scrolling="no"
                                            style={{ border: 'none' }}
                                        ></iframe>
                                    </div>
                                )
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