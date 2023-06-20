import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import eyes from "./img/B_n_T-removebg-preview.png";
import { useNavigate } from "react-router";
import React, { useState } from "react";
import axios from "axios";
import swal from 'sweetalert';
import Footer from "./comp/Footer";
import { baseUrl } from "./PrivateRoutes";

const SignUp = () => {
  // const url = `${baseUrl}/api/Admin/adminRegister`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRePass] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");

  const userSaved = () => {
    console.log({ name, email, password, repass, address, mobile });
    let data = { name, email, password, repass, address, mobile };
    axios.post(`${baseUrl}/api/Admin/adminRegister`, {
      admin_name: data.name,
      email: data.email,
      password: data.password,
      repassword: data.repass,
      address: data.address,
      phone: data.mobile
    }).then((res) => {
      navigate("/AdminPanel/Admin/login");
      swal("You are successfully Signed Up", "Try Login", "success");
    }).catch((error) => {
      console.log("error", error);
      swal("Oops!", "Something went wrong! Try Again.", "error");
    })
  };

  const navigate = useNavigate();
  const gotocontact = () => {
    navigate("/AdminPanel/Admin/login");
  }

  return (
    <>
      <section className="all" >
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card my-4 kard">
                <img src={eyes} className="align-self-center logo1" alt="eyes" />
                <div className="card-body px-5 pb-5 ">
                  <hr className="mx-0" style={{ "color": "#df1f2be4" }}></hr>
                  <h2 className="text-uppercase text-center mb-4"><u style={{ "opacity": "1", "fontFamily": "Blacklisted", "letterSpacing": "2px" }}>Create an account </u></h2>
                  <form >
                    {/* Name  */}
                    <div className="form-outline ">
                      <label className="form-label h6 " >User Name</label>
                      <input type="text" value={name} name="name" onChange={(e) => { setName(e.target.value) }} className="form-control form-control-lg field" placeholder="Enter your Admin Username" />
                    </div>

                    {/* Email  */}
                    <div className="form-outline mt-3">
                      <label className="form-label h6" >Email</label>
                      <input type="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control form-control-lg field" placeholder="Enter your Email" />
                    </div>

                    {/* Contact Number  */}
                    <div className="form-outline mt-3">
                      <label className="form-label h6" >Contact Number</label>
                      <input type="tel" value={mobile} name="mobile" onChange={(e) => { setMobile(e.target.value) }} pattern="[0-9]{3}-[0-9]{4}" className="form-control form-control-lg field" placeholder="Enter Your Contact Number" />
                    </div>

                    {/* Address  */}
                    <div className="form-outline mt-3">
                      <label className="form-label h6" >Address</label>
                      <input type="text" value={address} name="address" onChange={(e) => { setAddress(e.target.value) }} className="form-control form-control-lg field" placeholder="Enter Your Address" />
                    </div>

                    {/* Password  */}
                    <div className="form-outline mt-3">
                      <label className="form-label h6" >Password</label>
                      <input type="password" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control form-control-lg field" placeholder="Enter Password" autoComplete="off" />
                    </div>

                    {/* ReEntered Password  */}
                    <div className="form-outline mt-3">
                      <label className="form-label h6 " >Password</label>
                      <input type="password" value={repass} name="password" onChange={(e) => { setRePass(e.target.value) }} className="form-control form-control-lg field" placeholder="Re-Enter your password" autoComplete="off" />
                    </div>

                    {/* BUTTONS  */}
                    <div className="d-flex justify-content-center flex-column mt-4">
                      <button type="button" onClick={userSaved} className="btn  btn-block btn-lg gradient-custom-4  text-body" style={{ "backgroundColor": "green" }}> <span className="text-white">Register</span> </button>
                      <button type="button" onClick={gotocontact} className="btn  btn-block btn-lg gradient-custom-4 mt-3  text-body" style={{ "backgroundColor": "red" }}> <span className="text-white">Already have an account</span></button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
export default SignUp;