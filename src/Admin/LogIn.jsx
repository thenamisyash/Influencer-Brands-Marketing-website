import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import eye from "./img/B_n_T-removebg-preview.png";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import swal from 'sweetalert';
import axios from "axios";
import Footer from "./comp/Footer";
import { baseUrl } from "./PrivateRoutes";
const LogIn = () => {
    // const url = "https://influencer-backend.azurewebsites.net/api/Admin/adminLogin";
    // const url = `${baseUrl}/api/Admin/adminLogin`;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [adminIdd, setAdminIdd] = useState();
    const navigate = useNavigate();

    const UserLogged = () => {
        console.log({ email, password, adminIdd });
        let data = { email, password };




        //1. POST LOGIN API___ 
        axios.post(`${baseUrl}/api/Admin/adminLogin`, {
            email: data.email,
            password: data.password
        }).then((resp) => {
            setAdminIdd(resp.data.Id)
            console.log("the id is ", resp.data.Id)
            console.log("Login response - ", resp.data)

            window.localStorage.setItem("isLoggedIn", true);
            window.localStorage.setItem("Access-Id", resp.data.Id)
            window.localStorage.setItem("Access-Token", resp.data.paru)



            swal("You are successfully logged in", "", "success");
            navigate("/AdminPanel/dashboard/");

            // GetUserName();
            // GetIdNow();/
        }).catch((error) => {
            console.log("Login Api Error - ", error);
            swal("Oops!", "Maybe a Wrong Entry ,Try Again !! ", "warning");
        })
    }



    // 2. GETADMIN DATA BY ID for admin name___ 
    // const GetUserName = () => {


    //     const IdName = window.localStorage.getItem("Access-Id");



    //     axios.get(`${baseUrl}/api/Admin/getAdminDataById/${IdName}`)
    //         .then((resp) => {
    //             console.log("the usestate id is ", adminIdd)  //Response

             
    //             console.log("Get AdminData By Id Response ", resp.data.admin_name) //Response
    //             setAdminName(resp.data.admin_name)
    //             SupConfirm();

    //         }).catch((error) => {
    //             console.log("Get AdminData By Id Error - ", error)
    //         })
    // }
    // 3.   SUPER ADMIN VERIFICATION 0/1_____
    // const SupConfirm = () => {
    //     axios.get(`${baseUrl}/api/Admin/verifySuperAdmin/${adminName}`)
    //         .then((res) => {
    //             console.log("the super admin details -", res.data)
    //             console.log("Verify Super Admin Response -", res.data.ala)
    //             window.localStorage.setItem("allow  - ", res.data.ala);
    //         }).catch((err) => {
    //             console.log("Verify Super Admin Error - ", err)
    //         })
    // }

    const gotocontact = () => {
        navigate("/AdminPanel/signin");
    }
    return (
        <>
            <section className=" all " style={{ "minHeight": "100vh" }} >
                <div className="container ">
                    <div className="row d-flex justify-content-center align-self-center ">
                        <div className="col-12 col-md-8 col-lg col-xl-5 ">
                            <div className="card shadow-4-strong kard my-5 " style={{ 'borderRadius': "1rem" }}>
                                <img src={eye} className=" align-self-center logo1 " alt="..." />
                                <div className="card-body p-5 pt-0">
                                    <hr />
                                    <div className="card-body  " >
                                        <h2 className=" text-center "><u style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>SIGN IN</u></h2>
                                        <form>

                                            {/* Email  */}
                                            <div className="form-outline  mt-4 ">
                                                <label className="form-label h6 " >Email</label>
                                                <input type="email" value={email} name="eMail" autoComplete="off" onChange={(e) => { setEmail(e.target.value) }} className="form-control form-control-lg  field" style={{ "paddingTop": "0.4rem", "paddingLeft": "0.5rem" }} placeholder="Enter your Email" />
                                            </div>

                                            {/* Password */}
                                            <div className="form-outline mt-3 ">
                                                <label className="form-label h6">Password</label>
                                                <input type="password" value={password} name="password" autoComplete="off" onChange={(e) => { setPassword(e.target.value) }} className="form-control form-control-lg  field" style={{ "paddingTop": "0.4rem", "paddingLeft": "0.5rem" }} placeholder="Enter your Password" />
                                            </div>

                                        </form>

                                        {/* Button  */}
                                        <div className="mt-4 text-center">
                                            <button className="btn  btn-block btn-lg  gradient-custom-4  text-body  butt" style={{ "paddingTop": "0.7rem", "backgroundColor": "green" }} type="submit" onClick={UserLogged} > <span className="text-white">Login</span></button>
                                            <br />
                                            <button className="btn  btn-block btn-lg gradient-custom-4 mt-3 text-body butt" style={{ "backgroundColor": "red", "paddingTop": "0.7rem" }} type="submit" onClick={gotocontact}><span className="text-white">Create account</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default LogIn;





