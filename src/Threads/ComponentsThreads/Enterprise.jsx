import React from 'react'
import '../Index.css';
import {Link} from 'react-router-dom';
function Enterprise() {
    return (
        <>
            <section id='enterprise'>
                <div className='enterprise-head'>
                    <h2>Enterprise</h2>
                </div>
                <div className='enterprise-list'>
                    <ul>
                        <li>Team Accounts for collaboration</li>
                        <li>Team onboarding & Offline Support</li>
                        <li>Unlimited advanced discovery searches</li>
                        <li>Unlimited Influencer analytics</li>
                        <li>Data Expert</li>
                        <li>Unlimited Active Campaigns</li>
                        <li> Influencer CRM</li>
                        <li> Story Tracking</li>
                        <li> API Access</li>
                        <li> Whitelabelled Reports</li>
                    </ul>

                    <div className='button'>
                        <Link to="/" ><button className='btn'>Contact Us  </button></Link>
                    </div>
                    <div className='privacy'>
                        <span>Privacy Policy</span>
                        |
                        <span>Privacy Policy</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Enterprise;