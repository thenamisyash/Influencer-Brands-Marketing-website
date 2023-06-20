import React, { useState } from 'react';
import './Bounty.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { Url } from './RequireAuth';
import swal from "sweetalert";
import { redirect } from './RequireAuth';
import { CirclesWithBar } from 'react-loader-spinner'

function Login() {
    const[isLoader,setIsLoader]=useState(false)

    const loginData = () => {
        setIsLoader(true)
        axios.get(`${Url}api/Influencer/getinfluencerDataByUsername/${userName}`)
            .then((res) => {
                setIsLoader(false)
                localStorage.setItem("Influsername", res.data.Influencer_username)
            }).catch((err) => {
                setIsLoader(false)
                console.log(err)
            })
    }
    const responseFacebook = (response) => {
        // console.log(response);
        if (!response.name) {
            window.localStorage.clear();
        }
        else {
            window.localStorage.setItem("userName", response.email)
            window.localStorage.setItem("Influsername", response.name)
            faceLogin(response.name)
        }
    }
    const faceLogin = (name) => {
        let email = localStorage.getItem("userName")
        axios.post(`${Url}api/BasicDisplay/verifying`, {
            email: email,
            username: name
        }).then((res) => {
            // console.log(res.data)
            if (res.data != "NotFound") {
                localStorage.setItem("userName", res.data.email)
                console.log(res.data.email)
                redirect()
            } else {
                navigate("/Influencer/facebookRegister")
            }
        }).catch((err) => {
            console.log(err)
        })
    }   
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const auth = useAuth();
    const [password, setPassword] = useState("");
    const userLogIn = () => {
        let data = { userName, password };
        auth.login(userName);

        setIsLoader(true)
        axios.post(`${Url}api/Influencer/influencerLogin`, {
            email: data.userName.toLowerCase(),
            password: data.password
        }).then((res) => {
            setIsLoader(false)
            redirect()
            loginData()
            localStorage.setItem("jwtToken", res.data);
            localStorage.setItem("userName", data.userName);
            swal("Login Successful", "", "success");
            localStorage.setItem("isLoggedIn", true);
            navigate('/Influencer/', { replace: true });
        }).catch((err) => {
            setIsLoader(false)
            console.log("err", err);
            swal("Recheck Email & Password", "", "error");
        });
    }
    const forgot = () => {
        navigate('/Influencer/forgot')
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
            <section className='login-comp'>
                <div className='login-page'>
                    <div id='form-page' >
                        <div className='input-field'>
                            <label id='user'>Username</label>
                            <div className='input'>
                                <ion-icon name="person-circle-outline" id="icon"></ion-icon>
                                <input type="email" value={userName} onChange={(e) => {
                                    setUserName(e.target.value)
                                }} name='username' className='fieldinput' required />
                            </div>
                        </div>
                        <div className='input-field'>
                            <label id='user'>Password</label>
                            <div className='input'>
                                <ion-icon name="lock-open-outline" id="icon"></ion-icon>
                                <input type="password" value={password} onChange={(e) => {
                                    setPassword(e.target.value)
                                }} name='password' className='fieldinput' required />
                            </div>
                            <span onClick={forgot}> Forgot Password?</span>
                        </div>
                        <button type='submit' className='btn-submit' onClick={userLogIn}>Login</button>
                    </div>
                    <div id='sect'>
                        <span className="partition">or</span>
                    </div>
                    <h4 className='signin'>sign in with</h4>
                    <div className='button-grp'>
                        <FacebookLogin
                            appId="851751795852508"
                            autoLoad={false}
                            callback={responseFacebook}
                            fields="name,email,picture"
                            isMobile={false}
                            render={renderProps => (
                                <button className='google' onClick={renderProps.onClick} >Facebook</button>
                            )}
                        />
                    </div>
                    <br />
                    <span className='create'>don't have an account,<Link to="/Influencer/signup"> <b className='bold'>sign up</b></Link></span>
                    <div className='privacies'>
                        <span className='privacy-poli'> <Link to="/influencer/policies" id='text' style={{ "color": "#2E2E2E" }}>Privacy Policies</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Login;