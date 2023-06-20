import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./Auth";
export const RequireAuth = ({ children }) => {
    const auth = useAuth();

    if (!auth.user && !localStorage.getItem("userName", "jwtToken")) {
        return <Navigate to='/Influencer/loginBounty' />
    }
    return children
}
export const Url = "https://bounty-and-threads-backend.azurewebsites.net/";
// export const Url = "http://localhost:8081/"


export const redirect = () => {
    let url = `${Url}api/BasicDisplay/authorize_user`;
    window.open(url, "_blank");
}