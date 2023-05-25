import React from "react";
import Logo from '../Images/lgo.png';
import '../Index.css';
const SignUpAs = () => {
    return (
        <>
            <section id="options">
                <div className="signinoption">
                    <div id='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='signin-head'>
                        <h1>Sign In As</h1>
                    </div>

                    <div className="buttons-option">
                        <button><ion-icon name="person"></ion-icon> Brand Manager</button>
                        <button><ion-icon name="business"></ion-icon>Company </button>
                        <button><ion-icon name="cog"></ion-icon>  Agency  </button>
                    </div>
                    <div className='privacy-policy'>
                        <span>Privacy Policy</span>
                        <span >|</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>


            </section>
        </>
    );
}
export default SignUpAs;