import axios from "axios";
import React, { useState } from "react";
import '../Index.css';
import { Base } from "./Auth"
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
const CreateDashboard = () => {
    const [brand, setBrand] = useState("");
    const [corporate, setCorporate] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const navigate = useNavigate();
    const create = () => {
        let data = { brand, corporate, email, contact }
        axios.post(`${Base}api/Brands/createDashboard`, {
            email: data.email,
            Brands_name: data.brand,
            corporate: data.corporate,
            mobileNumber: data.contact,
            background: "background",
            logo: "logo",
        }).then((res) => {
            swal("Created", " ", "success")
            navigate("/threads/signin");
        }).catch((error) => {
            console.log(error)
        })
    }
    const sent = (event) => {
        let back = event.target.files[0];
        console.log(back)
        axios.post(`${Base}api/Image/uploadImage/BrandBackground`, {
            photo: back,
            name: "background",
            username: brand
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    const brandLogo = (e) => {
        let log = e.target.files[0];
        console.log(log)
        axios.post(`${Base}api/Image/uploadImage/BrandBackground`, {
            photo: log,
            name: "logo",
            username: brand
        }, {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
        }).then((res) => {
            // console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <section id="filters">
                <div className="filter-part">
                    <div className="head-filters">
                        <h3>Create Dashboard </h3>
                    </div>
                    <div id="report-form">
                        <div className="fields">
                            <label>Brand</label>
                            <input type="text" className="title" value={brand} onChange={(e) => setBrand(e.target.value)} placeholder="" />
                        </div>
                        <div className="fields">
                            <label> Corporate</label>
                            <input type="text" className="title" value={corporate} onChange={(e) => setCorporate(e.target.value)} placeholder="Corporate" />
                        </div>
                        <div className="fields">
                            <label>Email</label>
                            <input type="email" className="title" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="@yourcompany.com" />
                        </div>
                        <div className="fields">
                            <label> Contact Number</label>
                            <input type="tel" className="title" value={contact} onChange={(e) => setContact(e.target.value)} placeholder="+913564854841" />
                        </div>
                        <div className="fields">
                            <label>Dashboard Image</label>
                            <input type="file" onChange={sent} />
                        </div>
                        <div className="fields">
                            <label>Brand Logo</label>
                            <input type="file" onChange={brandLogo} />
                        </div>
                        <div className="two-btn">
                            {/* <button id="skip" onClick={() => navigate("/threads")}>Skip</button> */}
                            <button id="createe" onClick={create} >Create Dashboard</button>
                        </div>
                    </div>
                </div>
            </section><br />
        </>
    );
}
export default CreateDashboard;