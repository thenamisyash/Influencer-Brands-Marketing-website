import React, { useState } from "react";
import '../Index.css';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Base } from "./Auth";
import swal from "sweetalert";

const Brandsign = () => {
    const [brand, setBrand] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [phone, setPhone] = useState("");
    const [instagram, setInstagram] = useState("");
    const navigate = useNavigate();
    const userSubmit = () => {
        // console.log({ brand, userName, email, street, city, state, zip, password, rePassword, phone, instagram });
        let userData = { brand, userName, email, street, city, state, zip, password, rePassword, phone, instagram };
        axios.post(`${Base}api/Brands/brandsRegister`, {
            Brands_name: userData.brand,
            Brands_username: userData.userName,
            email: userData.email.toLowerCase(),
            Street_Address: userData.street,
            city: userData.city,
            State: userData.state,
            postal_code: userData.zip,
            password: userData.password,
            repassword: userData.rePassword,
            phone: userData.phone,
            Instagram_link: userData.instagram
        })
            .then((res) => {
                swal("Login Successful", "", "success");
                navigate('/threads/createdashboard');
            }).catch((err) => {
                console.log("err", err);
                swal("Recheck The form", "", "error");
            })
    }
    return (
        <>
            <section id="brand-signForm">
                <div className="brandsign">
                    <div className="brand-head">
                        <h2>Brand Sign Up</h2>
                    </div>
                    <div className="brand-fields">
                        <div id="brand-name">
                            <label>Brand Name</label>
                            <input type="text" value={brand} onChange={(e) => { setBrand(e.target.value) }} className="username" placeholder="Eg.Puma" />
                        </div>
                        <div id="brand-name">
                            <label>Brand Username</label>
                            <input type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} className="username" placeholder="Username" />
                        </div>
                        <div id="brand-name">
                            <label>Email </label>
                            <input type="email" value={email} onChange={(e) => { setEmail(e.target.value) }} className="username" placeholder="Email" />
                        </div>
                        <div id='address'>
                            <label className="user">Address</label>
                            <input type="text" value={street} onChange={(e) => { setStreet(e.target.value) }} id='street' name='address' placeholder='Street' />
                            <div id='both'>
                                <input type="text" value={city} onChange={(e) => { setCity(e.target.value) }} id='city' name='city' placeholder='City' />
                                <input type="text" value={state} onChange={(e) => { setState(e.target.value) }} id='state' name='state' placeholder='State/Province' />
                            </div>
                            <input type="text" value={zip} onChange={(e) => { setZip(e.target.value) }} id='zip' name='zip' placeholder='Zip / postal code' />
                        </div>
                        <div id="brand-name">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="username" name="passsword" placeholder="Password" />
                        </div>
                        <div id="brand-name">
                            <label>Re-Password</label>
                            <input type="password" value={rePassword} onChange={(e) => { setRePassword(e.target.value) }} className="username" name="passsword" placeholder="Password" />
                        </div>
                        <div id="brand-name">
                            <label>Phone</label>
                            <input type="tel" value={phone} onChange={(e) => { setPhone(e.target.value) }} className="username" name="phone" placeholder="Phone Number" />
                        </div>
                        <div id="brand-name">
                            <label>Instagram</label>
                            <input type="text" value={instagram} onChange={(e) => { setInstagram(e.target.value) }} className="username" name="instagram" placeholder="Instagram Username" />
                        </div>
                        <div className="button-submit">
                            <button onClick={userSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Brandsign;