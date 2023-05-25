import React from "react";

const SmePlan = () => {
    // const setUpInsta=()=>{
    //     let appId = "851751795852508";
    //     let redUri = window.location.origin + "/";
    //     let url = `https://api.instagram.com/oauth/authorize?client_id=1286508712171984&redirect_uri=https://paru12.herokuapp.com/&scope=user_profile,user_media&response_type=code`;
    //     // let appSecret = "626e2f65e82b12e85953bf1eb77a4008";
    //     window.open(url, "_blank").focus();
    // }
    return (
        <>
            <section id='pro'>
                <div className='pro-head'>
                    <h2>SME Plan</h2>
                </div>
                <div className='pro-list'>
                    <ul>
                        <li>1 Account</li>
                        <li>Limited advanced discovery services</li>
                        <li>50 Influencer analytics/mo</li>
                        <li>1 Active Campaign</li>
                        <li>FB and YT  Channel Access</li>
                        <li>Data Export as CSV & powerpoint</li>
                        <li> Influencer CRM</li>
                        <li>Story Tracking</li>
                        <li> Dedicated Account Manager</li>
                    </ul>

                    <div className='button'>
                       <button className='btn'>Contact Us  </button>
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
export default SmePlan;