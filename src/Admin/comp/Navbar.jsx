import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { baseUrl } from "../PrivateRoutes";
import axios from "axios";
const Navbar = () => {


    const UserAid = window.localStorage.getItem("Access-Id");
    const UserAname = window.localStorage.getItem("LoggedInUserName-");
    const access4super = window.localStorage.getItem("supConfirm-");





    useEffect(() => {
        GetUserName();
    }, []);




    // 1. GETADMIN DATA BY ID for admin name___API-1 
    const GetUserName = () => {
        axios.get(`${baseUrl}/api/Admin/getAdminDataById/${UserAid}`)
            .then((resp) => {
                console.log("Get AdminData By Id Response --hurhurhhurr-", resp.data.admin_name)
                // setAdminName(resp.data.admin_name)

                window.localStorage.setItem("LoggedInUserName-", resp.data.admin_name);

                SupConfirm();
                // console.log("this is the logged in admins data -  ", resp.data)
                // console.log("admin name is - ", resp.data.admin_name)
            }).catch((error) => {
                console.log("Get AdminData By Id Error - ", error)
            })
    }


    // 2.   SUPER ADMIN VERIFICATION 0/1_____API-2
    const SupConfirm = () => {
        axios.get(`${baseUrl}/api/Admin/verifySuperAdmin/${UserAname}`)
            .then((res) => {
                console.log("the super admin details -", res.data)
                window.localStorage.setItem("supConfirm-", res.data);
                console.log("Verify Super Admin Response -", res.data)


                // window.localStorage.setItem("allow  - ", res.data.ala);
            }).catch((err) => {
                console.log("Verify Super Admin Error - ", err)
            })
    }














    return (
        <>
            <ol className="nav d-md-block text-uppercase fs-5 py-4" >
                <Link to="AdminPanel/profile" className="text-decoration-none" > <i className="fa-solid fa-user  px-3 "></i> Profile </Link>
                <hr />
                <Link to="AdminPanel/security" className="text-decoration-none" > <i className="fa-solid fa-user-shield mr-2 pt-3 px-3 "></i>Security </Link>
                <hr />
                <Link to="AdminPanel/activity" className="text-decoration-none"> <i className="fa-solid fa-chart-line mr-2 pt-3 px-3 "></i> Activity</Link>
                <hr />
                <Link to="AdminPanel/billing" className="text-decoration-none"> <i className="fa-solid fa-money-check-alt mr-2  px-3 pt-3"></i>Billing</Link>
                <hr />
                <Link to="AdminPanel/insight" className="text-decoration-none"><i className="fa-sharp fa-solid fa-eye mr-2 pt-3 px-3 "></i> Insights  </Link>
                <hr />


                {
                    (access4super === "ala=1") ?
                        <Link to="AdminPanel/removeAdmin" className="text-decoration-none" > <i className="fa-solid fa-user-check mr-2 pt-3 px-3 "></i>Remove Admin </Link>
                        :
                        null
                }



            </ol>
        </>
    );
}
export default Navbar;