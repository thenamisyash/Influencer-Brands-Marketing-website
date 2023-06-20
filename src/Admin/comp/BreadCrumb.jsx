import { useLocation, useNavigate } from "react-router";
import swal from 'sweetalert';
import React from "react";
import eyes from "../img/P2.gif";

const BreadCrumb = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const gotologin = () => {
        window.localStorage.removeItem("isLoggedIn");
        window.localStorage.removeItem("Access-Token");
        window.localStorage.removeItem("Access-Id");
        window.localStorage.removeItem("Response_Id");
        window.localStorage.removeItem("supConfirm-");
        window.localStorage.removeItem("LoggedInUserName-");
        swal("Logged out!", "You have logged out Successfully, Login Again.", "success");
        navigate("/AdminPanel/login");
    }
    return (
        <>
            <div className="d-flex align-items-center justify-content-between my-2 mx-4 px-4 py-1 bg-light bg-opacity-75 kard ">

                <div className="breadcrumb-item h6 d-md-none d-none">
                    <img src={eyes} className="align-self-center out1" alt="eyes" />
                </div>

                <ul className="breadcrumb mt-1 pt-0 px-2">
                    <li className="breadcrumb-item h6 d-md-block d-none">{location.pathname.toUpperCase().slice(18,).replace("/", " >> ").replace("D/", "D >> ")}</li>
                </ul>


                <span className="breadcrumb-item h6 d-md-none d-sm-block  " style={{ "position": "absolute", "left": "4rem" }}>{location.pathname.slice(18,).replace("/", " >> ").toUpperCase()}</span>
                {/* <span className="breadcrumb-item h6 d-sm-none d-block px-1 " style={{ "position": "fixed", "left": "4rem" }}>{location.pathname.slice(17,).replace(" / "," >> ").toUpperCase()}</span> */}

                {/* <span className="breadcrumb-item h6 d-md-none" style={{ "position": "relative", "right": "7em" }}>Profile Setting</span> */}
                <span className="d-flex align-items-center justify-content-between" >
                    <p className=" h6 px-2 text-muted d-none d-md-block" style={{ "paddingTop": "0.3rem" }}>Logout -</p>

                    <button type="button" className="btn btn-white out " onClick={gotologin} data-bs-toggle="tooltip" data-bs-placement="left" title="Log Out">
                        {/* <i className="fa-sharp fa-lg fa-lock fa-solid fa-bomb"></i> */}
                        <img src={eyes} className="align-self-center out" alt="eyes" />
                    </button>
                </span>
            </div>
        </>
    );
}
export default BreadCrumb;







