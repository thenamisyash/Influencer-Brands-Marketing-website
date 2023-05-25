import React from "react";
import { Routes, Route } from "react-router-dom";
import ThreadsDashboard from "./Threads/Dashboard";
import NavbarThreads from "./Threads/NavbarThreads";
import Enterprise from './Threads/ComponentsThreads/Enterprise';
import Pro from './Threads/ComponentsThreads/Pro-Plan';
import SignIn from './Threads/ComponentsThreads/SignIn';
import SignUpAs from './Threads/ComponentsThreads/SignupAs';
import Group from './Threads/ComponentsThreads/Group';
import LinkAccount from './Threads/ComponentsThreads/Link';
import SmePlan from './Threads/ComponentsThreads/SME';
import Report from './Threads/ComponentsThreads/Report';
import Filters from './Threads/ComponentsThreads/Filters';
import CreateDashboard from './Threads/ComponentsThreads/CreateDashboard';
import Brandsign from './Threads/ComponentsThreads/Brandsign';
import { AuthProvide } from "./Threads/ComponentsThreads/Auth";
import { Private } from "./Threads/ComponentsThreads/Private";
import Profile from "./Threads/ComponentsThreads/Profile";
import { Privacy } from "./Threads/Policies";
import { BriefForm } from "./Threads/ComponentsThreads/briefForm";
import { Approve } from "./Threads/ComponentsThreads/Approve";
import { ListOfCampagin } from "./Threads/ComponentsThreads/CampaingForm";
import { Trends } from "./Threads/ComponentsThreads/CreateTrendsDashboard";
import { SearchInfluencer } from "./Threads/ComponentsThreads/SearchInfluencer";
const RoutesThread = () => {
    return (
        <div className="threads">
            <AuthProvide>
                <NavbarThreads />
                <Routes>
                    <Route path='/' element={<Private> <ThreadsDashboard /> </Private>} />
                    <Route path='enterprise' element={<Enterprise />} />
                    <Route path='proplan' element={<Pro />} />
                    <Route path='signin' element={<SignIn />} />
                    <Route path='signinas' element={<SignUpAs />} />
                    <Route path='group' element={<Private> <Group /> </Private>} />
                    <Route path='linkaccount' element={<LinkAccount />} />
                    <Route path='smeplan' element={<SmePlan />} />
                    <Route path='report' element={<Private> <Report /></Private>} />
                    <Route path='filters' element={<Private> <Filters /></Private>} />
                    <Route path='createdashboard' element={<CreateDashboard />} />
                    <Route path='brandsign' element={<Brandsign />} />
                    <Route path='profile' element={<Private> <Profile /></Private>} />
                    <Route path='terms' element={<Privacy />} />
                    <Route path="briefForm" element={<Private> <BriefForm /></Private>} />
                    <Route path="approve" element={<Approve />} />
                    <Route path="campaignList" element={<Private> <ListOfCampagin /></Private>} />
                    <Route path="trendsDashboard" element={<Private> <Trends /></Private>} />
                    <Route path="influencershow" element={<Private> <SearchInfluencer /></Private>} />
                </Routes>
            </AuthProvide>
        </div>
    );
}
export default RoutesThread;