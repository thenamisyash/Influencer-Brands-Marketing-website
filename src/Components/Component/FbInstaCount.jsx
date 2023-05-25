import React from "react";
import './Bounty.css';
const Count = (props) => {
    return (
        <>
            <main id="countfb">
                {/* <div className="facebook-section">
                    <div className="contentfacebook">
                        <div className="logoandviews">
                            <ion-icon name="logo-facebook"></ion-icon>
                            <span>1K Views</span>
                        </div>
                        <div className="content">
                            <div className="first-sec">
                                <h6>4.2M</h6>
                                <span>Followers</span>
                            </div>
                            <div className="first-sec">
                                <h6>90</h6>
                                <span>Reactions</span>
                            </div>
                            <div className="first-sec">
                                <h6>345</h6>
                                <span> Comments</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-item">
                        <span>Average</span>
                        <span>Engagement Rate: 5.2%</span>
                    </div>
                </div> */}

                <div className="facebook-section">
                    <div className="contentfacebook">
                        <div className="logoandviews">
                            <ion-icon name="logo-instagram"></ion-icon>
                            <span>2K Views</span>
                        </div>
                        <div className="content">
                            <div className="first-sec">
                                <h6>{props.data.followers_count}</h6>
                                <span>Followers</span>
                            </div>
                            <div className="first-sec">
                                <h6>{props.data.total_likes_count}</h6>
                                <span>Likes</span>
                            </div>
                            <div className="first-sec">
                                <h6>0</h6>
                                <span>Comments</span>
                            </div>
                        </div>
                    </div>
                    <div className="right-item">
                        <span>Average</span>
                        <span>Engagement Rate: {parseInt(props.data.in_engagement)}%</span>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Count;