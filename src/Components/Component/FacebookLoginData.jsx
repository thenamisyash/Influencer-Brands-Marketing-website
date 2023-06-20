import React, { useState } from "react";
import './Bounty.css'
import axios from "axios";
import swal from "sweetalert";
import { Url, redirect } from "./RequireAuth";
import { toast } from 'react-toastify';
import { CirclesWithBar } from 'react-loader-spinner'

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
    const [isLoader, setIsloader] = useState(false);

    const numberverify = () => {
        setIsloader(true)
        console.log(phone)
        let name = localStorage.getItem('Influsername')
        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } else {
            axios.post(`${Url}api/Influencer/sendOtp`, {
                phone: phone,
                name: name
            }).then((res) => {
                setIsloader(false)
                if (res.data == "number is already registered!!") {
                    toast('This Number is Already Verified...', {
                        position: "top-right",
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setVerifyButton(false)
                }
                else {
                    setVerifyButton(true)
                }
            }).catch((err) => {
                setVerifyButton(false)
                console.log(err.message)
            })
        }
    }
    const verifyCode = () => {
        setIsloader(true)
        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } else {
            axios.post(`${Url}api/Influencer/otpVerify`, {
                otp: verify,
                phone: phone
            }).then((res) => {
                // console.log(res.data)
                setIsloader(false)
                swal("Verified", "", "success");
            }).catch((err) => {
                setIsloader(false)
                toast('Enter Correct OTP', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "Dark",
                });
                console.log(err)
            })
        }
    }
    const handleSubmit = () => {
        setIsloader(true)
        let email = localStorage.getItem("userName")
        let userName = localStorage.getItem('Influsername')
        let data = { firstName, lastName, password, rePassword, phone, email, userName, street, city, state, zip, instagram }
        console.log(data);
        if (data.firstName == '') {
            toast.info('Enter First Name', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.lastName == '') {
            toast.info('Enter Last Name', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.password=='') {
            console.log(data.password)
            toast.info('Enter Password', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.rePassword == '') {
            console.log(data.password)
            toast.info('Enter Re-Password', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.password !== data.rePassword) {
            toast.info('Password Not Matched Please Check', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.phone == '') {
            toast.info('Enter Phone Number', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.userName == '') {
            toast.info('Enter Username', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.street == '') {
            toast.info('Enter Address', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.city == '') {
            toast.info('Enter City', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else if (data.state == '') {
            toast.info('Select State', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            setIsloader(false)
        }
        else {
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
                Instagram_link: "none"
            }).then((res) => {
                console.log(res.data)
                redirect()
                swal("Registered", "", "success");
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    return (
        <>
            {
                isLoader
                    ?
                    <>
                        <div className='loaders'>
                            <div className='overlay'>
                            </div>
                            <CirclesWithBar
                                height="100"
                                width="100"
                                color="#f0534e"
                                wrapperClass=""
                                visible={true}
                                outerCircleColor=""
                                innerCircleColor=""
                                barColor=""
                                ariaLabel='circles-with-bar-loading'
                            />
                        </div>
                    </>
                    :
                    null
            }
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
                                {/* <div className="main-info">
                                    <label id="label-info">Instagram </label>
                                    <input type="text" placeholder="" value={instagram} onChange={(e) =>
                                        setInstagram(e.target.value)} />
                                </div> */}
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
