import axios from "axios";
import React, { useState } from "react";
import '../Index.css';
import { Base } from "./Auth"
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
export const BriefForm = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [hastag, setHashtag] = useState("");
    const [brief, setBrief] = useState("")
    const [followers, setFollowers] = useState()
    const [type, setType] = useState("");
    const [to, setTo] = useState("");
    const [from, setFrom] = useState("");
    const [requirements, setRequirements] = useState("");
    const [prize, setPrize] = useState();
    const [mediaType, setMediaType] = useState("")
    const submit = () => {
        let val = localStorage.getItem("BrandName")
        let data = { name, hastag, val, brief, followers, type, to, from, requirements, prize, mediaType };
        axios.post(`${Base}api/Campaign/compaignFrom/${data.val}`, {
            campaign: data.name,
            hashtag: data.hastag,
            brief: data.brief,
            logo: "logo",
            minFollower: parseInt(data.followers),
            type: data.type,
            from: data.from,
            media: data.mediaType,
            to: data.to,
            special: data.requirements,
            prize: parseInt(data.prize)
        }).then((response) => {
            swal("Your Campagin was created", "", "success")
            navigate("/threads")
        }).catch((error) => {
            console.log(error)
            swal(error.message, "", "success")
        })
    }
    const handleFile = (e) => {
        const files = e.target.files[0];
        console.log(files)
        if (files) {
            axios.post(`${Base}api/Image/uploadImage/logo`, {
                photo: files,
                name: "logo",
                username: name
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                // console.log(res)
            }).catch((error) => {
                console.log(error)
            })
        }
    }
    const handleMedia = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (file.type === "image/jpeg" || file.type === "image/png") {
            axios.post(`${Base}api/Image/uploadImage/logo`, {
                photo: file,
                name: "image",
                username: name
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                // console.log(res)
                setMediaType(res.data.name)
            }).catch((error) => {
                console.log(error)
            })
        }
        else {
            axios.post(`${Base}api/Image/uploadImage/media`, {
                video: file,
                name: "video",
                username: name
            }, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                // console.log(res.data.name)
                setMediaType(res.name)
            }).catch((error) => {
                console.log(error)
            })
        }
    };
    return (
        <>
            <section id="brief">
                <div className="form-elements">
                    <div className="brief-head">
                        <h3>Campaign Brief Form</h3>
                    </div>
                    <div className="brief-input">
                        <label>Name of the Campaign</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="title" placeholder="" required />
                    </div>
                    <div className="brief-input">
                        <label>Hashtag</label>
                        <input type="text" value={hastag} onChange={(e) => setHashtag(e.target.value)} className="title" placeholder="" required />
                    </div>
                    <div className="brief-input">
                        <label>Brief</label>
                        <input type="text" value={brief} onChange={(e) => setBrief(e.target.value)} className="title" placeholder="" required />
                    </div>
                    <div className="brief-inputs">
                        <div className="mini">
                            <label>Minimum Followers</label>
                            <input type="number" value={followers} onChange={(e) => setFollowers(e.target.value)} className="title" placeholder="" required />
                        </div>
                        <div className="mini">
                            <label>Type</label>
                            <select name="Type" id="types" value={type} onChange={(e) => { setType(e.target.value) }} required>
                                <option>--Type--</option>
                                <option>Barter</option>
                                <option>Paid</option>
                                <option>Brand Ambassador Program</option>
                                <option>Giveaways</option>
                                <option>Social Media Takeover</option>
                            </select>
                        </div>
                    </div>
                    <div className="calenders">
                        <div className="left-calender">
                            <label>From</label>
                            <input type="date" value={from} onChange={(e) => setFrom(e.target.value)} className="datepicker" required />
                        </div>
                        <div className="left-calender">
                            <label>To</label>
                            <input type="date" value={to} onChange={(e) => setTo(e.target.value)} className="datepicker" required />
                        </div>
                    </div>
                    <div className="brief-input">
                        <label>Logo</label>
                        <input type="file" onChange={handleFile} />
                    </div>
                    <div className="brief-input">
                        <label>Special Requirements</label>
                        <input type="" value={requirements} onChange={(e) => setRequirements(e.target.value)} className="title" placeholder="" required />
                    </div>
                    <div className="brief-input">
                        <label>Brand Campaign Image/Video</label>
                        <input type="file" onChange={handleMedia} required />
                    </div>
                    <div className="brief-input">
                        <label>Prize</label>
                        <input type="number " placeholder="Prize" value={prize} onChange={(e) => setPrize(e.target.value)} required />
                    </div>
                    <div className="two-btns">
                        {/* <button id="brief-reset">Reset</button> */}
                        <button id="brief-submit" onClick={submit}>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}