import React from "react";
import { Link } from "react-router-dom";
import '../Index.css';  
const Pro = () => {
    return (
        <>
            <section id='pro'>
                <div className='pro-head'>
                    <h2>Pro Plan</h2>
                </div>
                <div className='pro-list'>
                    <ul>
                        <li>1 Account</li>
                        <li>Access to data for 1 Region</li>
                        <li>Unlimited advanced discovery searches</li>
                        <li>200 Influencer analytics / mo</li>
                        <li>3 Active Campaigns</li>
                        <li>Data Export as CSV & Powerpoint</li>
                        <li> Influencer CRM</li>
                        <li> IG,FB,YT & TikTok available</li>
                        <li> Dedicated Account Manager</li>
                        <li> Story Tracking (add on)</li>
                        <li> Whitelabelled Reports</li>
                        <li> Collaboration Accounts </li>
                    </ul>

                    <div className='button'>
                        <Link to="/" >   <button className='btn'>Contact Us  </button></Link>
                    </div>
                    <div id='privacy'>
                        <span>Privacy Policy</span>
                        <span >|</span>    
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Pro;