import React, { useState } from 'react'
import Logo from '../Images/lgo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuthorization } from './Auth';
import { Base } from './Auth';
import swal from 'sweetalert';
const SignIn = () => {
    const navigate = useNavigate();
    const [brandName, setBrandName] = useState("");
    const [password, setPassword] = useState("");

    const authorize = useAuthorization();
    const userSubmit = () => {
        let user = { brandName, password };
        authorize.login(brandName);
        axios.post(`${Base}api/Brands/brandsLogin`, {
            email: user.brandName.toLowerCase(),
            password: user.password
        })
            .then((res) => {
                another()
                localStorage.setItem("JWT-Token", res.data.paru);
                localStorage.setItem("email", res.data.email);
                swal("Login Successful", "", "success");
            }).catch((err) => {
                console.log("err", err);
                swal("Inappropriate Credentials", "", "error");
            })
    }
    const another = () => {
        axios.get(`${Base}api/Brands/getbrandsDataByUsername/${brandName}`)
            .then((res) => {
                // console.log(res.data.Brands_name)
                localStorage.setItem("BrandName", res.data.Brands_name)
                navigate('/threads');
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <>
            <section id='signin'>
                <div className='signinpage'>
                    <div id='logo'>
                        <img src={Logo} alt="logo" />
                    </div>

                    <div className='signin-head'>
                        <h1>Sign In</h1>
                    </div>

                    <div id='login'>
                        <div className='thredsinput'>
                            <ion-icon id="person" name="person" size="small"></ion-icon>
                            <input type="text" className='username' value={brandName} onChange={(e) => { setBrandName(e.target.value) }} name='username' placeholder='Username' required />
                        </div>
                        <div className='threadsinput'>
                            <ion-icon id="lock" size="small" name="lock-closed"></ion-icon>
                            <input type="password" className='password' value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' placeholder='Password' required />
                        </div>
                        <button type='submit' onClick={userSubmit} >Log In</button>
                        <span>Forgot Password?</span>
                    </div>
                    <div className='other'>
                        <h3>Sign Up With</h3>
                    </div>


                    <span id='create'>don't have an account,<Link to="/threads/brandsign">  <b className='bold'>sign up</b></Link></span>
                    <div className='privacy-policy'>
                        <span><Link to="/threads/terms/" style={{ "color": "black" }}> Privacy Policy</Link></span>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignIn;