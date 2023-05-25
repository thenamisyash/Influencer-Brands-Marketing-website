import React, { useState } from "react";
import './Bounty.css';
// import axios from "axios";
import './Bounty.css'
// import { Url } from "./RequireAuth";
const Forgot = () => {
    const [email, setEmail] = useState();
    const datas = () => {

    }
    return (
        <>
            <section id="forgot-page">
                <div className="credd">
                    <div className="forgot-password">
                        <label>Forgot Password</label>
                        <input type='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className="email"
                            placeholder="Email" />
                    </div>
                    <div className="forgot-button">
                        <button onClick={datas}>Send</button>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Forgot;