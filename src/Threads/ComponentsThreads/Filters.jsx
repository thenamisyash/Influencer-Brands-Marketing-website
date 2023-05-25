import React, { useState } from "react";
import '../Index.css';
import axios from "axios";
import { Base } from "./Auth";
import Offcanvas from 'react-bootstrap/Offcanvas';
const Filters = () => {
    const [brand, setBrand] = useState("")
    const [location, setLocation] = useState('')
    const [hash, setHash] = useState("")
    const [from, setFrom] = useState("")
    const [to, setTo] = useState("")
    const [selectedValue, setSelectedValue] = useState("");
    const [intrest, setIntrest] = useState("")
    const [data, setData] = useState("")
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const search = () => {
        let data = { brand, location, hash, from, to, selectedValue, intrest }
        axios.post(`${Base}api/Campaign/contentFilter`, {
            brand: data.brand,
            loc: data.location,
            hash: data.hash,
            from: data.from,
            to: data.to,
            sponcered: data.selectedValue,
            interest: data.intrest
        }).then((res) => {
            console.log(res)
            setData(res.data)
            handleShow()
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <section id="filters">
                <div className="filter-part">
                    <div className="head-filters">
                        <h3>Content Filters </h3>
                    </div>
                    <div id="report-form">
                        <div className="field-brand">
                            <label>Brands</label>
                            <input type="text" className="title" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="" />
                        </div>

                        <div className="field-brand">
                            <label> Location </label>
                            <input type="text" className="title" value={location} onChange={(e) => setLocation(e.target.value)}
                                placeholder="India" />
                        </div>
                        <div className="field-brand">
                            <label> Hashtag or Caption </label>
                            <input type="text" className="title" value={hash} onChange={(e) => setHash(e.target.value)} placeholder="eg. 
                             #ootd or gardenbtytheday" />
                        </div>

                        <div className="calender">
                            <div className="left-calender">
                                <label>From</label>
                                <input type="date" className="datepicker" value={from} onChange={(e) => setFrom(e.target.value)} required />
                            </div>
                            <div className="left-calender">
                                <label>To</label>
                                <input type="date" className="datepicker" value={to} onChange={(e) => setTo(e.target.value)} required />
                            </div>
                        </div>
                        <div className="sponsored">
                            <label>Sponsored</label>
                            <div className="sponserod-radio">
                                <input
                                    type="radio"
                                    id="sponse"
                                    name="options"
                                    value={true}
                                    onChange={() => setSelectedValue(true)}
                                />
                                <span>Only Show Sponsored Content</span>
                            </div>
                        </div>
                        <div className="field-brand">
                            <label> Intrests </label>
                            <input type="text" className="title" value={intrest} onChange={(e) => setIntrest(e.target.value)}
                                placeholder="Eg. Skateboard or Ice Cream" />
                        </div>
                        <div className="two-btn">
                            <button id="reset" >Reset</button>
                            <button id="search" onClick={search}  >Search</button>
                        </div>
                    </div>
                </div>
            </section>
            <section id="filter-result">
                {
                    data ?
                        <div className="table">
                            <Offcanvas show={show} onHide={handleClose} backdrop="static">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Brand</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <div className="container filter-list">
                                        <span>Brand Name : {data.Brands_name}</span>
                                        <span>Hastag     : {data.Hastag}</span>
                                        <span>State      : {data.State}</span>
                                        <span>Interest   : {data.interest}</span>
                                        <span>Grnularity : {data.Grnularity}</span>
                                    </div>

                                </Offcanvas.Body>
                            </Offcanvas>
                        </div>
                        :
                        <p>No Data</p>
                }
            </section>

        </>
    );
}
export default Filters;
