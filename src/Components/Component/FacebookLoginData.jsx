import React, { useState } from "react";
import './Bounty.css'
import axios from "axios";
import swal from "sweetalert";
import { Url, redirect } from "./RequireAuth";
export const InformationFacebook = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("")
    const [verifyButton, setVerifyButton] = useState(false);
    const [verify, setVerify] = useState("")
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [instagram, setInstagram] = useState("")
    const numberverify = () => {
        console.log(phone)
        let name = localStorage.getItem('Influsername')
        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } else {
            axios.post(`${Url}api/Influencer/sendOtp`, {
                phone: phone,
                name: name
            }).then((res) => {
                setVerifyButton(true)
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }
    const verifyCode = () => {
        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } else {
            axios.post(`${Url}api/Influencer/otpVerify`, {
                otp: verify,
                phone: phone
            }).then((res) => {
                // console.log(res.data)
                swal("Verified", "", "success");
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    const handleSubmit = () => {
        let email = localStorage.getItem("userName")
        let userName = localStorage.getItem('Influsername')
        let data = { firstName, lastName, password, rePassword, phone, email, userName, street, city, state, zip, instagram }
        console.log(data);
        axios.post(`${Url}api/Influencer/influencerRegister`, {
            Influencer_username: data.userName,
            Influencer_Firstname: data.firstName,
            Influencer_Lastname: data.lastName,
            email: data.email,
            phone: data.phone,
            Street_Address: data.street,
            city: data.city,
            State: data.state,
            postal_code: data.zip,
            password: data.password,
            repassword: data.rePassword,
            Instagram_link: data.instagram
        }).then((res) => {
            console.log(res.data)
            redirect()
            swal("Registered", "", "success");
        }).catch((err) => {
            console.log(err)
        })
    }
    return (
        <>
            <section id="information-sec">
                <div className="container d-flex justify-content-center">
                    <div className="row">
                        <div className="col-12" id="main-info-sec">
                            <div className="information-head">
                                <h2>Required Info</h2>
                            </div>
                            <div className="main-inn">
                                <div className="main-infor">
                                    <label id="label-info">Name</label>
                                    <div className="first-second">
                                        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="FirstName" />
                                        <input type="text" placeholder="LastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="main-info">
                                    <label id="label-info">Phone Number</label>
                                    <input type="tel" placeholder="Contact Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                                    <button id="verification" onClick={numberverify}>OTP</button>
                                </div>
                                {
                                    verifyButton &&
                                    <div className='main-info'>
                                        <label id="label-info">Otp*</label>
                                        <input type="number" value={verify} onChange={(e) => { setVerify(e.target.value) }}
                                            className='number' name='number' />
                                        <button id='verification' onClick={verifyCode}> Verify</button>
                                    </div>
                                }
                                <div className='main-address'>
                                    <label id="label-info">Address*</label>
                                    <input type="text" value={street} onChange={(e) => { setStreet(e.target.value) }} className='address' name='address' placeholder='Street Address' />
                                    <div className='main-add'>
                                        <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} className='city' name='city' placeholder='City' />
                                        <select className="state" name="country-state" value={state} onChange={(e) => { setState(e.target.value) }} >
                                            <option value="">--Select state--</option>
                                            <option value="AN">Andaman and Nicobar Islands</option>
                                            <option value="AP">Andhra Pradesh</option>
                                            <option value="AR">Arunachal Pradesh</option>
                                            <option value="AS">Assam</option>
                                            <option value="BR">Bihar</option>
                                            <option value="CH">Chandigarh</option>
                                            <option value="CT">Chhattisgarh</option>
                                            <option value="DN">Dadra and Nagar Haveli</option>
                                            <option value="DD">Daman and Diu</option>
                                            <option value="DL">Delhi</option>
                                            <option value="GA">Goa</option>
                                            <option value="GJ">Gujarat</option>
                                            <option value="HR">Haryana</option>
                                            <option value="HP">Himachal Pradesh</option>
                                            <option value="JK">Jammu and Kashmir</option>
                                            <option value="JH">Jharkhand</option>
                                            <option value="KA">Karnataka</option>
                                            <option value="KL">Kerala</option>
                                            <option value="LA">Ladakh</option>
                                            <option value="LD">Lakshadweep</option>
                                            <option value="MP">Madhya Pradesh</option>
                                            <option value="MH">Maharashtra</option>
                                            <option value="MN">Manipur</option>
                                            <option value="ML">Meghalaya</option>
                                            <option value="MZ">Mizoram</option>
                                            <option value="NL">Nagaland</option>
                                            <option value="OR">Odisha</option>
                                            <option value="PY">Puducherry</option>
                                            <option value="PB">Punjab</option>
                                            <option value="RJ">Rajasthan</option>
                                            <option value="SK">Sikkim</option>
                                            <option value="TN">Tamil Nadu</option>
                                            <option value="TG">Telangana</option>
                                            <option value="TR">Tripura</option>
                                            <option value="UP">Uttar Pradesh</option>
                                            <option value="UT">Uttarakhand</option>
                                            <option value="WB">West Bengal</option>
                                        </select>
                                    </div>
                                    <input type="text" value={zip} onChange={(e) => { setZip(e.target.value) }} className='zip' name='zip' placeholder='Zip / postal code' />
                                </div>
                                <div className="main-info">
                                    <label id="label-info">Password</label>
                                    <input type="password" placeholder="Password" value={password} onChange={(e) =>
                                        setPassword(e.target.value)} />
                                </div>
                                <div className="main-info">
                                    <label id="label-info">Confirm Password</label>
                                    <input type="password" placeholder="Password" value={rePassword} onChange={(e) =>
                                        setRePassword(e.target.value)} />
                                </div>
                                <div className="main-info">
                                    <label id="label-info">Instagram </label>
                                    <input type="text" placeholder="" value={instagram} onChange={(e) =>
                                        setInstagram(e.target.value)} />
                                </div>
                            </div>
                            <div className="submitButton">
                                <button onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
