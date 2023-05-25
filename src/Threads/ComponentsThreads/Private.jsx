import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthorization } from "./Auth";
export const Private = ({children}) => {
    const authorize = useAuthorization();

    if(!authorize.userName && !localStorage.getItem("email")) {
        return <Navigate to='/threads/signin'/>
    }
    return children
}