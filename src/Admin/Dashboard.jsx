import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"


import Rou from "./comp/Routescomp";
import Navbar from "./comp/Navbar";
import React from "react";
import Navbar2 from "./comp/Navbar2";
import BreadCrumb from "./comp/BreadCrumb";
import Footer from "./comp/Footer";

const Dashboard = () => {
    return (
        <>
            <section className=" all" style={{ "backgroundSize": "cover", "minHeight": "100vh" }} >
                <div className="container-fluid" >
                    <div className="row ">
                        <div className="col-md-12 col-12 mb-3 fixed-top  bg-opacity-25 overflow-hidden" style={{ "backgroundColor": "#df1f2be4", "opacity": "0.9" }}>
                            <BreadCrumb />
                        </div>

                        <div className="row d-flex justify-content-evenly pt-md-5 pt-3 mt-5">

                            {/* LEFTSIDE NAVBAR  sm-screen*/}
                            <div className="col-lg-3 col-md-4 d-md-block d-none  ">
                                <div className="card bg-common card-left bg-light bg-opacity-25 kard " >
                                    <div className="card-body ">
                                        <nav className="nav d-md-block d-none" >
                                            <Navbar />
                                        </nav>
                                    </div>
                                </div>
                            </div>

                            {/*RIGHTSIDE NAVBAR lg-screen */}
                            <div className="col-lg-8 col-md-9 d-md-none">
                                <div className="card-header border-bottom mb-3 d-lg-none  " >
                                    <Navbar2 />
                                </div>
                            </div>

                            {/* RIGHTSIDE CONTENT  */}
                            <div className="col-lg-8 col-md-8 px- ">
                                <div className="card p-4 mb-5 bg-light bg-opacity-50 kard">
                                    <Rou />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
export default Dashboard;
