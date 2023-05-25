import React, { useState } from "react";
import swal from 'sweetalert';
import axios from "axios";
import { baseUrl } from "../../PrivateRoutes";

const Profile = () => {
  const identityNo = localStorage.getItem("Access-Id");
  // console.log("id no is the is the - ", identityNo);

  const url = ` ${baseUrl}/api/Admin/adminupdateById/${identityNo}`;
  // https://bountyandthreadsbackend-new.azurewebsites.net/api/Admin/adminupdateById/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [mobile, setMobile] = useState("");


  const updatedUser = () => {
    let data = { name, email, address, mobile };
    axios.patch(url, {
      email: data.email,
      address: data.address,
      admin_name: data.name,
      phone: data.mobile
    }).then((res) => {
      console.log("Admin Update by Id Response -")
      swal("Updated", "Successfully Updated", "success");
    }).catch((error) => {
      console.log("Admin Update by Id Error - ", error);
      swal("Oops!", "Something went wrong! Try Again.", "error");
      // console.warn("id_no", identityNo);
    })
  }

  return (
    <>
      <div className="profile" id="profile">
        <form>
          <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "2px" }}>PROFILE INFORMATION</h4>
          <hr className=" text-muted " />
          <div className="mt-4">
            {/* Name  */}
            <label className="px-1">Name</label>
            <input type="text" value={name} name="name" onChange={(e) => { setName(e.target.value) }} className="form-control field" placeholder="Enter your full name" style={{ "paddingTop": "0.5rem" }} />
          </div>
          {/* Email  */}
          <div className="mt-3">
            <label className="px-1">Email</label>
            <input type="email" value={email} name="email" onChange={(e) => { setEmail(e.target.value) }} className="form-control field" placeholder="Enter your new email" style={{ "paddingTop": "0.5rem" }} />
          </div>
          {/* Number  */}
          <div className="mt-3">
            <label className="px-1">Contact Number</label>
            <input type="tel" value={mobile} name="contact" onChange={(e) => { setMobile(e.target.value) }} className="form-control field" placeholder="Enter Your Contact Number" style={{ "paddingTop": "0.5rem" }} />
          </div>
          {/* Address  */}
          <div className="mt-3">
            <label className="px-1">Address </label>
            <textarea value={address} name="address" onChange={(e) => { setAddress(e.target.value) }} className="form-control field" id="profield" rows="3" placeholder="Change your address" />
          </div>
          
          {/* Password  */}
          {/* <div className="mt-3">
            <label className="px-1">Password</label>
            <input type="password" value={password} name="password" onChange={(e) => { setPassword(e.target.value) }} className="form-control field" autoComplete="off" placeholder="Enter Your Password" style={{ "paddingTop": "0.5rem" }} />
          </div> */}
          {/* Re-Password */}
          {/* <div className="mt-3">
            <label className="px-1">Password</label>
            <input type="password" value={repass} name="re-password" onChange={(e) => { setRePass(e.target.value) }} className="form-control field" autoComplete="off" placeholder="Re-Enter Your Password" style={{ "paddingTop": "0.5rem" }} />
          </div> */}

          <div className="mt-3 px-1">
            <small className="form-text text-muted ">All of the fields on this page are optional and can be deleted at any time , and by filling them out , you're giving us consent to share this data wherever your user profile appears</small>
          </div>
          <div className="mt-3 p-3">
            <button type="button" onClick={updatedUser} className="btn color-light px-4 butt" style={{ "backgroundColor": "green" }}>Update Profile</button>
            <button type="reset" className="btn px-4 my-3 butt" style={{ "backgroundColor": "red" }}>Reset Changes</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Profile;
