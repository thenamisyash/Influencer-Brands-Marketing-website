import React, { useEffect, useState } from "react";
import './Bounty.css'
import axios from "axios";
export const BrandsLogo = () => {
    const [brandData, setBrandData] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8081/api/Campaign/getFormDetail")
            .then((res) => {
                // console.log(res.data.campaingn)
                setBrandData(res.data.campaingn);
            }).catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <section className="brand-logos">
                <div className="container-fluid">
                    <div className="row line">
                        <div className="col-12 brandss">
                            Brands
                        </div>
                    </div>
                    <div className="row brand-lists">
                        {
                            brandData ?
                                brandData.map((index, value) => {
                                    let data = index.logo;
                                    return (
                                        <div className="col-6" key={value}>
                                            <iframe
                                                title="My iframe"
                                                src={data}
                                                width="200"
                                                height="100"
                                                scrolling="no"
                                                style={{ border: 'none' }}
                                            ></iframe>
                                        </div>
                                    )
                                })
                                :
                                null
                        }
                        {/* <div className="col-6">
                            <img src="" alt="data" />
                        </div> */}
                    </div>
                </div>
            </section>
        </>
    )
}