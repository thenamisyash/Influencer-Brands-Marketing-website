import { Navigate, Route, Routes } from "react-router";
import React from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Dashboard from "./Dashboard";
import Error from "./DashBoard/Pages/Error";
import Profile from "./DashBoard/Pages/Profile";
import Billing from "./DashBoard/Pages/Billing";
import Insight from "./DashBoard/Pages/Insights";
import Security from "./DashBoard/Pages/Security";
import Activity from "./DashBoard/Pages/Activity";
import PrivateRoutes from "./PrivateRoutes";
import Appoo from "./DashBoard/Chachacha/Appoo";
import Influ_Brand from "./DashBoard/Pages/Influ&Brand";
import RemoveAdmin from "./DashBoard/Pages/RemoveAdmin";
import Testing from "./GraphTesting/Testing";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './index.css'
const Rouz = () => {
    const LoggedIn = window.localStorage.getItem("isLoggedIn");
    console.log(LoggedIn, "login?");

    return (
        <>
            <div className="admin-panel-routes">
                <Routes>
                    <Route path="/" element={LoggedIn ? <Navigate to="/AdminPanel/admin/dashboard/" /> : <LogIn />} />
                    <Route path="/*" element={<Error />} />
                    <Route path="/login" element={<LogIn />} />
                    <Route path="/signin/" element={<SignUp />} />

                    <Route path="/admin/*" element={<PrivateRoutes />}>
                        <Route path="dashboard//*" element={<Dashboard />}>
                            <Route path="activity" element={<Activity />} />
                            <Route path="all" element={<Influ_Brand />} />
                            <Route path='profile' element={<Profile />} />
                            <Route path="security" element={<Security />} />
                            <Route path="billing" element={<Billing />} />
                            <Route path="insight" element={<Insight />} />
                            <Route path="chachacha" element={<Appoo />} />
                            <Route path="chachach" element={<Testing />} />
                            <Route path="removeAdmin" element={<RemoveAdmin />} />
                            <Route index element={<Navigate to="activity" />} />
                        </Route>
                    </Route>
                </Routes>
            </div>
        </>
    );
}
export default Rouz;

