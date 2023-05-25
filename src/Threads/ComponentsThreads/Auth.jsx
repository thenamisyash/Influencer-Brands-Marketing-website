import {React, useContext} from "react";
import { useState, createContext } from "react";
import '../Index.css'
const authContext = createContext(null)

export const AuthProvide = ({children}) =>{
    const [userName , setUserName] = useState(null);
    const login = (userName) => {
        setUserName(userName)
    }
    const logOut = () => {
        setUserName();
    }
    return (
        <authContext.Provider value={{userName, login, logOut}}>
            {children}
        </authContext.Provider> 
    )
}
export const useAuthorization = () => {
    return useContext(authContext)
}
// export const Base = "http://localhost:8081/";
export const Base = "https://bountyandthreads-backend.azurewebsites.net/";
