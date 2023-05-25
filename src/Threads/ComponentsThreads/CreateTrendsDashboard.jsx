import axios from "axios";
import React, { useState } from "react";
import { Base } from "./Auth";
import { useNavigate } from "react-router-dom";
export const Trends = () => {
    const navigate = useNavigate()
    const [brand, setBrand] = useState("");
    const [hastagCap, setHastagCap] = useState("");
    const [date, setDate] = useState('');
    const [nextDate, setNextDate] = useState('');
    const [metric, setMetric] = useState('')
    const [location, setLocation] = useState('');
    const [grun, setGrun] = useState('');
    const [interest, setInterest] = useState('')
    const [selectedValue, setSelectedValue] = useState('')
    const create = () => {
        let data = { brand, hastagCap, date, nextDate, metric, location, grun, interest, selectedValue }
        axios.post(`${Base}api/Campaign/createTrendDashboard`, {
            brandname: data.brand,
            hashtag: data.hastagCap,
            from: data.date,
            to: data.nextDate,
            metric: data.metric,
            Location: data.location,
            Grnularity: data.grun,
            Sponsered: data.selectedValue,
            interest: data.interest
        }).then((res) => {
            console.log(res)
            navigate("/threads")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <section id="filters">
                <div className="filter-part">
                    <div className="head-filters">
                        <h3>Create Trends Dashboard </h3>
                    </div>
                    <div id="report-form">
                        <div className="fields">
                            <label>Brand</label>
                            <input type="text" className="title" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="" />
                        </div>
                        <div className="fields">
                            <label> Hashtag & Caption</label>
                            <input type="text" className="title" value={hastagCap} onChange={(e) => setHastagCap(e.target.value)} placeholder="India" />
                        </div>
                        <div className="calender">
                            <div className="left-calender">
                                <label>From </label>
                                <input type="date" id="datecd" value={date} onChange={(e) => { setDate(e.target.value) }} required />
                            </div>
                            <div className="left-calender" id="right-calender">
                                <label>To </label>
                                <input type="date" id="datedb" value={nextDate} onChange={(e) => { setNextDate(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="fields">
                            <label>Metric</label>
                            <input type="text" className="title" value={metric} onChange={(e) => setMetric(e.target.value)} placeholder="select metric" />
                        </div>
                        <div className="fields">
                            <label> Location</label>
                            <input type="text" className="title" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="India" />
                        </div>
                        <div className="sortby">
                            <label> Grunlarity </label>
                            <select name="Type" id="grun" value={grun} onChange={(e) => { setGrun(e.target.value) }} required>
                                <option>--Type--</option>
                                <option>month</option>
                                <option>week</option>
                                <option>day</option>
                            </select>
                        </div>
                        <div className="fields">
                            <label>Interest</label>
                            <input type="text" className="title" value={interest} onChange={(e) => setInterest(e.target.value)} />
                        </div>
                        <div className="sponsored">
                            <label>Sponsored</label>
                            <div className="sponserod-radio">
                                <input
                                    type="radio"
                                    id="option1"
                                    name="options"
                                    value={true}
                                    onChange={() => setSelectedValue(true)}
                                />
                                <label htmlFor="option1">Only Show Sponsored</label>
                            </div>
                        </div>
                        <div className="two-btn">
                            <button id="createe" onClick={create} >Create</button>
                        </div>
                    </div>
                </div>
            </section><br />
        </>
    )
}