import React from 'react'
import { Routes, Route } from 'react-router-dom';
import '../Components/Component/Bounty.css';
import Dashboard from '../Components/Component/Dashboard';
import Profile from '../Components/Component/Profile';
import LinkPage from '../Components/Component/LinkPage';
import Login from '../Components/Component/Login';
import UpdateProfile from "../Components/Component/UpdateProfile";
import Navbar from '../Components/Component/Navbar';
import SideBar from '../Components/Component/SideBar';
import SignUp from '../Components/Component/Signup';
import ShowData from '../Components/Component/ShowData';
import { AuthProvider } from '../Components/Component/Auth';
import { RequireAuth } from '../Components/Component/RequireAuth';
import Forgot from '../Components/Component/Forgot';
import { Policies } from '../Components/Privacy Policies/Influencer-Policies';
import { BrandsLogo } from '../Components/Component/BrandLogo';
import Drop from '../Components/Component/Remaining/Drop';
import { InformationFacebook } from '../Components/Component/FacebookLoginData';
import { Ongoing } from '../Components/Component/About';
const RouteThreads = () => {
    return (
        <>
            <div className="influencer_routes">
                <AuthProvider>
                    <Navbar />
                    <SideBar />
                    <Routes>
                        <Route path='/' element={<RequireAuth> <Dashboard /></RequireAuth>} />
                        <Route path="brand" element={<Drop />} />
                        <Route path='profile' element={<RequireAuth><Profile /></RequireAuth>} />
                        <Route path='link' element={<RequireAuth> <LinkPage /></RequireAuth>} />
                        <Route path='loginBounty' element={<Login />} />
                        <Route path='signup' element={<SignUp />} />
                        <Route path="updateprofile" element={<RequireAuth><UpdateProfile /></RequireAuth>} />
                        <Route path='showdata' element={<ShowData />} />
                        <Route path='forgot' element={<Forgot />} />
                        <Route path='policies' element={<Policies />} />
                        <Route path='logos' element={<BrandsLogo />} />
                        <Route path='/facebookRegister' element={<InformationFacebook />} />
                        <Route path='/ongoing' element={<Ongoing/>} />
                    </Routes>
                </AuthProvider>
            </div>
        </>
    );
}
export default RouteThreads;