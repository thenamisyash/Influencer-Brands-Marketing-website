import React from "react";
import Virat from '../Images/virat.jpg';
const Profile = () => {
    return (
        <>
            <section id="profileThreads">
                <div className="up-section">
                    <div className="img-brand">
                        <img src={Virat} alt=" yash" width="170px" />
                    </div>
                    <div className="info-brand">
                        <h4> Virat Kohli </h4>
                        <span> Carpedium!@ one8world</span>
                        <div className="follower-brand">
                            <span><ion-icon name="people"></ion-icon>7,29,965</span>
                            <span><ion-icon name="location-outline"></ion-icon>India</span>
                            <span><ion-icon name="pricetags-outline"></ion-icon>Above$5500</span>
                        </div>
                        <div className="ionic">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <ion-icon name="logo-facebook"></ion-icon>
                            <ion-icon name="logo-youtube"></ion-icon>
                            <ion-icon name="logo-twitter"></ion-icon>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Profile;