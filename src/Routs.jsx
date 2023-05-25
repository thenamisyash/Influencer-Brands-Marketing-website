import React from "react";
import { Routes, Route } from "react-router-dom";
import FrontPage from "./FrontPage";
import RouteThreads from "./Threads/RouteThreads";
import RoutesThread from "./RoutesThread";
import Rouz from "./Admin/RoutesM";
const RoutePath = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<FrontPage />} />
                <Route path="/threads/*" element={<RoutesThread />} />
                <Route path="/AdminPanel/*" element={<Rouz />} />
                <Route path="/Influencer/*" element={<RouteThreads />}>
                </Route>
            </Routes>
        </>
    )
}
export default RoutePath;