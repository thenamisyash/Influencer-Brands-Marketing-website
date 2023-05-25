import React, { useState } from 'react'
import Black from '../imgs/customise-removebg-preview.png';
import './Bounty.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { authentication } from '../firebase.config';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Url } from './RequireAuth';
import swal from 'sweetalert';
function SignUp() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const [verify, setVerify] = useState("");
    const [verifyButton, setVerifyButton] = useState(false);
    const numberverify = () => {
        console.log(phone)
        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } else {
            axios.post(`${Url}api/Influencer/sendOtp`, {
                phone: phone,
                name: userName
            }).then((res) => {
                // console.log(res.data)
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
                phone : phone
            }).then((res) => {
                swal("Verified","", "success")
            }).catch((err) => {
                console.log(err)
            })
        }
    }
    const userSubmit = () => {
        // console.log({ userName, firstName, lastName, email, street, city, state, zip, password, rePassword, phone, instagram });
        let data = { userName, firstName, lastName, email, street, city, state, zip, password, rePassword, phone, instagram };
        axios.post(`${Url}api/Influencer/influencerRegister`, {
            Influencer_username: data.userName,
            Influencer_Firstname: data.firstName,
            Influencer_Lastname: data.lastName,
            email: data.email.toLowerCase(),
            Street_Address: data.street,
            city: data.city,
            State: data.state,
            postal_code: data.zip,
            password: data.password,
            repassword: data.rePassword,
            phone: data.phone,
            Instagram_link: data.instagram
        })
            .then((res) => {
                // console.log('res', res);
                navigate('/Influencer/loginBounty', { replace: true });
            }).catch((error) => {
                // console.log("error", error);
                alert("the password is not matching");
            })
    }
    return (
        <>
            <main className='signup'>
                <div className='signup-page'>
                    <div id='header'>
                        <img src={Black} alt="black" />
                        <h2> Application Form</h2>
                    </div>
                    <div id="recaptcha-container"></div>
                    <div className='form'>
                        <div className='some'>
                            <label className="user">Username*</label>
                            <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} className='username' name='username' />
                        </div>
                        <div className='some' >
                            <label className='user'> Name*</label>
                            <div className='first'>
                                <input type="text" value={firstName} onChange={(e) => { setFirstName(e.target.value) }} className='firstname' name='user' placeholder='First' />
                                <input type="text" value={lastName} onChange={(e) => { setLastName(e.target.value) }} className='lastname' name='user' placeholder='Last' />
                            </div>
                        </div>
                        <div className='some'>
                            <label className="user">Email*</label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className='email' name='email' />
                        </div>

                        <div className='some'>
                            <label className="user">Address*</label>
                            <input type="text" value={street} onChange={(e) => { setStreet(e.target.value) }} className='address' name='address' placeholder='Street Address' />
                            <div className='both'>
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
                        <div className='some'>
                            <label className="user">Password*</label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className='password' name='password' />
                        </div>

                        <div className='some'>
                            <label className="user">Re-Password*</label>
                            <input type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} className='re-password' name='re-password' />
                        </div>
                        <div className='some'>
                            <label className="user">Phone*</label>
                            <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} className='number' name='number' />
                            <button id='verifier' onClick={numberverify}>Otp</button>
                        </div>
                        {verifyButton &&
                            <div className='some'>
                                <label className="user">Otp*</label>
                                <input type="number" value={verify} onChange={(e) => { setVerify(e.target.value) }} className='number' name='number' />
                                <button id='verify' onClick={verifyCode}> Verify</button>
                            </div>
                        }
                        <div className='some'>
                            <label className='user'> Instagram Link*</label>
                            <input type='text' value={instagram} onChange={(e) => { setInstagram(e.target.value) }} className='link' name='link' placeholder='Instagram' />
                        </div><br />
                        <div className='buttons' >
                            {/* <button id='btn' >FAQ <ion-icon name="chevron-down-outline"></ion-icon></button> */}
                            <div id='recaptcha-container' />
                            <button id='btn-2' onClick={userSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SignUp;