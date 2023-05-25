import { useState } from "react";
import swal from 'sweetalert';
import axios from "axios";
import { baseUrl } from "../../PrivateRoutes";

const Security = () => {
  // const identityNo = localStorage.getItem("Response_Id");
  const identityNo = localStorage.getItem("Access-Id");
  // console.log("id no is the security is the - ", identityNo);

  const [oldpass, setOldPass] = useState("");
  const [password, setPassword] = useState("");
  const [repass, setRePass] = useState("");
  // const navigate = useNavigate();

 const ResetPassword = (e) => {
   // used for______
    e.preventDefault();
    let data = { oldpass, password, repass };
    // console.warn(data.id);

    axios.patch(`${baseUrl}/api/Admin/resetPasswordAdmin/${identityNo}`, {
      old: data.oldpass,
      neew: data.password,
      cpassword: data.repass
    }).then((res) => {
      swal("Updated", "Successfully Updated", "success");
      // navigate("/admin/dashboard/");
    }).catch((error) => {
      console.log("error", error);
      swal("Oops!", "Something went wrong! Try Again.", "error");
    })
  }

  return (
    <>
      <div className="tab-pane " id="acc_setting">
        <h4 style={{ "opacity": "0.9", "fontFamily": "Blacklisted", "letterSpacing": "3px" }}>SECURITY SETTING</h4>
        <hr className=" text-muted " />
        <div>
          <form>
            <div className="form-group">
              <label >Change Password</label>
              <input type="password" value={oldpass} name="name" onChange={(e) => { setOldPass(e.target.value) }} autoComplete="off" className="form-control  mt-1" placeholder="Enter your old password" />
              <input type="password" value={password} name="name" onChange={(e) => { setPassword(e.target.value) }} autoComplete="off" className="form-control mt-1" placeholder="New password" />
              <input type="password" value={repass} name="name" onChange={(e) => { setRePass(e.target.value) }} autoComplete="off" className="form-control mt-1" placeholder="Confirm new password" />
            </div>

            <div className="mt-3 mx-1">
              {/* <label className="pb-2">Two Factor Authentication</label> <br /> */}
              <button type="submit" onClick={ResetPassword} className="mx-0 px-2 btn btn-primary mb-2">Reset Password </button> <br />
              <small className="form-text text-muted px-0">Two factor authentication adds on additional layer of security to your account by requiring more than just a password to log in.</small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Security;