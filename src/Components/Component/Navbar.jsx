import React from "react";
import Logo from '../imgs/bounty.png';
import Human from '../imgs/being_humna.png';
import './Bounty.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <main className="logoHead">
                <div className="logo-head">
                    <div className="none"></div>
                    <Link to="/Influencer/profile">
                        <img src={Logo} alt="logo" width="180px" className="bountylogo" />
                    </Link>
                    <Link to="/Influencer/profile">
                    <img src={Human} alt="human" title="Login" className="human" />
                    </Link>
                </div>
            </main>
        </>
    );
}
export default Navbar;