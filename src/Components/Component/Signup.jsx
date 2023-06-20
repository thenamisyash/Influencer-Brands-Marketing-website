import React, { useState } from 'react'
import Black from '../imgs/customise-removebg-preview.png';
import './Bounty.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { authentication } from '../firebase.config';
// import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { Url } from './RequireAuth';
import swal from 'sweetalert';
import { toast } from 'react-toastify';
import { CirclesWithBar } from 'react-loader-spinner'

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


    const [isLoader, setIsloader] = useState(false);


    
    const numberverify = () => {
        console.log(phone.length)
        console.log(zip.length)

            if ((zip.length) === 6) {

                if ((phone.length) === 10) {

                    if (!phone) {
                        swal("Enter Contact Number", "", "Warning")
                    } else {
                        setIsloader(true)
                        axios.post(`${Url}api/Influencer/sendOtp`, {
                            phone: phone,
                            name: userName
                        }).then((res) => {
                            setIsloader(false)
                            console.log('send', res.data)
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
                            setIsloader(false)
                            alert("There was some error please try again later")
                            console.log(err.message)
                        })
                    }

                } else {
                    toast.info('Enter 10 digits Mobile Number', {
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
                }  //phone else code ends

            } else {
                toast.info('Enter 6 digits Zip Code', {
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

            }   //zip code else ends

     



    }
    const verifyCode = () => {

        if (!phone) {
            swal("Enter Contact Number", "", "Warning")
        } 
        else if((verify.length !== 5)){
            toast.info('Otp Is 5 digits.', {
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
            setIsloader(true)
            console.log("hello")
            axios.post(`${Url}api/Influencer/otpVerify`, {
                otp: verify,
                phone: phone
            }).then((res) => {
                setIsloader(false)
                swal("Verified", "", "success")
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
    const userSubmit = () => {
        setIsloader(true)
        // console.log({ userName, firstName, lastName, email, street, city, state, zip, password, rePassword, phone, instagram });
        let data = { userName, firstName, lastName, email, street, city, state, zip, password, rePassword, phone, instagram };
        if (data.userName == '') {
            toast.info('Enter User Name', {
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
        } else if (data.firstName == '') {
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
        else if (data.email == '') {
            toast.info('Enter Email Name', {
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
        else if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(data.email) === false) {
            toast.info('Enter Valid Email Address', {
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
        } else if (data.zip == '') {
            toast.info('Use 6 digits for Zip', {
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
        } else if (data.state == '') {
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


        // ____________________________________________________________________________________________________________________________________


        else if (data.password == '') {
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


        // 2 
        else if ((data.password.length) <= 8) {
            toast.info('Password Length should be atleast 8 characters.', {
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
        else if ((data.password.search(/[0-9]/) == -1)) {
            toast.info('Password should contain atleast single number.', {
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
        else if ((data.password.search(/[A-Z]/) == -1)) {
            toast.info('Password should contain atleast single capital alphabet.', {
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
        else if ((data.password.search(/[a-z]/) == -1)) {
            toast.info('Password should contain atleast single small alphabet.', {
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
        else if (data.password.search(/[!\@\#\$\%\^\&\*\(\)\_\-]/) == -1) {
            toast.info('Password should contain atleast single special character.', {
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


        // ____________________________________________________________________________________________________________________________________




        else if (data.rePassword == '') {
            toast.info('Enter Re-password', {
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
            toast.info('Password Not Matched...', {
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
            toast.info('Enter Mobile Number', {
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
            console.log(data)
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
                Instagram_link: "none"
            })
                .then((res) => {
                    // console.log('res', res);
                    setIsloader(false)
                    navigate('/Influencer/loginBounty', { replace: true });
                }).catch((error) => {
                    // console.log("error", error);
                    setIsloader(false)
                    toast.error('This Account already Resgister With Us.', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "Dark",
                    });
                    // alert("the password is not matching");
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
            <main className='signup'>
                <div className='signup-page'>
                    <div id='header'>
                        <img src={Black} alt="black" />
                        <h2> Application Form</h2>
                    </div>
                    <div id="recaptcha-container"></div>
                    <div id='form'>
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
                            <input type="text" maxLength="6" minLength="6" value={zip} onChange={(e) => { setZip(e.target.value) }} className='zip' name='zip' placeholder='Zip / postal code' />
                        </div>
                        <div className='some'>
                            <label className="user">Password*</label>
                            <input type="password" maxLength="20" minLength="8" value={password} onChange={(e) => { setPassword(e.target.value) }} className='password' name='password' />
                        </div>

                        <div className='some'>
                            <label className="user">Re-Password*</label>
                            <input type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} className='re-password' name='re-password' />
                        </div>
                        <div className='some'>
                            <label className="user">Phone*</label>

                            <input type="tel" value={phone} maxLength='10' minLength='10' onChange={(e) => { setPhone(e.target.value) }} className='number' name='number' />

                            <button id='verifier' onClick={numberverify}>Otp</button>
                        </div>
                        {verifyButton &&
                            <div className='some'>
                                <label className="user">Otp*</label>
                                <input type="number" value={verify} onChange={(e) => { setVerify(e.target.value) }} className='number' name='number' />
                                <button id='verify' onClick={verifyCode}> Verify</button>
                            </div>
                        }
                        {/* <div className='some'>
                            <label className='user'> Instagram Link*</label>
                            <input type='text' value={instagram} onChange={(e) => { setInstagram(e.target.value) }} className='link' name='link' placeholder='Instagram' />
                        </div><br /> */}
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