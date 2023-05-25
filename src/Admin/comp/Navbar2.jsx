import React from "react";
import { Link } from "react-router-dom";


const Navbar2 = () => {




    // const allow = window.localStorage.getItem("allow");

    // const UserAid = window.localStorage.getItem("Access-Id");
    const access4super = window.localStorage.getItem("supConfirm-");



    // const allow = 1;


    // useEffect(() => {
    //     GetUserName();

    // }, []);




    // 1. GETADMIN DATA BY ID for admin name___API-1 
    // const GetUserName = () => {
    //     axios.get(`${baseUrl}/api/Admin/getAdminDataById/${UserAid}`)
    //         .then((resp) => {
    //             console.log("Get AdminData By Id Response --hurhurhhurr-", resp.data.admin_name)

    //             // window.localStorage.setItem("LoggedInUserName-", resp.data.admin_name);
    //             // setAdminName(resp.data.admin_name)
    //             // SupConfirm();

    //             // console.log("this is the logged in admins data -  ", resp.data)
    //             // console.log("admin name is - ", resp.data.admin_name)
    //         }).catch((error) => {
    //             console.log("Get AdminData By Id Error - ", error)
    //         })
    // }


    // 2.   SUPER ADMIN VERIFICATION 0/1_____API-2
    //   const SupConfirm = () => {
    //     axios.get(`${baseUrl}/api/Admin/verifySuperAdmin/${adminName}`)
    //         .then((res) => {
    //             console.log("the super admin details -", res.data)
    //             console.log("Verify Super Admin Response -", res.data.ala)
    //             window.localStorage.setItem("allow  - ", res.data.ala);
    //         }).catch((err) => {
    //             console.log("Verify Super Admin Error - ", err)
    //         })
    // }





    return (
        <>
            <ul className="nav nav-tabs card-header-tabs nav-fill d-flex justify-content-space-between">
                <Link to="/AdminPanel/profile" className="nav-item nav-link text-decoration-none" style={{ "fontSize": "1.5rem" }} > <i className="fa-solid fa-user"></i></Link>
                <Link to="/AdminPanel/security" className="nav-item nav-link text-decoration-none" style={{ "fontSize": "1.5rem" }}> <i className="fa-solid fa-user-shield"></i></Link>
                <Link to="/AdminPanel/activity" className="nav-item nav-link text-decoration-none" style={{ "fontSize": "1.5rem" }}> <i className="fa-solid fa-chart-line"></i> </Link>
                <Link to="/AdminPanel/billing " data-toggle='tab' aria-current="page" style={{ "fontSize": "1.5rem" }} className="nav-item nav-link text-decoration-none"> <i className="fa-solid fa-money-check-alt"></i></Link>
                <Link to="/AdminPanel/insight" className="nav-item nav-link text-decoration-none" style={{ "fontSize": "1.5rem" }}><i className="fa-sharp fa-solid fa-eye"></i> </Link>


                 {
                 (access4super === "ala=1") ? 
                 <Link to="/AdminPanel/removeAdmin" className="nav-item nav-link text-decoration-none" style={{ "fontSize": "1.5rem" }} > <i className="fa-solid fa-user-check "></i> </Link>
                 : 
                 null 
                }  


            </ul>
        </>
    );
}
export default Navbar2;