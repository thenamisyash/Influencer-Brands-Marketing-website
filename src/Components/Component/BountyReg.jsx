import React from "react";
import './Bounty.css';
import { useNavigate } from "react-router-dom";
const Bounty = () => {
    const navigate = useNavigate();
    const skip = () => {
        navigate("/Influencer/profile")
    }
    return (
        <>
            <section className="Register-page">
                <div className="Register">
                    <div className="Heading">
                        <p>REGISTER</p>
                    </div>
                    <div className="para">
                        <p className="register-para">
                            Learn how to become brand ambassador .
                        </p>
                        <p className="register-para">
                            Collobrate with the exciting brand campaign
                        </p>
                        <p className="register-para">
                            A go-to place for all influencers where they can learn, grown & Collobrate.
                        </p>
                    </div>
                    <button className='skip' onClick={skip}>Skip</button>
                </div>
            </section>
        </>
    )
}
export default Bounty;