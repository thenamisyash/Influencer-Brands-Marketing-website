import React from "react";

const Report = () => {
    return (
        <>
            <section id="report">
                <div className="report-page">
                    <form id="report-form">
                        <div className="fields">
                            <label>Report Title</label>
                            <input type="text" className="title" placeholder="Dyson Stories Report" />
                        </div>
                        <div className="fields">
                            <label> Hashtag </label>
                            <input type="text" className="title" placeholder="#username (Stories Report)" />
                        </div>
                        <div className="fields">
                            <label> Mentions </label>
                            <input type="text" className="title" placeholder="@username (Stories Report)" />
                        </div>
                        <div className="fields">
                            <label> Influencer Usernames </label>
                            <input type="text" className="title" placeholder="@username (Stories Report)" />
                        </div>

                        <div className="radios">
                            <input type="radio" />
                            <label>Schedule this report over a period of time</label>
                        </div>
                        <div className="buton">
                            <button className="btn-1" type="submit"><ion-icon name="stats-chart"></ion-icon>Get Report</button></div>
                    </form><br/><hr/>
                    <p id="para">Schedule Reports</p>
                    <hr />
                    <span id="span">There are no scheduled reports at the moment</span>
                </div>
            </section>
        </>
    );
}
export default Report;