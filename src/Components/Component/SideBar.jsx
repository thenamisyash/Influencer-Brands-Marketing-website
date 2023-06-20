import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import '../Component/Bounty.css';


const SideBar = () => {
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (e.target) {
    //             setShow(false)
    //         }
    //     }
    //     document.addEventListener("mousedown", handler);
    // })

    const [show, setShow] = useState(false);
    const logOut = () => {
        window.localStorage.removeItem("jwtToken");
        window.localStorage.removeItem("isLoggedIn");
        window.localStorage.removeItem("userName");
        window.localStorage.removeItem("Instagram-Short");
        window.localStorage.removeItem("Access-Token");
        window.localStorage.removeItem("camp");
        window.localStorage.removeItem("Influsername");
        window.location.href = '/';
    }   
    return (
        <>
            <main className={show ? 'space-toggle' : null}>
                <header className={`header ${show ? 'space-toggle' : null}`}>
                    <div className="header-toggle" onClick={() => setShow(!show)}>
                        <ion-icon name="menu-outline" size="large" className="icons"></ion-icon>
                    </div>
                </header>
                <aside className={`sidebar ${show ? 'show' : null}`} >
                    <nav className="nava">
                        <div>
                            <div className="header-toggle" onClick={() => setShow(!show)} >
                                <ion-icon name="close-outline" size="large" className="icons"></ion-icon>
                            </div>
                            <div className="nav-list">
                                <NavLink
                                    to="/Influencer/brand"
                                    className="nav-logo">
                                    <span className="nav-name">Brands</span>
                                </NavLink>
                                <NavLink
                                    to="/Influencer/profile"
                                    className="nav-logo"
                                    onClick={()=>setShow(false)}
                                    >
                                    <span className="nav-name">Profile</span>
                                </NavLink>
                                <NavLink
                                    to="/Influencer/link"
                                    className="nav-logo"
                                    onClick={()=>setShow(false)}
                                    >
                                    <span className="nav-name">Link Profile</span>
                                </NavLink>
                                <NavLink
                                    to="/Influencer/updateprofile/"
                                    className="nav-logo"
                                    onClick={()=>setShow(false)}
                                    >
                                    <span className="nav-name">Update Profile</span>
                                </NavLink>
                                {
                                    localStorage.getItem("userName") && (
                                        <NavLink
                                            to="#"
                                            className="nav-logo">
                                            <span className="nav-name" onClick={logOut}>Logout</span>
                                        </NavLink>
                                    )
                                }
                                {
                                    !localStorage.getItem("userName") && (
                                        <NavLink
                                            to="/Influencer/loginBounty"
                                            className="nav-logo">
                                            <span className="nav-name">Login</span>
                                        </NavLink>
                                    )
                                }
                            </div>
                        </div>
                    </nav>
                </aside>
            </main>
        </>
    );
}
export default SideBar;