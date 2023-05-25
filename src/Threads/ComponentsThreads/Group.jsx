import React, { useState } from "react";
import '../Index.css';
import Tabs, { Tab } from 'react-best-tabs';
const Group = () => {
    const [active, setActive] = useState(0)
    return (
        <>
            <section id="group">
                <div className="group-page">
                    <Tabs
                        activeTab="1"
                        className="tabs"
                        ulClassName="unorder"
                        activeTabIndex={active} onTabClick={setActive}
                    >
                        <Tab title="Influencer" className="title-1">
                        </Tab>
                        <Tab title="Audience" className="title-2">
                        </Tab>
                        <Tab title="Groups  " className="title-3">
                        </Tab>
                    </Tabs>

                    <div className="single-input">
                        <input type="text" className="single" placeholder="Search by name/handle" />
                    </div>
                    {/* <div className="radio">
                        <h5>Gender</h5>
                        <div className="gender">
                            <div className="male">
                                <input type="radio" id="male" name="gender" value="male" />
                                <label for="male">Male</label>
                            </div>
                            <div className="female">
                                <input type="radio" id="female" name="gender" value="Female" />
                                <label for="female">Female</label>
                            </div>
                        </div>
                    </div>
                    <div className="intrests">
                        <h5>Intrests</h5>
                        <input type="text" className="intrest" placeholder="Eg.Travel, Food, Fitness, etc." />
                    </div>

                    <div className="Brands">
                        <h5>Brands</h5>
                        <input type="text" className="brand" placeholder="Eg. Pepsi, Samsung , Slice etc." />
                    </div>
                    <div className="location">
                        <h5>Location</h5>
                        <input type="text" className="locations" placeholder="India" />
                    </div>
                    <div className="followers">
                        <div className="followers-head">
                            <h5>Followers</h5>
                        </div>
                        <div className="follow">
                            <div className="first">
                                <p>5000</p>
                                <div className="upsdown">
                                    <ion-icon name="caret-up-circle-outline"></ion-icon>
                                    <ion-icon name="caret-down-circle-outline"></ion-icon>
                                </div>
                            </div>
                            <div className="second">
                                <p>1000000</p>
                                <div className="upsdown">
                                    <ion-icon name="caret-up-circle-outline"></ion-icon>
                                    <ion-icon name="caret-down-circle-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div><br /> */}
                </div>
            </section>
        </>
    );
}
export default Group;