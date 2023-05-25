import React from "react";
import Logo from '../imgs/bounty.png';
import Human from '../imgs/being_humna.png';
import './Bounty.css';
const Navbar = () => {
    return (
        <>
            <main className="logoHead">
                <div className="logo">
                    <div className="none"></div>
                    <img src={Logo} alt="logo" width="180px" className="bountylogo" />
                    <img src={Human} alt="human" title="Login" className="human" />
                </div>
            </main>
        </>
    );
}
export default Navbar;