// import { Outlet, Route, Routes } from "react-router-dom";

import Dashboard from "../Dashboard";
import Activity from "../DashBoard/Pages/Activity";
import Security from "../DashBoard/Pages/Security";
import Billing from "../DashBoard/Pages/Billing";
import Insight from "../DashBoard/Pages/Insights";
import Profile from "../DashBoard/Pages/Profile";
import RemoveAdmin from "../DashBoard/Pages/RemoveAdmin";
import { Outlet, Route, Routes } from "react-router";


const Rou = () => {
    return (
        <>        
            <Routes>
            <Route path="/dashboard/" element={<Dashboard/>}>
                <Route path="activity" element={<Activity/>} >
                <Route index element={<Activity/>}/>
                <Route path='profile' element={<Profile/>} />
                <Route path="security" element={<Security/>} />
                <Route path="billing" element={<Billing/>} />
                <Route path="activity" element={<Activity/>} />
                <Route path="insight" element={<Insight/>} />          
                <Route path="removeAdmin" element={<RemoveAdmin/>} />          
            </Route>
            </Route>
            </Routes>
            <Outlet/>
        </>
    );  
}
export default Rou;
