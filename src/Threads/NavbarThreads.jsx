import React from 'react'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Images/threads-remover.png';
import './Index.css';
function NavbarThreads() {
    const [show, setShow] = useState(false);
    const logout = () => {
        localStorage.removeItem("email", "BrandName", "JWT-Token");
        localStorage.removeItem("BrandName", "JWT-Token");
        localStorage.removeItem("JWT-Token");
        localStorage.removeItem("BrandToken");
        window.location.href = '/';
    }
    return (
        <> 
            <div className='navbar-brands'>
                <div className='nav-items'>
                    {
                        show ?
                            <ion-icon name="close-outline" onClick={() => setShow(!show)} id='icons'></ion-icon>
                            :
                            <ion-icon name="menu-outline" onClick={() => setShow(!show)} id='icons'></ion-icon>
                    }
                </div>
                <div className='logss'>
                    <img src={Logo} alt="threads" />
                </div>
                <div id='none'>
                </div>
            </div>

            <div className='nav-list'>
                {show && <ul className='navv show'>
                    <NavLink to='/threads/' id='profile'> <li>Dashboard</li></NavLink>
                    <NavLink to='/threads/enterprise' id='profile'> <li>Enterprise</li></NavLink>
                    <NavLink to='/threads/proplan' id='profile'> <li>Pro Plan</li></NavLink>
                    <NavLink to='/threads/smeplan' id='profile'> <li>SME Plan</li></NavLink>
                    <NavLink to='/threads/linkaccount' id='profile'>  <li>Link Account</li></NavLink>
                    <NavLink to='/threads/campaignList' id='profile'>  <li>My Campaigns</li></NavLink>
                    <NavLink to='/threads/filters' id='profile'>  <li>Filters</li></NavLink>
                    <NavLink to='/threads/trendsDashboard' id='profile'>  <li>Create Trends Dashboard</li></NavLink>
                    {/* <NavLink to='/threads/report' id='profile'>  <li>Report</li></NavLink> */}
                    <NavLink to='/threads/influencershow' id='profile'>  <li>Search </li></NavLink>
                    <NavLink to='/threads/briefForm' id='profile'>  <li>Campaign Brief Form</li></NavLink>
                    {
                        localStorage.getItem("email") ?
                            <li onClick={logout} id="">Log Out</li>
                            :
                            <NavLink to="/threads/signin" id='profile'> <li>Login</li></NavLink>
                    }
                </ul>
                }
            </div>
        </>
    )
}

export default NavbarThreads;